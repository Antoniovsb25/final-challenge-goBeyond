import React, { useState } from "react";
import "./Hamburguer.css";

const Hamburguer = (props) => {

    const [navBar, setNavBar] = useState(true)

    const toggleButton = () => {
        setNavBar(!navBar)
        props.onHamburguerClick(navBar)
    }

  return (
    <>
      <div className="bars-container" onClick={toggleButton}>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
    </>
  );
};

export default Hamburguer;
