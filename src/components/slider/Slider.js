import React, { useState } from "react";
import "./Slider.css";

export default function Slider({ images }) {
  const [transform, setTransform] = useState(0);
  const transformation = {
    transform: `translateX(${transform}vw)`,
  };

  const handleRight = () => {
    setTransform(transform - 100/3);
  };
  const handleLeft = () => {
    setTransform(transform + 100/3);
  };

  return (
    <div className="slider">
      <div className="slider_images" style={transformation}>
        {images.map((image, id) => (
          <img
            key={id}
            className="slider_picture"
            src={image.image}
            alt={image.alt}
          />
        ))}
      </div>
      <div onClick={handleLeft} className="slider_left">
        <img src="/play.svg" alt="play" />
      </div>
      <div onClick={handleRight} className="slider_right">
        <img src="/play.svg" alt="play" />
      </div>
    </div>
  );
}
