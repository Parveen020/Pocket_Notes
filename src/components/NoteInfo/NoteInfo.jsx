import React, { useContext } from "react";
import "./NoteInfo.css";
import NoteLogo from "../NoteLogo/NoteLogo";
import NoteTitle from "../NoteTitle/NoteTitle";
import { NotesContext } from "../../Context/NotesContext";

const NoteInfo = ({ note }) => {
  const { handleClickNote } = useContext(NotesContext);

  return (
    <div className="Note" onClick={() => handleClickNote(note)}>
      <NoteLogo noteColor={note.color} noteTitle={note.name} />
      <NoteTitle noteTitle={note.name} screen="SideMenu" />
    </div>
  );
};

export default NoteInfo;
