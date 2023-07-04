import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHub />
      </div>
      <p>&copy; 2022 Davinder Kumar</p>
    </div>
  );
};

export default Footer;
