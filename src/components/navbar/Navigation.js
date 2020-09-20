import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = ({ width, scrollDirection }) => {
  const [isActive, setActive] = useState(false);
  const [preventTransit, setPrevent] = useState({transition: ".5s ease"})

  const handleBurger = () => {
    setActive(!isActive);
  };
  const defaultLink = (e) => {
    e.preventDefault();
  };

  const cond = scrollDirection === "down";
  const navHide = cond ? { transform: "translateY(-70px)" } : null;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPrevent({transition: "none"});
      setTimeout(()=>{
        setPrevent({transition: ".5s ease"});
      },10)
    });
  }, []);

  const navButtons = (
    <div className="navigation_buttons">
      <ul>
        <li>
          <a onClick={handleBurger} href="#offer">
            Strony internetowe
          </a>
        </li>
        <li>
          <a onClick={handleBurger} href="/">
            Oferta
          </a>
        </li>
        <li>
          <a onClick={defaultLink} href="/">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="navigation" style={{...navHide, ...preventTransit}}>
      <div className="navigation_logo">
        <p className="logo">{`< WEB DEV />`}</p>
      </div>
      {(isActive && navButtons) || (width > 1000 && navButtons)}
      <div onClick={handleBurger} className="navigation_burger">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
