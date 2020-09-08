import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main">
      <div className="main_images">
        <div className="main_left">
          <img className="phone" src="/phone.png" alt="phone" />
        </div>
        <div className="main_right">
          <img className="laptop" src="/laptop.png" alt="laptop" />
        </div>
      </div>
      <h1 className="main_title">Strony i aplikacje internetowe</h1>
      <div className="mainBackground"></div>
    </div>
  );
};

export default Header;
