import React from "react";
import "./ElementHead.css";
export default function ElementHead({ title, description }) {
  return (
    <>
      <h1 className="element_title">{title}</h1>
      <p className="element_description">{description}</p>
    </>
  );
}
