import React from "react";
import "../Header/header.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import peace from "../../assets/images/peace.png";
import { HashLink } from "react-router-hash-link";
function PeaceHeader() {
  const [showMenu, setShowMenu] = useState(false);
  function handleclick() {
    setShowMenu(!showMenu);
  }
  function handleBrochureDownload() {
    const link = document.createElement("a");
    link.href = "/peacecity.pdf"; // Path to your PDF file in the public folder
    link.download = "peacecity.pdf"; // The name of the downloaded file
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
      <div className="main_header">
        <div className="peace_logo">
          <img src={peace} alt="" className="peace_header_img" />
        </div>
        <div className={showMenu ? "main_links2" : "main_links"}>
          <HashLink
            to={"/"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
            smooth={true}
          >
            Home
          </HashLink>

          <HashLink
            to={"#peace_about"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
            smooth={true}
          >
            About
          </HashLink>

          <HashLink
            to={"#peace_amenities"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
            smooth={true}
          >
            Amenities
          </HashLink>
          <HashLink
            to={"#peace_images"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
            smooth={true}
          >
            Gallary
          </HashLink>
          <HashLink
            to={"#peace_footer"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
            smooth={true}
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

export default PeaceHeader;
