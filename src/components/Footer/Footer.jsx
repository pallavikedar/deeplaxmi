import React from "react";
import "../../style/footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsappSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/WhatsApp_Image_2024-08-28_at_18.14.03_49212f05-removebg-preview.png";
function Footer() {
  return (
    <>
      <div className="footer_main_wrapper">
        <div className="contain_side">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="number">
            <p>
              <span>
                <MdAddIcCall />
              </span>
              +91 8329052521
            </p>
          </div>
          <div className="address">
            <p>
              <span>
                <FaLocationDot />
              </span>
              Plot no 40 Pavanputra Nagar Umred Road Hudkeshwar Nagpur
              Maharashtra 440034
            </p>
          </div>
        </div>
        <div className="map_section">
          <div className="social_media">
            <div className="icons">
              <a
                href="https://www.facebook.com/pravin.mulankar.1?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://api.whatsapp.com/send?phone=918329052521"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsappSquare} />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://www.instagram.com/mulankarpravin?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </div>
            <div className="icons">
              <a href="tel:+918329052521">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1724932113922!6m8!1m7!1s8CA-wfRuTnRdQZ1WxM3rNQ!2m2!1d21.10149846753784!2d79.13746415923384!3f292.3113005535874!4f-1.4430686585639734!5f0.4000000000000002"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
