import React from "react";
import "../styles/carousel.css";
import image1 from "../imgs/image1.jpg";
import image2 from "../imgs/image2.jpg";
import image3 from "../imgs/image3.jpg";
import image4 from "../imgs/image4.jpg";
import image5 from "../imgs/image5.jpg";
import ImageSlider from "./ImageSlider.js";

function PracticeCarousel() {
  const slides = [
    { url: image1, title: "Guitar 1" },
    { url: image2, title: "Guitar 2" },
    { url: image3, title: "Guitar 3" },
    { url: image4, title: "Guitar 4" },
    { url: image5, title: "Guitar 5" },
  ];

  const containerStyles = {
    width: "500px",
    height: "800px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default PracticeCarousel;
