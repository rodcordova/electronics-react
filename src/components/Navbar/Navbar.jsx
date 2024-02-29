import React from 'react'
import {CardWidget} from "../CardWidget/CardWidget"
import { Categorias } from './Categorias/Categorias'
import { Secciones } from './Secciones/Secciones'
import BotonDarkMode from './BotonDarkMode/BotonDarkMode'

// context
import { useDarkModelContext } from '../../context/DarkModeContext'
export const Navbar=({nombre})=> {
    const {darkMode}=useDarkModelContext()

    //<a className="navbar-brand" href="#">{nombre}</a>
    return (
    <nav className={`navbar navbar-expand-lg ${darkMode?"bg-light" :"navbar-dark bg-primary" }`}>
        <div className="container-fluid">
            
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Secciones/>
                    <Categorias/>
                </ul>
                <CardWidget cantCarrito={10}/>
                <BotonDarkMode/>
            </div>

        </div>
    </nav>
    )
}
