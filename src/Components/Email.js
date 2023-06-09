import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvabhxe",
        "template_tj5p1v4",
        form.current,
        "oOrY0di7L5FaujY_Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.warn("messagesent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <form className="emailform" ref={form} onSubmit={sendEmail}>
          <label>Name*</label>
          <input className="namefield" type="text" name="user_name" required />
          <label>Phone Number*</label>
          <input
            type="tel"
            className="namefield"
            name="user_number"
            placeholder="1234566789"
            pattern="[0-9]{10}"
            required
          />
          <label>Email*</label>
          <input
            className="namefield"
            type="email"
            name="user_email"
            required
          />
          <label>Message*</label>
          <textarea className="textarea" name="message" required />
          <button className="popup-button">submit</button>
        </form>
      </div>
    </div>
  );
};
export default Email;
