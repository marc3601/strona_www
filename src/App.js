import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Header from "./components/main/Header";
import Offer from "./components/offer/Offer";
function App() {
  const [width, setWidth] = useState(null);
  const [scroll, setScroll] = useState(0);
  const headlineWWW = "Strony www";
  const wwwDesc =
    "Oferuję projekt oraz wykonanie stron internetowych. Możliwość zamówienia prostych wizytówek jaki i bardziej rozbudowanych stron wraz z formularzem, galerią itp. Strony charakteryzują się dużą prostotą oraz szybkością działania.";
  const webApps = "Aplikacje internetowe";
  const apsDesc =
    "Możliwość wykonania niewielkiej aplikacji wedle pomysłu klienta. (Warstwa widoku + serwer + baza danych) Jest to rodzaj nieco bardziej rozbudowanej strony z dodatkową funkcjonalnością.";
  const photoHead = "Fotografia produktowa";
  const photoDesc =
    "Usługa wykonywana jako dodatek do strony. Możliwość wykonania zdjęć profesjonalnym sprzętem fotograficznym wraz z ich późniejszą obróbką. Pozwoli to uzyskać doskonałą jakość zdjęć co pozytywnie wpłynie na wygląd witryny.";
  useEffect(() => {
    window.addEventListener("load", () => {
      setWidth(window.innerWidth);
    });
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <div className="container">
      <Navigation />
      <Header />
      <Offer
        image={"/globe.png"}
        side="left"
        width={width}
        head={headlineWWW}
        desc={wwwDesc}
      />
      <Offer
        image={"/gears_motor.gif"}
        side="right"
        width={width}
        head={webApps}
        desc={apsDesc}
      />
      <Offer
        image={"/dslr.png"}
        side="left"
        width={width}
        head={photoHead}
        desc={photoDesc}
      />
    </div>
  );
}

export default App;
