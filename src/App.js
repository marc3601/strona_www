import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation"
import Header from "./components/main/Header";
import Offer from "./components/offer/Offer"
function App() {
  return (
    <div className="container">
      <Navigation />
      <Header/>
      <Offer/>
    </div>
  );
}

export default App;
