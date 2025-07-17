import React from "react";
import AarambheHeader from "../components/Header/AarambheHeader";
import AarambheSlider from "../components/slider/AarambheSlider";
import AarambhVideo from "../assets/video/VID-20250409-WA0000.mp4";
import Aarambhimg1 from "../assets/images/aarambh brochure_Front.jpg";
import Amission from "../assets/images/Aarambh6.png";
import A_master_plan from "../assets/images/aarambh brochure_page-0005.jpg";
import A1 from "../assets/images/Aarambh1.png";
import A2 from "../assets/images/Aarambh2.png";
import A3 from "../assets/images/Aarambh3.png";
import A4 from "../assets/images/Aarambh4.png";
import A5 from "../assets/images/Aarambh5.png";
import A6 from "../assets/images/Aarambh6.png";
import A7 from "../assets/images/Aarambh7.png";
import A8 from "../assets/images/Aarambh8.png";
import A9 from "../assets/images/Aarambh9.png";
import party1 from "../assets/images/Party-Lawn.png";
import party_room1 from "../assets/images/Lounge.png";
import gym1 from "../assets/images/gym.png";
import Guest1 from "../assets/images/Guest.png";
import table1 from "../assets/images/table_tenis.png";
import kid_play1 from "../assets/images/kids_play.png";
import Library1 from "../assets/images/library.png";
import wheel1 from "../assets/images/wheel.png";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import "../style/aarambhe.css";

function Aarambhe() {
  
  return (
    <>
      <AarambheHeader />
      <div className="video_section">
        <video src={AarambhVideo} autoPlay loop muted></video>
      </div>
      <AarambheSlider />

      <div className="Aarambhe_about_section" id="Aarambhe_about">
        <div className="Aarambhe_about_text_section">
          <div className="Aarambh_about_heading">
            <h2 data-aos="fade-up">ABOUT AARAMBHE CITY</h2>
          </div>
          <div className="Aarambhe_about_text">
            <p data-aos="fade-down">
              Originating from Nagpur, Group Aarambhe™ gained nationwide acclaim
              with AllOut®, a household mosquito repellent brand later acquired
              by S. C. Johnson & Son Inc. This success laid the foundation for a
              legacy of innovation and trust.
            </p>
            <p data-aos="fade-up">
              Rebranded as Aarambh City, the group has expanded into real estate
              and lab-grown gems & jewellery. Our real estate projects are
              designed to elevate urban living, while our gem technologies bring
              sustainable luxury to modern consumers.
            </p>
            <p data-aos="fade-up">
              In addition to our core businesses, Aarambh City invests in
              consumer-facing startups, offering strategic guidance and support.
              Excellence, innovation, and customer satisfaction remain at our
              core.
            </p>
          </div>
        </div>
        <div
          className="Aarambhe_about_image"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={Aarambhimg1} alt="Aarambh_about_img" />
        </div>
      </div>

      <div className="Aarambhe_mission_section">
        <div
          className="Aarambhe_mission_image"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={Amission} alt="Amission_img" />
        </div>
        <div className="Aarambhe_mission_text_section">
          <div className="Aarambh_mission_heading">
            <h2 data-aos="fade-up">OUR MISSION</h2>
          </div>
          <div className="Aarambhe_mission_text">
            <p data-aos="fade-up">
              Originating from Nagpur, Group Aarambhe™ gained nationwide acclaim
              with AllOut®, a household mosquito repellent brand later acquired
              by S. C. Johnson & Son Inc. This success laid the foundation for a
              legacy of innovation and trust.
            </p>
            <p data-aos="fade-up">
              Rebranded as Aarambh City, the group has expanded into real estate
              and lab-grown gems & jewellery. Our real estate projects are
              designed to elevate urban living, while our gem technologies bring
              sustainable luxury to modern consumers.
            </p>
            <p data-aos="fade-down">
              In addition to our core businesses, Aarambh City invests in
              consumer-facing startups, offering strategic guidance and support.
              Excellence, innovation, and customer satisfaction remain at our
              core.
            </p>
          </div>
        </div>
      </div>

      <div className="Aarambhe_master_plan">
        <div className="A_master_plan_heading">
          <h2>MASTER PLAN</h2>
        </div>
        <div className="k_master_plan_image">
          <img src={A_master_plan} alt="A_master_plan" />
        </div>
      </div>

      <div className="Aarambhe_amenities_section" id="Aarambhe_amenities">
        <h2>AMENITIES</h2>
      </div>

      <div class="Aarambhe_aminities_points">
        <div
          className="party"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={party1} alt="" />
          <h3>Banquet Hall with an outdoor sit-out next to party lawns</h3>
        </div>
        <div
          className="party"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={party_room1} alt="" />
          <h3> Premium Lounge for cozy get-togethers</h3>
        </div>
        <div
          className="party"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={gym1} alt="" />
          <h3> Gymnasium with modern equipment</h3>
        </div>
        <div
          className="party"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={Guest1} alt="Guest" />
          <h3> 2 Ensuite Guest Rooms</h3>
        </div>
        <div
          className="party"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={table1} alt="table" />
          <h3> Game Room with Pool Table, Table Tennis etc</h3>
        </div>
        <div
          className="party"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={kid_play1} alt="table" />
          <h3> Kids Playroom</h3>
        </div>
        <div
          className="party"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={Library1} alt="table" />
          <h3> Library & Co-Working Space</h3>
        </div>
        <div
          className="party"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={wheel1} alt="table" />
          <h3>Provision of an Elevator and Wheelchair access</h3>
        </div>
      </div>

      <div className="Aarambhe_images">
        <div className="Aarambhe_gallery_img1">
          <img src={A1} alt="" />
        </div>
        <div className="Aarambhe_gallery_img2">
          <img src={A2} alt="" />
        </div>
        <div className="Aarambhe_gallery_img3">
          <img src={A3} alt="" />
        </div>
        <div className="Aarambhe_gallery_img4">
          <img src={A4} alt="" />
        </div>
        <div className="Aarambhe_gallery_img5">
          <img src={A5} alt="" />
        </div>
        <div className="Aarambhe_gallery_img6">
          <img src={A6} alt="" />
        </div>
        <div className="Aarambhe_gallery_img7">
          <img src={A7} alt="" />
        </div>
        <div className="Aarambhe_gallery_img8">
          <img src={A8} alt="" />
        </div>
        <div className="Aarambhe_gallery_img9">
          <img src={A9} alt="" />
        </div>
      </div>

      <div className="Aarambhe_footer" id="Aarambhe_footer">
        <Footer />
      </div>

      <ScrollToTop smooth />
    </>
  );
}

export default Aarambhe;
