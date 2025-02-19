import React from "react";
import "../style/indoor.css";
import party from "../assets/images/Party-Lawn.png";
import party_room from "../assets/images/Lounge.png";
import Theatre from "../assets/images/Theatre.png";
import gym from "../assets/images/gym.png";
import Guest from "../assets/images/Guest.png";
import table from "../assets/images/table_tenis.png";
import kid_play from "../assets/images/kids_play.png";
import Library from "../assets/images/library.png";
import yoga from "../assets/images/yoga.png";
import wheel from "../assets/images/wheel.png";
function Indoor() {
  return (
    <>
      <div className="indoor_amenities_section">
        <div className="party">
          <img src={party} alt="" />
          <h3>Banquet Hall with an outdoor sit-out next to party lawns</h3>
        </div>
        <div className="party">
          <img src={party_room} alt="" />
          <h3> Premium Lounge for cozy get-togethers</h3>
        </div>
        <div className="party">
          <img src={Theatre} alt="" />
          <h3>14 seater Home Theater for private viewing</h3>
        </div>
        <div className="party">
          <img src={gym} alt="" />
          <h3> Gymnasium with modern equipment</h3>
        </div>
        <div className="party">
          <img src={Guest} alt="Guest" />
          <h3> 2 Ensuite Guest Rooms</h3>
        </div>
        <div className="party">
          <img src={table} alt="table" />
          <h3> Game Room with Pool Table, Table Tennis etc</h3>
        </div>
        <div className="party">
          <img src={kid_play} alt="table" />
          <h3> Kids Playroom</h3>
        </div>
        <div className="party">
          <img src={Library} alt="table" />
          <h3> Library & Co-Working Space</h3>
        </div>
        <div className="party">
          <img src={yoga} alt="table" />
          <h3>Yoga Room that opens out onto a private open terrace</h3>
        </div>
        <div className="party">
          <img src={wheel} alt="table" />
          <h3>Provision of an Elevator and Wheelchair access</h3>
        </div>
      </div>
    </>
  );
}

export default Indoor;
