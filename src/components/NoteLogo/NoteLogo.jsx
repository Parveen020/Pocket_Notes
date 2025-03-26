import React, { useContext } from "react";
import "./NoteLogo.css";
import { NotesContext } from "../../Context/NotesContext";
import { get } from "mongoose";

const NoteLogo = ({ noteColor, noteTitle }) => {
  const { getInitials } = useContext(NotesContext);

  const initialName = getInitials(noteTitle);
  return (
    <div className="Note-logo" style={{ backgroundColor: `${noteColor}` }}>
      <p>{initialName}</p>
    </div>
  );
};

export default NoteLogo;
