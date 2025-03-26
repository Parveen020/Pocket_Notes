import React, { useContext } from "react";
import "./index.css";
import SideMenu from "./components/SideMenu/SideMenu.jsx";
import HomeLayout from "./components/HomeLayout/HomeLayout.jsx";
import CreateNote from "./components/CreateNote/CreateNote.jsx";
import GroupModal from "./components/GroupModal/GroupModal.jsx";
import { NotesContext } from "./Context/NotesContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const {
    showModal,
    setshowModal,
    handleAddClick,
    handlCloseClick,
    createNotes,
    setCreateNotes,
  } = useContext(NotesContext);

  return (
    <>
      <ToastContainer />
      <div className="Container">
        <SideMenu />
        {createNotes ? <CreateNote /> : <HomeLayout />}
        {showModal && <GroupModal onClose={handlCloseClick} />}
        <div
          className={`Add ${createNotes ? "hideButton" : ""}`}
          onClick={handleAddClick}
        >
          +
        </div>
      </div>
    </>

    // 360 x 738
  );
};

export default App;
