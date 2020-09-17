import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div>
      <div id="contact">
        <div className="contact_sidebar">
          <h3 className="sidebar_headline">Zapraszam do kontaktu.</h3>
          <p className="sidebar_description">
            Niezależnie czy mają Państwo pomysł na stronę lub szukają gotowego
            projektu, dla każdego postaram się coś znaleźć. Zapraszam do
            kontaktu.
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
                rows="15"
              ></textarea>
            </div>
            <div className="form_formUser">
              <div className="formUser_name">
                <label htmlFor="name">Twoje imię</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="formUser_mail">
                <label htmlFor="mail">Twoj email</label>
                <input type="email" name="mail" id="mail" />
              </div>
            </div>
            <button>Wyślij</button>
          </form>
        </div>
      </div>
    </div>
  );
}
