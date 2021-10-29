import React from "react";
import "../styles/pevents.css";
import BackgroundImage from "../assets/brick-background2.jpg";

function pevents() {
  return (
    <div
      className="p-events"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1>PREVIOUS EVENTS </h1>
    </div>
  );
}

export default pevents;
