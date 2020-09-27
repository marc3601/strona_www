import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Header from "./components/main/Header";
import Offer from "./components/offer/Offer";
import Slider from "./components/slider/Slider";
import Headline from "./components/headline/Headline";
import Modal from "./components/modal/Modal";
import Menu from "./components/menu/Menu"
import Contact from "./components/contact/Contact";
export default function App() {
  const [width, setWidth] = useState(null);
  const [scrollDirection, setDirection] = useState("");
  const headlineWWW = "Strony www";
  const wwwDesc =
    "Oferuję projekt oraz wykonanie stron internetowych. Możliwość zamówienia prostych wizytówek jaki i bardziej rozbudowanych stron wraz z formularzem, galerią itp. Strony charakteryzują się dużą prostotą oraz szybkością działania.";
  const webApps = "Aplikacje internetowe";
  const apsDesc =
    "Możliwość wykonania niewielkiej aplikacji wedle pomysłu klienta. (Warstwa widoku + serwer + baza danych) Jest to rodzaj nieco bardziej rozbudowanej strony z dodatkową funkcjonalnością.";
  const photoHead = "Fotografia produktowa";
  const photoDesc =
    "Usługa wykonywana jako dodatek do strony. Możliwość wykonania zdjęć profesjonalnym sprzętem fotograficznym wraz z ich późniejszą obróbką. Pozwoli to uzyskać doskonałą jakość zdjęć co pozytywnie wpłynie na wygląd witryny.";
  const images = [
    {
      image: "/landscape.jpg",
      alt: "dslr",
    },
    {
      image: "/space.jpg",
      alt: "laptop",
    },
    {
      image: "/yellowstone.jpg",
      alt: "phone",
    },
    {
      image: "/lambo.jpg",
      alt: "phone",
    },
    {
      image: "/island.jpg",
      alt: "island",
    },
    {
      image: "/shuttle.jpg",
      alt: "shuttle",
    },
  ];
  useEffect(() => {
    window.addEventListener("load", () => {
      setWidth(parseInt(window.innerWidth.toFixed(0)));
    });
    window.addEventListener("resize", () => {
      setWidth(parseInt(window.innerWidth.toFixed(0)));
    });
    window.onscroll = (e) => {
      if (window.oldScroll > window.scrollY) {
        setDirection("up");
        window.oldScroll = window.scrollY;
      } else {
        setDirection("down");
        window.oldScroll = window.scrollY;
      }
    };
    console.log(
      "%cThis is an early development version..",
      "background: green; color: yellow; font-size: x-large"
    );
  }, []);

  return (
    <div className="container">
      <Navigation width={width} scrollDirection={scrollDirection} />
      <Header />
      <Offer
        key={1}
        image={"/websites.svg"}
        side="left"
        width={width}
        head={headlineWWW}
        desc={wwwDesc}
      />
      <Offer
        key={2}
        image={"/application.svg"}
        side="right"
        width={width}
        head={webApps}
        desc={apsDesc}
      />
      <Offer
        key={3}
        image={"/camera.svg"}
        side="left"
        width={width}
        head={photoHead}
        desc={photoDesc}
      />
      <Headline />
      {width <= 600 ? (
        <Slider images={images} imgVisible={1} width={width} />
      ) : (
        <Slider images={images} imgVisible={width > 1300 ? 3 : 2} />
      )}
      <Modal />
      <Menu width={width}/>
      <Contact />
    </div>
  );
}
