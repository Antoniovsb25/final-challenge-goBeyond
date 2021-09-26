import React from "react";
import './Footer.css'
import SocialMedia from './SocialMedia'
import FooterNavBar from '../navigation/FooterNavBar'

const FooterLeftColumn = () => {
  return (
    <section className="footer-left-column">
      <div className="logo-social-media">
        <h3>corebiz.</h3>
        <p>direitos reservados, corebiz 2021</p>
        <SocialMedia />
      </div>
      <FooterNavBar />
    </section>
  );
};

export default FooterLeftColumn;
