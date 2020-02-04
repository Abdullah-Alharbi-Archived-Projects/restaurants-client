import React from "react";
import "./style.css";

const Footer = ({ text = "Buily By Abdullah Alharbi" }) => {
  return (
    <footer>
      <h3>Copyrights 2020 &copy;</h3>
      <h4>{text}</h4>
    </footer>
  );
};

export default Footer;
