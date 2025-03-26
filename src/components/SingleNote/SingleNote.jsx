import React from "react";
import "./SingleNote.css";

const SingleNote = ({ data }) => {
  const notesArray = Object.entries(data || {})
    .map(([id, noteData]) => ({
      id,
      ...noteData,
    }))
    .sort((a, b) => parseInt(b.id) - parseInt(a.id)); // Newest first

  return (
    <div className="notes-container">
      {notesArray.length > 0 ? (
        notesArray.map((note) => (
          <div key={note.id} className="Single-Note">
            <span className="Note-content">{note.content}</span>
            <span
              className="Note-CreateInfo"
              dangerouslySetInnerHTML={{ __html: note.date }}
            />
          </div>
        ))
      ) : (
        <div className="empty-notes">
          <p>No notes yet. Start typing below to create your first note!</p>
        </div>
      )}
    </div>
  );
};

export default SingleNote;
