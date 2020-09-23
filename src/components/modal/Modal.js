import React, { useState } from "react";
import "./Modal.css";
import ElementHead from "../utilities/ElementHead";
import Button from "../utilities/Button";
export default function Modal() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <ElementHead
        title="Modal"
        description="Sposób na przekazanie
        ważnych informacji użytkownikowi."
      />
      <div
        onClick={() => {
          if (isActive) setActive(false);
        }}
        className="modal_container"
      >
        <Button text="Pokaż modal" action={() => setActive(!isActive)} />
        {isActive ? (
          <>
            <div className="modal_background" />
            <div className="modal_body">
              <ElementHead
                title="Informacja dla użytkowników."
                description="W tym miejscu może pojawiać się ważny komunikat w wyniku wykonania czynności przez użytkownika lub po upływie określonego czasu."
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
