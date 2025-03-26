import React, { useContext, useState } from "react";
import "./SideMenu.css";
import NoteInfo from "../NoteInfo/NoteInfo";
import { NotesContext } from "../../Context/NotesContext";

const SideMenu = () => {
  const { GoBack, createNotes, notes } = useContext(NotesContext);
  return (
    <div className={`sideMenu ${createNotes ? "Hide-SideMenu" : ""}`}>
      <div className="upperBox">
        <p onClick={GoBack}>Pocket Notes</p>
      </div>
      <div className="middleBox">
        {notes.length > 0 &&
          notes.map((item, index) => {
            return <NoteInfo note={item} key={index} />;
          })}
      </div>
      {/* <div className="middleBox">
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
        <NoteInfo />
      </div> */}
    </div>
  );
};

export default SideMenu;
