import React, { useState } from 'react'
import NavBar from '../navigation/NavBar'
import Hamburguer from './Hamburguer'
import './Header.css'

const Header = () => {
    const [nextState, setNextState] = useState(true)
    const toggleNavBar = (state) => {
        setNextState(state)
    }

    return (
        <header className="header">
            <div className="logo-and-hamburguer">
                <h1>corebiz.</h1>
                <Hamburguer onHamburguerClick={toggleNavBar}/>
            </div>
            <NavBar classState={nextState}/>
        </header>
    )
}

export default Header
