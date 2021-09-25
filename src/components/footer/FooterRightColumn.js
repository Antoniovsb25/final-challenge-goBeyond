import React from "react";

const FooterRightColumn = () => {
  return (
    <section className="footer-right-column">
      <div className="location">
        <h2 className="country">.Brasil</h2>
        <p className="address">
          Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP
        </p>
        <p className="address">
          R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP
        </p>
      </div>
      <div className="location">
        <h2 className="country">.Argentina</h2>
        <p className="address">
          Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA
        </p>
      </div>
      <div className="location">
        <h2 className="country">.México</h2>
        <p className="address">
          Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520
          Ciudad de México, CDMX
        </p>
      </div>
      <div className="location">
        <h2 className="country">.Chile</h2>
        <p className="address">Roberto del Río 1137, Providencia.</p>
      </div>
    </section>
  );
};

export default FooterRightColumn;
