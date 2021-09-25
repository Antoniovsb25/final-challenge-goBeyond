import React from 'react'
import NavBar from '../navigation/NavBar'
import Hamburguer from './Hamburguer'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo-and-hamburguer">
                <h1>CoreBiz</h1>
                <Hamburguer />
            </div>
            <NavBar />
        </header>
    )
}

export default Header
