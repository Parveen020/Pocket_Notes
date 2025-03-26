import React, { useContext } from "react";
import "./CreateNote.css";
import NoteLogo from "../NoteLogo/NoteLogo";
import NoteTitle from "../NoteTitle/NoteTitle";
import { assets } from "../../assets/assets";
import SingleNote from "../SingleNote/SingleNote";
import { NotesContext } from "../../Context/NotesContext";

const CreateNote = () => {
  const {
    createNotes,
    GoBack,
    specificNote,
    noteText,
    handleNoteTextChange,
    saveNoteContent,
    handleKeyDown,
  } = useContext(NotesContext);

  return (
    <div className={`CreateNote ${createNotes ? "showNotes" : ""}`}>
      <div className="heading-box">
        <img
          className={`Back ${createNotes ? "back" : ""}`}
          src={assets.arrow}
          alt="back"
          onClick={GoBack}
        />
        <NoteLogo
          noteColor={specificNote.color}
          noteTitle={specificNote.name}
        />
        <NoteTitle screen="Note" noteTitle={specificNote.name} />
      </div>
      <div className="content-box">
        <SingleNote data={specificNote.data} />
      </div>
      <div className="entry-box">
        <textarea
          placeholder="Your sample text is here"
          value={noteText}
          onChange={handleNoteTextChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src={assets.Send}
          alt="Send"
          className={noteText.trim() !== "" ? "active" : ""}
          onClick={saveNoteContent}
        />
      </div>
    </div>
  );
};

export default CreateNote;
