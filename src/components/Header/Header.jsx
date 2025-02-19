import React from "react";
import "../Header/header.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import final_logo from "../../assets/images/d2.jpg";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  function handleclick() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div className="mini_header">
        <div className="number">
          <p>Call Us : 8329052521</p>
        </div>
        <div className="mini_header_social_icon">
          <a
            href="https://www.facebook.com/pravin.mulankar.1?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=918329052521"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/mulankarpravin?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a href="tel:+918329052521" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
      <div className="main_header">
        <div className="logo">
          <img src={final_logo} alt="final_logo" />
        </div>
        <div className={showMenu ? "main_links2" : "main_links"}>
          <NavLink
            to="/"
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            Home
          </NavLink>

          <HashLink
            to={"#about"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            About
          </HashLink>
          <HashLink
            to={"#project"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            Project
          </HashLink>
          <HashLink
            to={"#Testimonial"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            Testimonial
          </HashLink>
          <HashLink
            to={"#gallery"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            Gallary
          </HashLink>
          <HashLink
            to={"#contact"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            Contact
          </HashLink>
        </div>
        <div className="hamburgar_icon" onClick={handleclick}>
          {showMenu ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </div>
    </>
  );
}

export default Header;
