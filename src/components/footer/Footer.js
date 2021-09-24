import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-left-column">
        <div className="logo-social-media">
          <img src="" alt="logo" />
          <p>direitos reservados, corebiz 2021</p>
          <ul className="flex-list">
            <li className="nav-item">A CoreBiz</li>
            <li className="nav-item">Serviços</li>
            <li className="nav-item">Cases</li>
            <li className="nav-item">Contatos</li>
          </ul>
        </div>
        <div className="navbar-footer"></div>
      </section>
      <section className="footer-right-column">
              <div className="location">
                  <h2 className="country">.Brasil</h2>
                  <p className="address">Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                  <p className="address">R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
              </div>
              <div className="location">
                  <h2 className="country">.Argentina</h2>
                  <p className="address">Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
              </div>
              <div className="location">
                  <h2 className="country">.México</h2>
                  <p className="address">Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
              </div>
              <div className="location">
                  <h2 className="country">.Chile</h2>
                  <p className="address">Roberto del Río 1137, Providencia.</p>
              </div>
      </section>
    </footer>
  );
};

export default Footer;
