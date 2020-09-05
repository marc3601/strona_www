import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isActive, setActive] = useState(false);
  const [viewWidth, setWidth] = useState(1000);
  const [viewHeight, setHeight] = useState(0);


  const handleBurger = () => {
    setActive(!isActive);
  };
  const defaultLink = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
   
    window.addEventListener("load", () => {
      setWidth(window.innerWidth);
    });
    document.addEventListener("scroll", ()=> {
      setHeight(parseInt((window.pageYOffset).toFixed(0)))
    })

    return undefined
  }, []);

  const navButtons = (
    <div className="navigation_buttons">
      <ul>
        <li>
          <a onClick={handleBurger} href="#offer">Strony internetowe</a>
        </li>
        <li>
          <a onClick={defaultLink} href="/">Oferta</a>
        </li>
        <li>
          <a onClick={defaultLink} href="/">Kontakt</a>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="navigation">
      <div className="navigation_logo">
        <p className="logo">{`< WEB DEV />`}</p>
      </div>
        {isActive && navButtons || viewWidth > 1000 && navButtons}
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
