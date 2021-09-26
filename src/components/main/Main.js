import React, { useState, useEffect } from "react";
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import "./Main.css";

const Main = () => {
    const [texto, setTexto] = useState(0)
    const textHandler = (text) => {
        setTexto(text)
    }
  return (
    <main className="main">
        <LeftColumn  text={texto}/>
        <RightColumn  onTextChanging={textHandler}/>
    </main>
  )
};

export default Main;
