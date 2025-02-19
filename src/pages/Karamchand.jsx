import React from "react";
import KaramHeader from "../components/Header/KaramHeader";
import "../style/karam.css";
import KaramSlider from "../components/slider/KaramSlider";
import karamimg1 from "../assets/images/kabout.jpeg";
import kmission from "../assets/images/kmission.jpeg";
import k_master_plan from "../assets/images/karanmasterplan.jpeg";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import g1 from "../assets/images/kappframework-AFDFHl(1)(1).png";
import g2 from "../assets/images/kappframework-BtMOrd(1)(1).png";
import g3 from "../assets/images/kappframework-PRxZTN(1)(1).png";
import g4 from "../assets/images/kappframework-QQOABj(1)(1).png";
import g5 from "../assets/images/kappframework-VXyoFz(1)(1).png";
import g6 from "../assets/images/kappframework-hucqbh(1)(1).png";
import g7 from "../assets/images/kappframework-llFAzd(1)(1).png";
import g8 from "../assets/images/kappframework-nxCFfg(1)(1).png";
import g9 from "../assets/images/kappframework-umIISa(1)(1).png";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

function Karamchand() {
  return (
    <>
      <KaramHeader />
      <KaramSlider />
      <div className="karam_about_section" id="karam_about">
        <div className="karam_about_text_section">
          <div className="karm_about_heading" data-aos="fade-up">
            <h2>ABOUT KARAMCHAND PROPERTIES</h2>
          </div>
          <div className="karam_about_text">
            <p data-aos="fade-down">
              Originating from the vibrant city of Nagpur, Group Karamchand™ is
              renowned for creating the iconic AllOut® mosquito repellent, a
              staple in Indian households. After successfully establishing
              AllOut® as a trusted brand, the group exited the brand in favor of
              S. C. Johnson & Son Inc.
              <p data-aos="zoom-in">
                Building on this legacy, we have since diversified into creating
                consumer delight in the Real Estate and Gems & Jewellery
                sectors. Our real estate ventures focus on delivering
                innovative, high-quality residential and commercial projects,
                while our gem business leverages cutting-edge lab-grown gem
                technologies to redefine luxury.
              </p>
              <p data-aos="fade-down">
                In addition to our core businesses, Group Karamchand™ has also
                invested in consumer-facing startups, continually guiding and
                adding value to our partners. Our commitment to excellence,
                innovation, and customer satisfaction remains at the heart of
                everything we do.
              </p>
            </p>
          </div>
        </div>
        <div className="karam_about_image">
          <img
            src={karamimg1}
            alt="karm_about_img"
            data-aos="fade-up"
            data-aos-duration="3000"
          />
        </div>
      </div>
      <div className="karam_mission_section">
        <div
          className="karam_mission_image"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={kmission} alt="kmission" />
        </div>
        <div className="karam_mission_text_section">
          <div className="karam_mission_heading" data-aos="fade-up">
            <h2>OUR MISSION</h2>
          </div>
          <div className="karam_mission_text">
            <p data-aos="fade-down">
              We ventured into the captivating domain of Real Estate in Nagpur,
              from where our humble origins began. We are committed to quality,
              design, people, and community, always aiming to deliver CUSTOMER
              DELIGHT!
            </p>
            <p data-aos="fade-up">
              Our goal is to create an oasis of tranquility and calm in our
              strategically located land parcels within the high-growth corridor
              of South Nagpur. We are devoted to enhancing life's little
              pleasures, allowing you to truly savor The Joy of Living.
            </p>
            <p data-aos="zoom-in">
              At Karamchand Properties, our vision is to develop neighborhoods
              that seamlessly blend modern amenities with nature. We believe in
              creating spaces that are not just functional but also bring joy
              and satisfaction to our residents. With a focus on sustainability
              and community well-being, we aim to enhance life’s little
              pleasures through innovative and eco-friendly designs.
            </p>
          </div>
        </div>
      </div>
      <div className="karam_master_plan">
        <div className="k_master_plan_heading" data-aos="zoom-in-down">
          <h2>MASTER PLAN</h2>
        </div>
        <div className="k_master_plan_image">
          <img src={k_master_plan} alt="k_master_plan" />
        </div>
      </div>
      <div className="karam_amenities_section" id="karam_amenities">
        <h2 data-aos="zoom-out">AMENITIES</h2>
      </div>
      <div className="k_amenities_link">
        <NavLink
          to={"indoor"}
          className={"nested_link"}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          INDOOR AMENITIES
        </NavLink>
        <NavLink
          to={"outdoor"}
          className={"nested_link"}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          OUTDOOR AMENITIES
        </NavLink>
      </div>
      <Outlet />

      <div className="karam_chand_images" id="karam_gallery">
        <div className="karam_gallery_img1" data-aos="fade-up">
          <img src={g1} alt="" />
        </div>
        <div className="karam_gallery_img2" data-aos="fade-down">
          <img src={g2} alt="" />
        </div>
        <div className="karam_gallery_img3" data-aos="fade-up">
          <img src={g3} alt="" />
        </div>
        <div className="karam_gallery_img4" data-aos="fade-down">
          <img src={g4} alt="" />
        </div>
        <div className="karam_gallery_img5" data-aos="fade-up">
          <img src={g5} alt="" />
        </div>
        <div className="karam_gallery_img6" data-aos="fade-down">
          <img src={g6} alt="" />
        </div>
        <div className="karam_gallery_img7" data-aos="fade-up">
          <img src={g7} alt="" />
        </div>
        <div className="karam_gallery_img8" data-aos="fade-down">
          <img src={g8} alt="" />
        </div>
        <div className="karam_gallery_img9" data-aos="fade-up">
          <img src={g9} alt="" />
        </div>
      </div>
      <div className="karam_footer" id="karam_footer">
        <Footer />
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default Karamchand;
