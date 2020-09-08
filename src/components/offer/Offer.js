import React from "react";
import "./Offer.css";

const Offer = ({ image, side, width, head, desc }) => {
  const picture = (
    <div className="offer_image">
      <img
        className="coding"
        src={image}
        alt={`${image.substring(1, image.length - 4)}`}
      />
    </div>
  );
  const description = (
    <div className="offer_description">
      <div className="description_container">
        <h2 className="headline">{head}</h2>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
  const renderRight = [picture, description];
  const renderLeft = [description, picture];

  const desktopOffer = (
    <div id="offer">
      {side === "right" && renderRight.map((item) => <>{item}</>)}
      {side === "left" && renderLeft.map((item) => <>{item}</>)}
    </div>
  );
  const mobileOffer = (
    <div id="offer">
      {renderRight.map((item) => (
        <>{item}</>
      ))}
    </div>
  );

  return (
    <>
      {width > 1000 && desktopOffer}
      {width < 1000 && mobileOffer}
    </>
  );
};

export default Offer;
