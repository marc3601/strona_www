import React, { useState, useEffect, useRef } from "react";
import "./TextAnimation.css";
export default function TextAnimation({ text }) {
  const[content, setContent] = useState("");
  const arr = text.split("").reverse();
  let id = arr.length;
  const idRef = useRef(id);
  useEffect(() => {
    idRef.current--;
    if (content.length < arr.length) {
      const interval = setInterval(
        () => setContent(content + arr[idRef.current]),
        200
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [content, arr.length]);
  return (
    <div className="animation_container">
      <h2 className="animation_text">
        {content}
        <span className="vertical_bar">|</span>
      </h2>
    </div>
  );
}
