import React from "react";
import PeaceHeader from "../components/Header/PeaceHeader";
import heroimg from "../assets/images/main_building.jpg";
import "../style/peace.css";
import overView from "../assets/images/Pexels Photo by Terry Magallanes.svg";
import masterplan from "../assets/images/masterplan_enhanced.jpg";
import gym from "../assets/images/gym.png";
import indoor from "../assets/images/indoor game.png";
import batminton from "../assets/images/badminton-court-img.jpg";
import outdoorGym from "../assets/images/outdoor gym.jpg";
import gym_photo from "../assets/images/gym photo.jpg";
import lobby from "../assets/images/lobby.jpg";
import childern from "../assets/images/childern.jpg";
import living from "../assets/images/living.jpeg";
import bedroom from "../assets/images/bedroom.jpg";
import lift from "../assets/images/lift.jpg";
import kitchen from "../assets/images/kitchen.jpg";
import cloths from "../assets/images/cloths.jpg";
import balcony from "../assets/images/balcony.webp";
import Footer from "../components/Footer/Footer";
import garden from "../assets/images/garden.png";
import rock from "../assets/images/rock.png";
import outdoor from "../assets/images/opengym.png";
import hall from "../assets/images/Lounge.png";
import ScrollToTop from "react-scroll-to-top";

function Peace() {
  return (
    <>
      <PeaceHeader />
      <div className="peace_hero_img" data-aos="fade-up">
        <img src={heroimg} alt="" />
      </div>
      <div className="overView_section" id="peace_about">
        <div className="overView_text">
          <h2 data-aos="fade-down">OVERVIEW</h2>
          <p data-aos="zoom-in">
            Deep Builder is a renowned architectural firm specializing in
            residential, commercial, and mixed-use buildings. Our team of
            experienced architects and engineers has been providing exceptional
            design and construction services to clients across the globe. With
            our commitment to innovation, quality, and customer satisfaction, we
            strive to create buildings that not only serve their intended
            purpose but also reflect the unique values and aspirations of our
            clients.
          </p>
          <p data-aos="zoom-in-down">
            Deep Builder is a renowned architectural firm specializing in
            residential, commercial, and mixed-use buildings. Our team of
            experienced architects and engineers has been providing exceptional
            design and construction services to clients across the globe. With
            our commitment to innovation, quality, and customer satisfaction, we
            strive to create buildings that not only serve their intended
            purpose but also reflect the unique values and aspirations of our
            clients.
          </p>
        </div>
        <div
          className="overView_image"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src={overView} alt="overView_img" />
        </div>
      </div>
      <div className="master_plan_section">
        <div
          className="plan_heading"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h2>Master Plans</h2>
        </div>
        <div className="plan_images">
          <img src={masterplan} alt="master_plan_img" />
        </div>
      </div>
      <div className="amenities_section" id="peace_amenities">
        <div className="amenities_heading">
          <h2>AMENITIES</h2>
        </div>
        <div className="amenities_list">
          <div className="amenities_first_row">
            <div className="gym" data-aos="zoom-in">
              <img src={gym} alt="" />
              <h3>GYM</h3>
            </div>
            <div className="gym" data-aos="zoom-in-down">
              <img src={garden} alt="garden" />
              <h3>Garden</h3>
            </div>
          </div>
          <div className="amenities_first_row">
            <div className="gym" data-aos="zoom-in-right">
              <img src={hall} alt="hall" />
              <h3>Multipurpose Hall</h3>
            </div>
            <div className="gym" data-aos="zoom-out">
              <img src={rock} alt="" />
              <h3>Childern Play Area</h3>
            </div>
          </div>
          <div className="amenities_first_row">
            <div className="gym" data-aos="zoom-in-up">
              <img src={outdoor} alt="outdoor" />
              <h3>Outdoor Gym</h3>
            </div>
            <div className="gym" data-aos="zoom-in">
              <img src={indoor} alt="" />
              <h3>Indoor Games</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="amenities_photo_section" id="#peace_images">
        <div className="lobby" data-aos="zoom-in-up">
          <img src={lobby} alt="" />
        </div>
        <div className="lobby" data-aos="zoom-in-down">
          <img src={gym_photo} alt="" />
        </div>
        <div className="lobby" data-aos="zoom-out-down">
          <img src={outdoorGym} alt="" />
        </div>
        <div className="lobby" data-aos="zoom-out-up">
          <img src={batminton} alt="" />
        </div>
        <div className="lobby" data-aos="zoom-in-up">
          <img src={childern} alt="" />
        </div>
      </div>

      <div className="Mesmerising_space">
        <div className="mesmerising_heading">
          <h2>MESMERISING SPACE </h2>
        </div>
        <div className="mesmerising_images">
          <div
            className="mesmerising_image"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={living} alt="" />
            <h3> Living Room</h3>
          </div>
          <div
            className="mesmerising_image"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={bedroom} alt="" />
            <h3> Master Bed Room</h3>
          </div>
          <div
            className="mesmerising_image"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={lift} alt="" />
            <h3>LIFT LOBBY</h3>
          </div>
          <div
            className="mesmerising_image"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={kitchen} alt="" />
            <h3>KITCHEN</h3>
          </div>
          <div
            className="mesmerising_image"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={cloths} alt="" />
            <h3>OPEN CLOSETS</h3>
          </div>
          <div
            className="mesmerising_image"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={balcony} alt="" />
            <h3>SPECTACULAR VIEW</h3>
          </div>
        </div>
      </div>
      <div className="peace_footer" id="peace_footer">
        <Footer />
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default Peace;
