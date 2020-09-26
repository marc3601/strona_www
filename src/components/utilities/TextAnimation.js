import React, { useState, useEffect, useRef } from "react";
import "./TextAnimation.css";
export default function TextAnimation({ text }) {
  const [count, setCount] = useState("");
  const arr = text.split("").reverse();
  let id = arr.length;
  const idRef = useRef(id);
  useEffect(() => {
    idRef.current--;
    if (count.length < arr.length) {
      const interval = setInterval(
        () => setCount(count + arr[idRef.current]),
        200
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [count, arr.length]);
  return (
    <div className="animation_container">
      <h2 className="animation_text">
        {count}
        <span className="vertical_bar">|</span>
      </h2>
    </div>
  );
}
