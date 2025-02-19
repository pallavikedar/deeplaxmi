import React from "react";
import "../style/outdoor.css";
import party from "../assets/images/Party-Lawn.png";
import tenis from "../assets/images/tenis.png";
import jogging from "../assets/images/jogging.png";
import opengym from "../assets/images/opengym.png";
import kidplay from "../assets/images/kidpool.png";
import senior from "../assets/images/senoir.png";
import barbiq from "../assets/images/barbiq.png";
import golf from "../assets/images/golf.png";
import laouge from "../assets/images/Lounge.png";
function Outdoor() {
  return (
    <>
      <div className="outdoor_amenities_section">
        <div className="green_party">
          <img src={party} alt="party" />
          <p>
            Lush green Party Lawns <br /> next to Banquet Hall
          </p>
        </div>
        <div className="green_party">
          <img src={tenis} alt="tenis" />
          <p>Lawn Tennis Court with floodlights </p>
        </div>
        <div className="green_party">
          <img src={jogging} alt="jogging" />
          <p> Jogging & Walking Track </p>
        </div>
        <div className="green_party">
          <img src={opengym} alt="Open Gymnasium" />
          <p> Open Gymnasium </p>
        </div>
        <div className="green_party">
          <img src={kidplay} alt="Kids Fountain & Play Area" />
          <p>Kids Fountain & Play Area</p>
        </div>
        <div className="green_party">
          <img src={senior} alt="Kids Fountain & Play Area" />
          <p> Senior Citizen’s Peace Zone</p>
        </div>
        <div className="green_party">
          <img src={barbiq} alt="Kids Fountain & Play Area" />
          <p>Barbeque Corner</p>
        </div>
        <div className="green_party">
          <img src={golf} alt="Miniature Golf Puing Greens" />
          <p> Miniature Golf Puing Greens</p>
        </div>
        <div className="green_party">
          <img src={laouge} alt="Kids Fountain & Play Area" />
          <p> Terrace Private Party Lounge</p>
        </div>
      </div>
    </>
  );
}

export default Outdoor;
