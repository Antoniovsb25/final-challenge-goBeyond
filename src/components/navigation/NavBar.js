import React from "react";
import './NavBar.css'

const NavBar = (props) => {
    const menuFechar = props.classState
  return (
      <>
        <nav className={menuFechar ? 'esconder-menu' : 'hidden-menu'}>
            <ul className="flex-list">
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">A CoreBiz</a></li>
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">Serviços</a></li>
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">Cases</a></li>
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">Contatos</a></li>
            </ul>
        </nav>
        <nav className="hidden-menu2">
            <ul className="flex-list">
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">A CoreBiz</a></li>
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">Serviços</a></li>
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">Cases</a></li>
                <li className="nav-item"><a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">Contatos</a></li>
            </ul>
        </nav>
      </>
    
  );
};

export default NavBar;
