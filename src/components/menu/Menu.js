import React from "react";
import ElementHead from "../utilities/ElementHead";
import MenuArrow from "./MenuArrow";
import "./Menu.css";
export default function Menu({ width }) {
  return (
    <div className="menu_section">
      <ElementHead
        title="Menu"
        description="Menu umożliwiające przemieszczanie się pomiędzy podstronami"
      />
      <div className="menu_slide">
        Menu
        <div className="menu_slide_item1">Link1</div>
        <div className="menu_slide_item2">Link2</div>
        <div className="menu_slide_item3">Link3</div>
        <div className="menu_slide_item4">
          Link4
          {width > 600 && <MenuArrow />}
          {width > 600 && <div className="item4_child">Link5</div>}
        </div>
      </div>
    </div>
  );
}
