import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import karm_logo from "../../assets/images/Screenshot_2024-08-20_161238-removebg-preview.png";
function RoyalHeader() {
  const [showMenu, setShowMenu] = useState(false);
  function handleclick() {
    setShowMenu(!showMenu);
  }
  function handleBrochureDownload() {
    const link = document.createElement("a");
    link.href = "/Royal_empire.pdf"; // Path to your PDF file in the public folder
    link.download = "Royal_empire.pdf"; // The name of the downloaded file
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
        <div className="karam_logo" style={{ cursor: "pointer" }}>
          <img src={karm_logo} alt="" className="karam_header" />
        </div>
        <div className={showMenu ? "main_links2" : "main_links"}>
          <NavLink
            to={"/"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            Home
          </NavLink>

          <NavLink className={"navlink"} onClick={() => setShowMenu(!showMenu)}>
            About
          </NavLink>
          <NavLink className={"navlink"} onClick={() => setShowMenu(!showMenu)}>
            Gallary
          </NavLink>
          <NavLink className={"navlink"} onClick={() => setShowMenu(!showMenu)}>
            Contact
          </NavLink>
        </div>
        <div className="hamburgar_icon" onClick={handleclick}>
          {showMenu ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </div>
    </>
  );
}

export default RoyalHeader;
