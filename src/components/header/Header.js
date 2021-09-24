import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo-and-hamburguer">
                <h1>CoreBiz</h1>
                <button>Add</button>
            </div>
            <nav className="hidden-menu">
                <ul className="flex-list">
                    <li className="nav-item">A CoreBiz</li>
                    <li className="nav-item">Serviços</li>
                    <li className="nav-item">Cases</li>
                    <li className="nav-item">Contatos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
