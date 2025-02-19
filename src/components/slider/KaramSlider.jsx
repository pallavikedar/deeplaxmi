import React from "react";
import "../../style/karamSlider.css";
import img1 from "../../assets/images/kSlider1.jpeg";
import img2 from "../../assets/images/kSlider2.jpeg";
import img3 from "../../assets/images/kslider3.jpeg";
import img4 from "../../assets/images/kslider4.jpeg";
import img5 from "../../assets/images/kslider5.jpeg";
import { useState, useEffect } from "react";
function KaramSlider() {
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

export default KaramSlider;
