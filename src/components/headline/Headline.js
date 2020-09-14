import React from "react";
import "./Hedline.css";

export default function Headline() {
  return (
    <div className="headliner">
      <h2 className="headline_title">Komponenty strony w dowolnym układzie.</h2>
      <p className="headline_description">
        Każda tworzona strona jest maksymalnie dostosowana do indywidualnych
        potrzeb klienta. Składa się tylko z elementów, które są
        najistotniejsze z punktu widzenia prezentacji określonych usług lub
        produktów.<br></br><span className="headline_important">Poniżej prezentuje przykładowe elementy składowe
        strony.</span>
      </p>
    </div>
  );
}
