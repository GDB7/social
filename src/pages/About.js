import React from "react";
import BackgroundImage from "../assets/brick-background.jpg";
import "../styles/about.css";

function About() {
  return (
    <div
      className="about"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1>About SPAN</h1>
    </div>
  );
}

export default About;
