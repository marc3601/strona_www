import React, { useState } from "react";
import "./Contact.css";
export default function Contact() {
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");
  const [message,setMessage] = useState("");

  const handleMessage = (e) => {
    e.preventDefault()
    e.target.id === "name" && setName(e.target.value);
    e.target.id === "mail" && setMail(e.target.value);
    e.target.id === "message" && setMessage(e.target.value);
    console.log(name,mail,message);
  }

  return (
    <div>
      <div id="contact">
        <div className="contact_sidebar">
          <h3 className="sidebar_headline">Lorem ipsum</h3>
          <p className="sidebar_description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptas deserunt quod.
          </p>
        </div>
        <div className="contact_main">
          <form action="/" className="contact_form" onChange={handleMessage}>
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
