import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const NotesContext = createContext(null);

const NotesContextProvider = (props) => {
  const [showModal, setshowModal] = useState(false);
  const [createNotes, setCreateNotes] = useState(false);
  const [specificNote, setSpecificNote] = useState({
    name: "",
    color: "",
    data: {},
  });
  const [note, setNote] = useState({
    name: "",
    color: "",
    data: {},
  });
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);

    const savedNote = JSON.parse(localStorage.getItem("specificNote"));
    const savedCreateNotes = JSON.parse(localStorage.getItem("createNotes"));

    if (savedNote && savedCreateNotes) {
      setSpecificNote(savedNote);
      setCreateNotes(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddClick = () => {
    setshowModal(true);
  };

  const handleCloseClick = () => {
    setNote({ name: "", color: "", data: {} });
    setshowModal(false);
  };

  const handleOverlayClick = (event) => {
    event.preventDefault();
    if (event.target.classList.contains("modal-overlay")) {
      handleCloseClick();
    }
  };

  const handleClickNote = (note) => {
    setSpecificNote(note);
    setCreateNotes(true);

    localStorage.setItem("specificNote", JSON.stringify(note));
    localStorage.setItem("createNotes", JSON.stringify(true));
  };

  const GoBack = () => {
    setCreateNotes(false);
    setSpecificNote({
      name: "",
      color: "",
      data: {},
    });

    localStorage.removeItem("specificNote");
    localStorage.setItem("createNotes", JSON.stringify(false));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      const updatedNote = { ...prevData, [name]: value };
      return updatedNote;
    });
  };

  const handleColorSelect = (color) => {
    setNote((prevNote) => ({
      ...prevNote,
      color: color,
    }));
  };

  const handleSaveNote = () => {
    if (note.name.trim() === "") {
      toast.error("Please enter a group name before saving!");
      return;
    }

    if (note.name.trim().split(/\s+/).length < 2) {
      toast.error("Name should be at least 2 words!!");
      return;
    }

    const isDuplicate = notes.some(
      (existingNote) =>
        existingNote.name.toLowerCase() === note.name.toLowerCase()
    );

    if (isDuplicate) {
      toast.error("Please enter a different name.");
      return;
    }

    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    toast.success("Group Created Successfully");
    handleCloseClick();
  };

  const handleNoteTextChange = (e) => {
    e.preventDefault();
    setNoteText(e.target.value);
  };

  const formatDateTime = () => {
    const now = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day} ${month} ${year} <span class="dot">•</span> ${hours}:${minutes} ${ampm}`;
  };

  const saveNoteContent = () => {
    if (noteText.trim() === "") {
      return;
    }

    const noteIndex = notes.findIndex((n) => n.name === specificNote.name);

    if (noteIndex === -1) {
      return;
    }

    const updatedNotes = [...notes];

    const newNoteId = Date.now().toString();
    const newNoteEntry = {
      content: noteText,
      date: formatDateTime(),
    };

    const updatedData = {
      ...updatedNotes[noteIndex].data,
      [newNoteId]: newNoteEntry,
    };

    updatedNotes[noteIndex] = {
      ...updatedNotes[noteIndex],
      data: updatedData,
    };

    setSpecificNote({
      ...specificNote,
      data: updatedData,
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setNoteText("");
    toast.success("Note added successfully!");
  };

  const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ").filter((word) => word.trim() !== "");

    if (words.length === 0) return "";

    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else {
      return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      saveNoteContent();
    }
  };

  const contextValue = {
    showModal,
    setshowModal,
    handleAddClick,
    handleCloseClick,
    handleOverlayClick,
    createNotes,
    setCreateNotes,
    handleClickNote,
    GoBack,
    note,
    setNote,
    handleChange,
    handleColorSelect,
    handleSaveNote,
    notes,
    getInitials,
    specificNote,
    noteText,
    setNoteText,
    handleNoteTextChange,
    saveNoteContent,
    handleKeyDown,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
