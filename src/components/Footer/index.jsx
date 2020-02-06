import React from "react";
import "./style.css";

const Footer = ({ text = "Buily By Abdullah Alharbi" }) => {
  return (
    <footer>
      <h3></h3>
      <p>Copyrights 2020 &copy;</p>
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
