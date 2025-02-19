import React from "react";
import videoFile from "../assets/video/WhatsApp Video 2024-07-25 at 14.58.22_1fa4026c.mp4";
import "../style/home.css";
import building_img from "../assets/images/main_building.jpg";
import gallery1 from "../assets/images/gallery1.jpeg";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery3.webp";
import Footer from "../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import k2 from "../assets/images/Screenshot 2024-08-20 140420.png";
import royal_empire from "../assets/images/Screenshot 2024-08-20 143822.png";
import ScrollToTop from "react-scroll-to-top";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Header />
      <div className="video_section">
        <video src={videoFile} autoPlay loop muted></video>
      </div>
      <div className="about_section" id="about">
        <div className="about_text">
          <div className="about_heading">
            <h2> About</h2>
          </div>
          <div className="text_heading">
            <h3
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              We Shree Laxmi Venture Private Limited are Premier Real Estate
              Company Located in Nagpur. We Known as reliable and Faithful
              Builders and Developers.
            </h3>
          </div>
          <div className="goal">
            <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              Our Mission
            </h2>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
            >
              “Always do each work right first time and every time and within
              time We not only built houses but also unending relations with
              house owners”.
            </p>
          </div>
          <div className="extra_text">
            <p data-aos="fade-up" data-aos-anchor-placement="top-center">
              Ranging from luxuries upscale housing projects to affordable
              housing we specialize in all. With a consistent track record of
              timely completion and standard quality construction our ability
              meets the special requirements of clients. Every projects that
              bears our signature stands out from the rest. We always believes
              that value of money and time is money.
            </p>
          </div>
        </div>
        <div className="about_images">
          <img
            src={building_img}
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
      <div className="project_heading" id="project">
        <h2 data-aos="fade-up" data-aos-duration="3000">
          ONGOING PROJECTS
        </h2>
        <br />
        <h2>All Projects</h2>
      </div>
      <div className="project_section">
        <div className="project_cards">
          <NavLink to={"/peace"} className={"navlink"}>
            <div
              className="fisrt_card"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="first_card_img">
                <img src={building_img} alt="" />
              </div>
              <p>PEACE CITY</p>
            </div>
          </NavLink>

          <NavLink to={"/karam"} className={"navlink"}>
            <div
              className="fisrt_card"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="first_card_img">
                <img src={k2} alt="" />
              </div>
              <p>KARAMCHAND PROPERTIES</p>
            </div>
          </NavLink>
          <NavLink to={"/royal"} className={"navlink"}>
            <div className="fisrt_card" data-aos="zoom-out-right">
              <div className="first_card_img">
                <img src={royal_empire} alt="" />
              </div>
              <p>ROYAL EMPIRE</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="gallery_section">
        <div className="gallery_text">
          <div
            className="gallery_heading"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2> Our Gallery</h2>
          </div>
          <div className="gallery_about">
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              Shree Laxmi Venture continues to build and deliver new, iconic
              developments in home market of Nagpur. We have also been gradually
              diversifying into other markets where we can replicate our proven
              business model through-out the nation. Innovation in our offerings
              combined with an emphasis on contemporary architecture, strong
              project execution and quality construction have helped us
              transform into a brand to reckon with.
            </p>
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Shree Laxmi Venture continues to build and deliver new, iconic
              developments in home market of Nagpur. We have also been gradually
              diversifying into other markets where we can replicate our proven
              business model through-out the nation. Innovation in our offerings
              combined with an emphasis on contemporary architecture, strong
              project execution and quality construction have helped us
              transform into a brand to reckon with.
            </p>
          </div>
        </div>
        <div className="gallery_images" id="gallery">
          <div className="galley_image" data-aos="fade-up-right">
            <img src={gallery1} alt="gallery1" />
          </div>
          <div className="galley_image" data-aos="zoom-in">
            <img src={gallery2} alt="gallery2" />
          </div>
          <div className="galley_image">
            <img src={gallery3} alt="gallery3" data-aos="zoom-in-down" />
          </div>
          <div className="galley_image">
            <img src={gallery4} alt="gallery4" data-aos="zoom-in-up" />
          </div>
        </div>
      </div>

      <div className="footer_section" id="contact">
        <Footer />
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default Home;
