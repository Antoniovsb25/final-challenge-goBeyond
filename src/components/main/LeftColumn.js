import React from "react";
import './LeftColumn.css'

const LeftColumn = () => {
  return (
    <section className="left-column">
      <h2>A CoreBiz atua em toda jornada digital do usuário.</h2>
      <a
        href="https://www.corebiz.ag/pt/"
        target="_blank"
        rel="noreferrer"
        className="button-see-more"
      >
        <span className="see-more-text">Veja mais</span>
      </a>
    </section>
  );
};

export default LeftColumn;
