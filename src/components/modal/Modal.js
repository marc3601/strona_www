import React, { useState } from "react";
import "./Modal.css";
export default function Modal() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <h1 className="modal_title">Modal</h1>
      <p className="modal_desc">
        Sposób na przekazanie <span className="crossed">irytujących</span>,
        ważnych informacji użytkownikowi.
      </p>
      <div
        onClick={() => {
          if (isActive) setActive(false);
        }}
        className="modal_container"
      >
        <button className="btn_modal" onClick={() => setActive(!isActive)}>
          Pokaż modal
        </button>
        {isActive ? (
          <>
            <div className="modal_background" />
            <div className="modal_body">
              <h1 className="modal_headline">Some modal text</h1>
              <p className="modal_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quae rem molestiae cumque placeat fuga? Commodi, quis
                distinctio eum saepe id asperiores odio ipsam debitis quos iure
                autem sunt voluptatem?
              </p>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
