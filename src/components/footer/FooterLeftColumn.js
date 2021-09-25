import React from "react";
import './Footer.css'
import FooterNavBar from '../navigation/FooterNavBar'

const FooterLeftColumn = () => {
  return (
    <section className="footer-left-column">
      <div className="logo-social-media">
        <img src="" alt="logo" />
        <p>direitos reservados, corebiz 2021</p>
      </div>
      <FooterNavBar />
    </section>
  );
};

export default FooterLeftColumn;
