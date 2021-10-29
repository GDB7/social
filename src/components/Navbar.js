import React, { useState } from "react";
import logo from "../assets/Social_Logo-removebg.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toogleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/fevents"> Upcoming Events </Link>
          <Link to="/pevents"> Previous Events </Link>
          <Link to="/about"> About </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/fevents"> Upcoming Events </Link>
        <Link to="/pevents"> Previous Events </Link>
        <Link to="/about"> About </Link>
        <button onClick={toogleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
