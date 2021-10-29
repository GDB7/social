import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Spannites1.jpg";
import "../styles/Home.css";
import SpanLogo from "../assets/Span-Logo.jpeg";
import { bounce, pulse } from "react-animations";
import styled, { keyframes } from "styled-components";

const Bounce = styled.div`
  animation: 3s ${keyframes`${bounce}`} infinite;
`;
const Pulse = styled.div`
  animation: 1s ${keyframes`${pulse}`} infinite;
`;
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <Pulse>
          <img className="LogoImage" src={SpanLogo} alt="Span-Logo" />
        </Pulse>

        <Bounce>
          <h1>SPAN</h1>
        </Bounce>
        <p>STUDENT PHYSIOLOGICAL ASSOCIATION OF NIGERIA</p>
        <p>Unilag Chapter</p>
        <div className="homeButtonContainer">
          <Link to="/pevents">
            <button className="homeButton">Previous Events</button>
          </Link>
          <Link to="/fevents">
            <button className="homeButton">Upcoming Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
