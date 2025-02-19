import React from "react";
import RoyalHeader from "../components/Header/RoyalHeader";
import RoyalSlider from "../components/slider/RoyalSlider";
import "../style/royal.css";
import royal_building from "../assets/images/r2.png";
import royal_plan from "../assets/images/royal_plan.png";
import gym from "../assets/images/gym.png";
import pool from "../assets/images/swimming-pool.png";
import court from "../assets/images/Futsal-Court.png";
import kidplay from "../assets/images/kidgarden.png";
import cctv from "../assets/images/Screenshot_2024-08-21_120028-removebg-preview.png";
import lobby from "../assets/images/Screenshot_2024-08-21_120217-removebg-preview.png";
import lift from "../assets/images/Screenshot_2024-08-21_120619-removebg-preview.png";
import water from "../assets/images/Screenshot_2024-08-21_120833-removebg-preview.png";
import fire from "../assets/images/Screenshot_2024-08-21_120932-removebg-preview.png";
import rain from "../assets/images/Screenshot_2024-08-21_121002-removebg-preview.png";
import water_level from "../assets/images/Screenshot_2024-08-21_121029-removebg-preview.png";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import royal_img1 from "../assets/images/royal1.jpg";
import royal_img2 from "../assets/images/royal2.jpg";
import royal_img3 from "../assets/images/royal3.jpg";
import royal_img4 from "../assets/images/royal4.jpg";
import royal_img5 from "../assets/images/royal5.jpg";
import royal_img6 from "../assets/images/royal6.jpg";
import royal_img7 from "../assets/images/royal7.jpg";
import royal_img8 from "../assets/images/royal8.jpg";
import royal_img9 from "../assets/images/royal9.jpg";
import royal_img10 from "../assets/images/royal10.jpg";
import royal_img11 from "../assets/images/royal11.jpg";

function Royal() {
  return (
    <>
      <RoyalHeader />
      <RoyalSlider />
      <div className="about_royal_section">
        <div className="royal_about_heading" data-aos="zoom-in">
          <h2>About Royal Empire</h2>
        </div>
        <div className="royal_about_wrapper">
          <div className="royal_about_text">
            <p data-aos="zoom-in-up">
              Royal Empire is a prestigious residential project that exemplifies
              modern living with a touch of luxury and elegance. Nestled in a
              prime location, the project offers a perfect blend of comfort,
              convenience, and style, making it an ideal choice for discerning
              homeowners.
            </p>
            <p data-aos="zoom-in-down">
              The development features meticulously designed homes that cater to
              the needs of contemporary families. Each unit is thoughtfully
              planned to maximize space, natural light, and ventilation,
              ensuring a harmonious living environment. With world-class
              amenities and state-of-the-art infrastructure, Royal Empire
              provides a lifestyle that is both sophisticated and serene.
            </p>
            <p data-aos="zoom-out-up">
              Residents of Royal Empire can enjoy a range of premium facilities,
              including a fully equipped gym, landscaped gardens, children's
              play areas, and a multipurpose hall. The project is also equipped
              with 24/7 security, power backup, and ample parking space,
              ensuring a safe and hassle-free living experience.
            </p>
          </div>
          <div
            className="royal_image_side"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={royal_building} alt="" />
          </div>
        </div>
      </div>
      <div className="royal_master_plan_section">
        <div className="royal_master_plane_heading">
          <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            {" "}
            Master Plan
          </h2>
        </div>
        <div className="royal_master_plan_image">
          <img src={royal_plan} alt="" />
        </div>
      </div>
      <div className="royal_amenities_section">
        <div
          className="royal_amenities_heading"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h2> Royal Amenities</h2>
        </div>
        <div className="royal_external_amenities">
          <div className="external_amenity" data-aos="zoom-in">
            <img src={gym} alt="gym" />
            <h3>Gym</h3>
          </div>
          <div className="external_amenity" data-aos="zoom-in-up">
            <img src={pool} alt="pool" />
            <h3>Swimming Pool</h3>
          </div>
          <div className="external_amenity" data-aos="zoom-in-down">
            <img src={court} alt="Futsal Court" />
            <h3>Futsal Court</h3>
          </div>
          <div className="external_amenity" data-aos="zoom-out-up">
            <img src={kidplay} alt="gym" />
            <h3>Kid’s Play Area</h3>
          </div>
        </div>
        <div className="royal_internal_amenities">
          <div className="royal_internal_amenities_heading">
            <h2> Internal Amenities</h2>
          </div>
          <div className="internal_amenities">
            <div className="internal_amenity" data-aos="zoom-out-down">
              <img src={cctv} alt="cctv" />
              <h3>CCTV</h3>
            </div>
            <div
              className="internal_amenity"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img src={lobby} alt="cctv" />
              <h3> Modern Entrance Lobby</h3>
            </div>
            <div
              className="internal_amenity"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={lift} alt="cctv" />
              <h3>Modern Lift</h3>
            </div>
            <div
              className="internal_amenity"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <img src={water} alt="cctv" />
              <h3>24*7 Water Supply</h3>
            </div>
          </div>
          <div className="internal_amenities">
            <div
              className="internal_amenity"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <img src={fire} alt="cctv" />
              <h3>Fire Fighting</h3>
            </div>
            <div
              className="internal_amenity"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
            >
              <img src={rain} alt="cctv" />
              <h3>Rain Water Harvesting</h3>
            </div>
            <div
              className="internal_amenity"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <img src={water_level} alt="cctv" />
              <h3>Automatic Water Level Controller</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="royal_images_section">
        <div className="royal_images_heading">
          <h2>Royal Images</h2>
        </div>
        <div className="royal_images">
          <div className="royal_image">
            <img src={royal_img1} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img2} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img3} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img4} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img5} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img6} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img7} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img8} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img9} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img10} alt="" />
          </div>
          <div className="royal_image">
            <img src={royal_img11} alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop smooth />
    </>
  );
}

export default Royal;
