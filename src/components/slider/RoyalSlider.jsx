import React from "react";
import "../../style/karamSlider.css";
import img1 from "../../assets/images/r1.png";
import img2 from "../../assets/images/r2.png";
import img3 from "../../assets/images/r3.png";
import img4 from "../../assets/images/r4.png";
import { useState, useEffect } from "react";
function RoyalSlider() {
  const images = [img1, img2, img3, img4];
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
        <div
          className="slider-content"
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

export default RoyalSlider;
