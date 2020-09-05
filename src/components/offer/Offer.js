import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div id="offer">
      <div className="offer_image">
        <img className="coding" src="/programowanie.jpg" alt="" />
      </div>
      <div className="offer_description">
        <h2 className="headline">Strony www</h2>
        <p className="description">Oferuję projekt oraz wykonanie stron internetowych. Możliwość zamówienia prostych wizytówek oraz bardziej rozbudowanych stron z podstronami, formularzem, galerią itp.</p>
      </div>
    </div>
  );
};

export default Offer;
