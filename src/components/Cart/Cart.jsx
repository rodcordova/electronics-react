import { Link } from "react-router-dom"

import ItemList from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/carritoContext"
export default function Cart() {
  //const carrito=[
  //  {
  //    id:1,
  //    idCategoria:1,
  //    cant:9,
  //    nombre:"notebok",
  //    marca:"lenovo",
  //    modelo:"Y510P",
  //    precio:60000,
  //    stock:30,
  //    img:"https://firebasestorage.googleapis.com/v0/b/electrodomestics-6ea77.appspot.com/o/notebook-lenovo.png?alt=media&//token=e4b3787c-7640-4015-96fb-e12bdc635b06"
  //},
  //{
  //  id:1,
  //  idCategoria:1,
  //  cant:7,
  //  nombre:"notebok",
  //  marca:"lenovo",
  //  modelo:"Y510P",
  //  precio:60000,
  //  stock:30,
  //  img:"https://firebasestorage.googleapis.com/v0/b/electrodomestics-6ea77.appspot.com/o/notebook-lenovo.png?alt=media&//token=e4b3787c-7640-4015-96fb-e12bdc635b06"
  //},
  //{
  //  id:1,
  //  idCategoria:1,
  //  cant:2,
  //  nombre:"notebok",
  //  marca:"lenovo",
  //  modelo:"Y510P",
  //  precio:60000,
  //  stock:30,
  //  img:"https://firebasestorage.googleapis.com/v0/b/electrodomestics-6ea77.appspot.com/o/notebook-lenovo.png?alt=media&//token=e4b3787c-7640-4015-96fb-e12bdc635b06"
  //}
  //]
  //const carrito2=[]
  const {carrito,emptyCart,totalPrice}=useCarritoContext();
  return (
    <>
      {
        carrito.length===0
        ? // no existe productos en carrito 
        <>
          <h2>No hay productos en el carrito</h2>
          <Link className="nav-link" to={"/"}>
            <button className="btn btn-primary">Continuar comprando</button>
          </Link>
        </> 
        :
        <div className="container cartContainer">
          <ItemList prods={carrito} plantilla="ItemCart"/>;

          <div className="divButtons">
            <p> Resumen de la compra: {totalPrice()} </p>
            <button className="btn btn-danger" onClick={()=>emptyCart()}>Vaciar carrito</button>

            <Link className="nav-link" to={"/"}>
              <button className="btn btn-dark">Continuar comprando</button>
            </Link>

            <Link className="nav-link" to={"/checkout"}>
              <button className="btn btn-dark">Finalizar compra </button>
            </Link>
          </div>
        </div>
        
      }
    </>
  )
}


/* PRIMER METODO RENDERNG CON IF- complejidad 6
  const cond=false
  if(cond){
    return <h2>Es verdadero</h2>
  }
  return (
    <h2>Es falso</h2>
  ) 
*/
/*
SEGUNDO METODO DE RENDERIZAR CON CONDICIONALES  - Complejidad 6
const cond=true
  return (
    <>
      {cond && <h2>Es verdadero </h2>}
      {!cond && <h2>No es verdadero</h2> }
    </>
  )
*/
/*
TERCER METODO DE RENDERIZADO CON TERNARIOS - Complejidad 5
const cond=false
  return (
    <>
      {cond ? <h2>Es verdadero </h2>:<h2>Es falso</h2>}
    </>
*/