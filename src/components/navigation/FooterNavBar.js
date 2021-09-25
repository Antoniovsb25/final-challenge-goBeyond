import React from "react";
import './FooterNavBar.css'

const FooterNavBar = () => {
  return (
    <nav className="footer-menu">
      <ul className="footer-list">
        <li className="footer-item"><a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">A CoreBiz</a></li>
        <li className="footer-item"><a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">Serviços</a></li>
        <li className="footer-item"><a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">Cases</a></li>
        <li className="footer-item"><a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">Contatos</a></li>
      </ul>
    </nav>
  );
};

export default FooterNavBar;
