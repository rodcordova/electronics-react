import { Link } from "react-router-dom"

import { useDarkModelContext } from "../../context/DarkModeContext"
export default function Item({item}) {
  const {darkMode}=useDarkModelContext()
  console.log(darkMode)
  return (
    <div className="card mb-3 cardProducto border-ligth" >
        <img src={`${item.img}`} className="card-img-top" alt={`Imagen de ${item.nombre}`}/>
        <div className={`card-body ${darkMode?"cardBodyDark":"cardBody"}`} >
            <h5 className="card-title">{item.nombre} {item.modelo}</h5>
            <p className="card-text">{item.marca}</p>
            <p className="card-text">${item.precio}</p>

            <Link className="nav-link" to={`/item/${item.id}`}>
              <button className={`btn ${darkMode? "btn-secondary":"btn-primary"}`}>Ver producto</button>
            </Link>
            
        </div>
    </div>
  )
}
