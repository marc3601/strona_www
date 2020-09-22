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
  const [info, infoShow] = useState(false);
  const transformation = {
    transform: `translateX(${transform}vw)`,
  };

  const handleRight = () => {
    setTransform(transform - 100 / imgVisible);
    setImagesOnTheRight(imagesOnTheRight - 1);
    setImagesOnTheLeft(imagesOnTheLeft + 1);
    if (info) infoShow(false);
  };

  const handleLeft = () => {
    setTransform(transform + 100 / imgVisible);
    setImagesOnTheRight(imagesOnTheRight + 1);
    setImagesOnTheLeft(imagesOnTheLeft - 1);
    if (info) infoShow(false);
  };

  const makeDots = (dotCount, imagesOnTheLeft) => {
    const arr = [];
    for (let i = 0; i < dotCount; i++) {
      arr.push(
        <div
          onClick={() => dotsNavigation(i)}
          className={`dot ${imagesOnTheLeft === i ? "activeDot" : ""}`}
        ></div>
      );
    }
    return (
      <div className="dots_container">
        {arr.map((item, id) => (
          <React.Fragment key={id}>{item}</React.Fragment>
        ))}
      </div>
    );
  };

  const dotsNavigation = (id) => {
    let value = id - imagesOnTheLeft;
    let condition = `${value.toString().slice(0, 1)}` === "-";
    if (condition) {
      setTransform(
        transform +
          parseInt(`${parseInt(value.toString().slice(1, 2))}00`) / imgVisible
      );
      setImagesOnTheRight(
        imagesOnTheRight + parseInt(value.toString().slice(1, 2))
      );
      setImagesOnTheLeft(
        imagesOnTheLeft - parseInt(value.toString().slice(1, 2))
      );
    } else {
      setTransform(transform - parseInt(`${value}00`) / imgVisible);
      setImagesOnTheRight(imagesOnTheRight - value);
      setImagesOnTheLeft(imagesOnTheLeft + value);
    }
    if (info) infoShow(false);
  };

  useEffect(() => {
    if (imagesOnTheRight > 0) {
      setCanClickRight(true);
    } else if (imagesOnTheRight < 1) {
      setCanClickRight(false);
    }
  }, [imagesOnTheRight]);

  useEffect(() => {
    if (imagesOnTheLeft < 1) {
      setCanClickLeft(false);
    } else if (imagesOnTheLeft > 0) {
      setCanClickLeft(true);
    }
  }, [imagesOnTheLeft]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPrevent({ transition: "none" });
      setTimeout(() => {
        setPrevent({ transition: ".5s ease-out" });
      }, 10);
    });
    setImagesOnTheRight(images.length - imgVisible);
    setImagesOnTheLeft(0);
    setCanClickRight(true);
    setCanClickLeft(false);
    setTransform(0);
  }, [imgVisible, images.length]);

  return (
    <>
      <h1 className="slider_title">Slider</h1>
      <p className="slider_description">
        Prosty sposób na prezentację zdjęć na stronie. Poniżej prosty przykład
        jednej z możliwych wersji.
      </p>
      <div className="slider">
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
          <div className="btn_container">
            {info ? (
              <div className="bubble">
                <p className="bubble_text">Link do podstrony lub komunikat</p>
              </div>
            ) : null}
            <button className="btn" onClick={() => infoShow(!info)}>
              Zobacz więcej
            </button>
          </div>
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
    </>
  );
}
