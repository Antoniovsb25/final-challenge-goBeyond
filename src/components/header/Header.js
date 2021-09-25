import React from 'react'
import NavBar from '../navigation/NavBar'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo-and-hamburguer">
                <h1>CoreBiz</h1>
                <button>Add</button>
            </div>
            <NavBar />
        </header>
    )
}

export default Header
