import React, { useState, useEffect } from "react";
import ArrowIcon from "./ArrowIcon";
import "./Slider.css";

export default function Slider({ images, imgVisible, width }) {
  const [transform, setTransform] = useState(0);
  const [preventTransit, setPrevent] = useState({ transition: ".5s ease-out" });
  const [imagesOnTheRight, setImagesOnTheRight] = useState(
    images.length - imgVisible
  );
  const [imagesOnTheLeft, setImagesOnTheLeft] = useState(0);
  const [canClickRight, setCanClickRight] = useState(true);
  const [canClickLeft, setCanClickLeft] = useState(false);
  const transformation = {
    transform: `translateX(${transform}vw)`,
  };

  const handleRight = () => {
    setTransform(transform - 100 / imgVisible);
    if (imagesOnTheRight <= 1) {
      setCanClickRight(false);
    }
    if (imagesOnTheLeft >= 0) {
      setCanClickLeft(true);
    }
    setImagesOnTheRight(imagesOnTheRight - 1);
    setImagesOnTheLeft(imagesOnTheLeft + 1);
  };
  const handleLeft = () => {
    setTransform(transform + 100 / imgVisible);
    if (imagesOnTheRight >= 0) {
      setCanClickRight(true);
    }
    if (imagesOnTheLeft <= 1) {
      setCanClickLeft(false);
    }
    setImagesOnTheRight(imagesOnTheRight + 1);
    setImagesOnTheLeft(imagesOnTheLeft - 1);
  };
  const makeDots = (dotCount, imagesOnTheLeft) => {
    const arr = [];
    for (let i = 0; i < dotCount; i++) {
      arr.push(<div className={`dot ${imagesOnTheLeft === i ? "activeDot" : ""}`}></div>);
    }
    return <div className="dots_container">{arr.map((item,id) => <React.Fragment key={id}>{item}</React.Fragment>)}</div>;
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPrevent({ transition: "none" });
      setTimeout(() => {
        setPrevent({ transition: ".5s ease-out" });
      }, 10);
    });
  }, []);

  useEffect(() => {
    setImagesOnTheRight(images.length - imgVisible);
    setImagesOnTheLeft(0);
    setCanClickRight(true);
    setCanClickLeft(false);
    setTransform(0);
  }, [imgVisible, images.length]);

  return (
    <div id="slider">
      <div
        className="slider_images"
        style={{ ...transformation, ...preventTransit }}
      >
        {images.map((image, id) => (
            <img
              key={id}
              className="slider_picture"
              src={image.image}
              alt={image.alt}
            />
        ))}
       
      </div>
      <div
        onClick={canClickLeft ? handleLeft : undefined}
        className="slider_left"
        style={!canClickLeft ? { width: "50px" } : undefined}
      >
        <ArrowIcon
          color={canClickLeft ? "#ff8f00" : "lightgray"}
          opacity={!canClickLeft ? ".7" : "1"}
        />
      </div>
      <div
        onClick={canClickRight ? handleRight : undefined}
        className="slider_right"
        style={!canClickRight ? { width: "50px" } : undefined}
      >
        <ArrowIcon
          color={canClickRight ? "#ff8f00" : "lightgray"}
          opacity={!canClickRight ? ".7" : "1"}
        />
      </div>
      {width < 600 && makeDots(images.length, imagesOnTheLeft)}
    </div>
  );
}
