import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Twitter from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>Copyright &copy; GDB {year}</p>
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <a href="https://wa.me/2348071713396">
          <WhatsAppIcon />
        </a>
        <Twitter />
      </div>
    </div>
  );
}

export default Footer;
