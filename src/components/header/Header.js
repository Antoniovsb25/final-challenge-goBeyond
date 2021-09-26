import React, { useState } from "react";
import NavBar from "../navigation/NavBar";
import "./Header.css";
import './Hamburguer.css'

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const toggleNavBar = (state) => {
    setNavBar(!navBar);
  };

  return (
    <header className="header">
      <div className="logo-and-hamburguer">
        <h1>corebiz.</h1>
        <div className="bars-container" onClick={toggleNavBar}>
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
        </div>
      </div>
      <NavBar classState={navBar} />
    </header>
  );
};

export default Header;
