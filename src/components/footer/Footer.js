import React from "react";
import FooterLeftColumn from './FooterLeftColumn'
import FooterRightColumn from './FooterRightColumn'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <FooterLeftColumn />
        <FooterRightColumn />
    </footer>
  );
};

export default Footer;
