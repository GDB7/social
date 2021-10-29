import React from "react";
import BackgroundImage from "../assets/brick-background3.jpg";
import "../styles/fevents.css";

function fevents() {
  return (
    <div
      className="f-events"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1>UPCOMING EVENTS</h1>
    </div>
  );
}

export default fevents;
