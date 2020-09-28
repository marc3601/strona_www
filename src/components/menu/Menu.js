import React from "react";
import ElementHead from "../utilities/ElementHead";
import MenuArrow from "./MenuArrow";
import "./Menu.css";
export default function Menu({ width }) {
  return (
    <div className="menu_section">
      <ElementHead
        title="Menu"
        description="Menu umożliwiające przemieszczanie się pomiędzy podstronami. Poniżej przykład menu rozwijanego po najechaniu myszką lub dotknięciu."
      />
      <div className="menu_slide">
        Menu
        <div className="menu_slide_item1">Link 1</div>
        <div className="menu_slide_item2">Link 2</div>
        <div className="menu_slide_item3">Link 3</div>
        <div className="menu_slide_item4">
          Link 4{width > 600 && <MenuArrow />}
          {width > 600 && <div className="item4_child">Link 5</div>}
        </div>
      </div>
      {width > 600 && (
        <div className="menu_slide blue_theme">
          Menu
          <div className="menu_slide_item1 black">Link 1</div>
          <div className="menu_slide_item2 black">Link 2</div>
          <div className="menu_slide_item3 black">Link 3</div>
          <div className="menu_slide_item4 black">
            Link 4{width > 600 && <MenuArrow />}
            {width > 600 && <div className="item4_child black">Link 5</div>}
          </div>
        </div>
      )}
    </div>
  );
}
