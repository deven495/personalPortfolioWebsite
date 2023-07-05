import React from "react";
import "../styles/Footer.css";
import Links from "./Links";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Links />
      </div>
      <p>&copy; 2022 Made by ♡ Davinder Kumar</p>
    </div>
  );
};

export default Footer;
