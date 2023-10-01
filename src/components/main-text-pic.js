import React from "react";
import "../styles/main-text-pic-styles.css";
// import content from "../pictures/content.jpeg";
import content from "../pictures/content-crop.jpeg";

const Content = () => {
  return (
    <div className="image-container">
      <div className="overlay"></div>
      <div className="content-box">
        <div className="image-text">
          <text>Exhange Money</text>
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
        <button class="round-button">Exchange Now</button>
      </div>

      <img src={content} alt="content pic" className="responsive-image" />
    </div>
  );
};

export default Content;
