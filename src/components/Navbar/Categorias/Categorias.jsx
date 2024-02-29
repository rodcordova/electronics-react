import { Link } from "react-router-dom"
import React from "react"
export  const Categorias= React.memo( ()=> {
    return (
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">Categorias</a>
        <ul className="dropdown-menu">
            <li>
                <Link className="dropdown-item" to={'/category/1'}>Notebooks</Link>
            </li>
            <li>
                <Link className="dropdown-item" to={'/category/2'}>Celulares</Link>
            </li>
            <li>
                <Link className="dropdown-item" to={'/category/3'}>Monitores</Link>
            </li>
            <li>
                <a className="dropdown-item" href="/category/3">
                Something else here
                </a>
            </li>
        </ul>
    </li>
    )
}
)