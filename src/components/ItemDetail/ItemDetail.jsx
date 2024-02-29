import ItemCount from '../ItemCount/ItemCount'

import { Link } from 'react-router-dom'

import { useDarkModelContext } from '../../context/DarkModeContext'

import { useCarritoContext } from '../../context/carritoContext'
export default function ItemDetail({prod}) {
    const {darkMode}=useDarkModelContext()
    const {addItem}=useCarritoContext();
    // se usara para que el componente hijo envie datos al padre
    const onAdd=(cantidad)=>{
        console.log(cantidad)
        console.log(prod)
        addItem(prod,cantidad)
    }

  return (
    <div className="row g-0">
        <div className="col-md-4 " style={{ backgroundColor: 'white' }}>
            <img src={`${prod.img}`} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
            <div className={`card-body ${ darkMode && "itemDetailBodyDark"} `}>
                <h5 className="card-title">{prod.nombre} </h5> 
                <p className="card-text">Modelo: {prod.modelo}</p>
                <p className="card-text">Marca: {prod.marca}</p>
                <p className="card-text">Precio: {prod.precio} </p>
                <p className="card-text">Stock: {prod.stock}</p>

                <ItemCount valInicial={1} stock={prod.stock} onAdd={onAdd}/> 
                <Link className="nav-link" to="/cart" >
                    <button className='btn btn-dark'>Finalizar compra</button>
                </Link>                
            </div>
        </div>
    </div>
  )
}
