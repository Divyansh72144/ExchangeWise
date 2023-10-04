import React from "react";
import "../styles/contact-me-style.css";
import cv_photo from "../pictures/cv_photo.jpg";

const Contact = () => {
  return (
    <div id="currencies-section" className="contact-area">
      <span id="contact-heading">Contact</span>
      <div className="Intro-box">
        <text className="text-area">
          Thank you for visiting my website! If you have any questions or would
          like to discuss my project further, feel free to contact me.
          <div className="profile-pic">
            <img
              src={cv_photo}
              alt="content pic"
              className="responsive-image"
            />
          </div>
        </text>
      </div>
      <div className="contact-box">
        Name
        <br />
        <input type="text"></input> Phone number<input type="text"></input>{" "}
        <br />
        Email<input type="text"></input> Subject<input type="text"></input>{" "}
        <br />
        Message
        <input type="text"></input>{" "}
      </div>
    </div>
  );
};
export default Contact;
