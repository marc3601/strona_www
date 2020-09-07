import React, {useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Header from "./components/main/Header";
import Offer from "./components/offer/Offer";
function App() {
  const [width, setWidth] = useState(null);
  const headlineWWW = "Strony www" 
  const wwwDesc = "Oferuję projekt oraz wykonanie stron internetowych. Możliwość zamówienia prostych wizytówek jaki i bardziej rozbudowanych stron wraz z formularzem, galerią itp."
  const webApps = "Aplikacje internetowe" 
  const apsDesc = "Możliwość wykonania niewielkiej aplikacji wedle pomysłu klienta. (Warstwa widoku + serwer + baza danych) Jest to rodzaj nieco bardziej rozbudowanej strony z dodatkową funckconalnością."
  useEffect(() => {
    window.addEventListener("load", () => {
      setWidth(window.innerWidth);
    });
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className="container">
      <Navigation />
      <Header />
      <Offer image={"/programowanie.jpg"} side="right" width={width} head={headlineWWW} desc={wwwDesc} />
      <Offer image={"/app.jpg"} side="left" width={width} head={webApps} desc={apsDesc} />
    </div>
  );
}

export default App;
