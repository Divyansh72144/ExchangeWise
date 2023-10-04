import React from "react";
import "../styles/contact-me-style.css";
import cv_photo from "../pictures/cv_photo.jpg";

const Contact = () => {
  return (
    <div id="currencies-section" className="contact-area">
      <span id="contact-heading">Contact</span>
      <div className="Intro-box">
        <div className="text-area">
          Thank you for visiting my website! If you have any questions or would
          like to discuss my project further, feel free to contact me.
          <div className="profile-pic">
            <img
              src={cv_photo}
              alt="content pic"
              className="responsive-image"
            />
          </div>
        </div>
      </div>
      <div className="contact-box">
        <form
          action="https://formsubmit.co/divyansh72144@gmail.com"
          method="POST"
        >
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <label htmlFor="phone">Phone number</label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input type="text" name="name" required />
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input type="text" name="email" id="email" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input type="text" name="subject" id="subject" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input type="text" name="message" id="message" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <button className="send-button" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
