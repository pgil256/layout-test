import React from "react";
import "./Layout.css";
import godzilla from "../godzilla.jpg";

const Layout = () => {
  return (
    <div className="container">
      <div className="left-side">
        <img src={godzilla} alt="Godzilla" className="left-image" />
        <input type="text" className="input-box" placeholder="Text Input" />
        <input type="text" className="input-box" placeholder="Text Input" />
        <p className="left-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="divider"></div>
      <div className="right-side">
        <div className="grey-rectangle"></div>
        <div className="shapes-container">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <p className="right-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="submit-button">SUBMIT</button>
      </div>
    </div>
  );
};

export default Layout;
