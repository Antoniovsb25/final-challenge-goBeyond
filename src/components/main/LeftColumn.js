import React, { useState } from "react";
import './LeftColumn.css'

const LeftColumn = (props) => {

  return (
    <section className="left-column">
      <h2>{props.text}</h2>
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
