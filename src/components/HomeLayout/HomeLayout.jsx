import React from "react";
import "./HomeLayout.css";
import { assets } from "../../assets/assets.js";

const HomeLayout = () => {
  return (
    <div className="Home">
      <img className="Logo" src={assets.image} />
      <div className="upper-slogan">
        <p>Pocket Notes</p>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
      </div>
      <span>
        <img src={assets.Vector} /> end-to-end encrypted
      </span>
    </div>
  );
};

export default HomeLayout;
