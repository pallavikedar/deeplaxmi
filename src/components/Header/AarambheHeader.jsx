import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import aarambhlogo from "../../assets/images/aarambh_brochure_logo-removebg-preview.png";
import "../../style/aarambhheader.css";
import { HashLink } from "react-router-hash-link";
function AarambheHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  function handleBrochureDownload() {
    const link = document.createElement("a");
    link.href = "/aarambh brochure.pdf";
    link.download = "aarambh brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <div className="brochure_section">
        <div className="button">
          <button onClick={handleBrochureDownload}>Download Brochure</button>
        </div>
        <div className="schedule">
          <p> SCHEDULE A VISIT</p>
        </div>
      </div>

      {/* Main header */}
      <header>
        <div className="AarambheHeader">
          <div className="Aarambhelogo">
            <img src={aarambhlogo} alt="Aarambh Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="aarambhmainheader">
            <HashLink to="/" className="aarambhmainheader_navlink">
              Home
            </HashLink>
            <HashLink
              to="#Aarambhe_about"
              className="aarambhmainheader_navlink"
            >
              About
            </HashLink>
            <HashLink
              to="#Aarambhe_amenities"
              className="aarambhmainheader_navlink"
            >
              Amenities
            </HashLink>
            <HashLink
              to="#Aarambhe_footer"
              className="aarambhmainheader_navlink"
            >
              Contact
            </HashLink>
          </nav>

          {/* Hamburger icon (mobile only) */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <HashLink to="/" onClick={closeMenu}>
            Home
          </HashLink>
          <HashLink to="#Aarambhe_about" onClick={closeMenu}>
            About
          </HashLink>
          <HashLink to="#Aarambhe_amenities" onClick={closeMenu}>
            Amenities
          </HashLink>
          <HashLink to="#Aarambhe_footer" onClick={closeMenu}>
            Contact
          </HashLink>
        </div>
      </header>
    </>
  );
}

export default AarambheHeader;
