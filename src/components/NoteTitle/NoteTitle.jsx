import React from "react";
import "./NoteTitle.css";

const NoteTitle = ({ screen, noteTitle }) => {
  return (
    <div className="Note-heading">
      <p
        style={{
          color: screen === "SideMenu" ? "Black" : "White",
          paddingLeft: screen === "SideMenu" ? 0 : 10,
        }}
      >
        {noteTitle}
      </p>
    </div>
  );
};

export default NoteTitle;
