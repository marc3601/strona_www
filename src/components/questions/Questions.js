import React, { useState } from "react";
import "./Questions.css";
export default function Questions({question, answer}) {
  const [isVisible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="question_container">
      <div className="question_section">
        <div className="question">
          <p className="question_text">{question}</p>
        </div>
        <div className="toogle" onClick={handleToggle}>
          {isVisible ? (
            <svg
              id="minus"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 10h24v4h-24z" />
            </svg>
          ) : (
            <svg
              id="plus"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
          )}
        </div>
      </div>
      <div className={`answer_section ${!isVisible ? "hidden" : ""}`}>
        <p className="answer_text">{answer}</p>
      </div>
    </div>
  );
}
