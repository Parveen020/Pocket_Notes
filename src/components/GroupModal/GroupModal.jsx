import React, { useContext } from "react";
import "./GroupModal.css";
import { NotesContext } from "../../Context/NotesContext";

const GroupModal = ({ onClose }) => {
  const {
    handleOverlayClick,
    note,
    setNote,
    handleChange,
    handleColorSelect,
    handleSaveNote,
  } = useContext(NotesContext);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>Create New group</h3>
        <div className="group-container">
          <label>Group Name</label>
          <input
            type="text"
            name="name"
            value={note.name}
            onChange={handleChange}
            placeholder="Enter group name"
            required
          />
        </div>
        <div className="color-container">
          <label>Choose colour</label>
          <div className="color-options">
            <div
              className="color-circle"
              style={{ backgroundColor: "#B38BFA" }}
              onClick={() => handleColorSelect("#B38BFA")}
            ></div>
            <div
              className="color-circle"
              style={{ backgroundColor: "#FF79F2" }}
              onClick={() => handleColorSelect("#FF79F2")}
            ></div>
            <div
              className="color-circle"
              style={{ backgroundColor: "#43E6FC" }}
              onClick={() => handleColorSelect("#43E6FC")}
            ></div>
            <div
              className="color-circle"
              style={{ backgroundColor: "#F19576" }}
              onClick={() => handleColorSelect("#F19576")}
            ></div>
            <div
              className="color-circle"
              style={{ backgroundColor: "#0047FF" }}
              onClick={() => handleColorSelect("#0047FF")}
            ></div>
            <div
              className="color-circle"
              style={{ backgroundColor: "#6691FF" }}
              onClick={() => handleColorSelect("#6691FF")}
            ></div>
          </div>
        </div>
        <button className="create-btn" onClick={handleSaveNote}>
          Create
        </button>
      </div>
    </div>
  );
};

export default GroupModal;
