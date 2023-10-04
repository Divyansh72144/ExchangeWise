import React from "react";
import "../styles/main-text-pic-styles.css";
import content from "../pictures/content-crop.jpeg";
import { Link } from "react-scroll";

const Content = () => {
  return (
    <div className="image-container">
      <div className="overlay"></div>
      <div className="content-box">
        <div className="image-text">
          <text>Exchange Money</text>
          <br />
          <text>Easily</text>
        </div>
      </div>
      <div className="desc">
        <text>
          Get the best rates and hassle-free currency exchange services in
          <br />
        </text>
        <text>Helsinki</text>
        <br />
        <Link
          to="currencies-section"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={1000} // Adjust the duration (in milliseconds) to control the scroll speed
        >
          <button className="round-button">Exchange Now</button>
        </Link>
      </div>

      <img src={content} alt="content pic" className="responsive-image" />
    </div>
  );
};

export default Content;
