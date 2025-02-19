import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import karm_logo from "../../assets/images/Group 572 (2).svg";
import { HashLink } from "react-router-hash-link";
function KaramHeader() {
  const [showMenu, setShowMenu] = useState(false);
  function handleclick() {
    setShowMenu(!showMenu);
  }
  function handleBrochureDownload() {
    const link = document.createElement("a");
    link.href = "/KaramChand.pdf"; // Path to your PDF file in the public folder
    link.download = "KaramChand.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <div className="brochure_section">
        <div className="button">
          <button onClick={handleBrochureDownload}> DownLode Brochure</button>
        </div>

        <div className="schedule">
          <p> SCHEDULE A VISIT</p>
        </div>
      </div>
      <div className="main_header">
        <div className="karam_logo">
          <img src={karm_logo} alt="" className="karam_header" />
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
            to={"#karam_about"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
            smooth={true}
          >
            About
          </HashLink>
          <HashLink
            to={"#karam_amenities"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
          >
            Amenities
          </HashLink>

          <HashLink
            to={"#karam_gallery"}
            className={"navlink"}
            onClick={() => setShowMenu(!showMenu)}
            smooth={true}
          >
            Gallary
          </HashLink>
          <HashLink
            to={"#karam_footer"}
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

export default KaramHeader;
