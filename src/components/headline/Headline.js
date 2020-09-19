import React from "react";
import "./Hedline.css";

export default function Headline() {
  return (
    <div className="headliner">
      <h2 className="headline_title">Lorem ipsum dolor.</h2>
      <p className="headline_description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        blanditiis magni repudiandae dolore ea explicabo sunt, quis consequuntur
        qui adipisci placeat nam minima quo, eius maxime earum impedit nobis!
        Nemo.<br></br>
        <span className="headline_important">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </span>
      </p>
    </div>
  );
}
