import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div>
      <div id="contact">
        <div className="contact_sidebar">
            <p className="sidebar_description">
                Zapraszam do kontaktu. Zobaczymy czy będę w stanie Państwu pomóc.
            </p>
        </div>
        <div className="contact_main">
          <form action="" className="contact_form">
            <div className="form_formMessage">
              <h3>Skontaktuj się</h3>
              <label htmlFor="message">Wiadomość</label>
              <textarea
                placeholder="This is an early development version..."
                name="message"
                id="message"
              ></textarea>
            </div>
            <div className="form_formUser">
              <label htmlFor="name">Twoje imię</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="mail">Twoj email</label>
              <input type="email" name="mail" id="mail" />
            </div>
            <button>Wyślij</button>
          </form>
        </div>
      </div>
    </div>
  );
}
