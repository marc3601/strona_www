import React, { useState, useEffect} from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Header from "./components/main/Header";
import Offer from "./components/offer/Offer";
import Slider from "./components/slider/Slider";
import Headline from "./components/headline/Headline";
import Contact from "./components/contact/Contact";
export default function App() {
  const [width, setWidth] = useState(null);
  const [scrollDirection, setDirection] = useState("");
  const headlineWWW = "Lorem ipsum";
  const wwwDesc =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis odio rerum id eligendi cumque iure earum, voluptates provident doloremque incidunt dolore sapiente delectus atque natus doloribus accusamus officiis ab dolorum.";
  const webApps = "Lorem ipsum";
  const apsDesc =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis odio rerum id eligendi cumque iure earum, voluptates provident doloremque incidunt dolore sapiente delectus atque natus doloribus accusamus officiis ab dolorum.";
  const photoHead = "Lorem ipsum";
  const photoDesc =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis odio rerum id eligendi cumque iure earum, voluptates provident doloremque incidunt dolore sapiente delectus atque natus doloribus accusamus officiis ab dolorum.";
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
      "%cThis is an early development version. Bugs will appear.😄",
      "background: red; color: yellow; font-size: x-large"
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
      {width < 600 ? (
        <Slider images={images} imgVisible={1} width={width} />
      ) : (
        <Slider images={images} imgVisible={width > 1300 ? 3 : 2} />
      )}
      <Contact/>
    </div>
  );
}

