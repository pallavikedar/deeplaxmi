import React from "react";

import "../../style/AarambheSlider.css"

import img1 from "../../assets/images/aarambh brochure_page-0001.jpg";
import img2 from "../../assets/images/aarambh brochure_page-0002.jpg";
import img3 from "../../assets/images/aarambh brochure_page-0003.jpg";
import img4 from "../../assets/images/aarambh brochure_page-0004.jpg";
import img5 from "../../assets/images/aarambh brochure_page-0005.jpg";

import { useState, useEffect } from "react";

function AarambheSlider() {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <>
      <div className="slider">
        <div className="slider-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slider-image" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AarambheSlider;
