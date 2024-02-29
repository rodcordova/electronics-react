import { useState } from 'react'
export default function ItemCount({valInicial,stock, onAdd}) {
  const [contador,setContador]=useState(valInicial)

  const sumar =()=>{
    contador<stock && setContador(contador+1)
  }
  const restar=()=>{
    contador>valInicial && setContador(contador-1)
  }
 
  return (
    <div>
        <button className='btn btn-dark' onClick={()=> sumar()}>+</button>
        {contador}
        <button className='btn btn-dark'onClick={()=>restar()}>-</button>
        <button className='btn btn-dark' onClick={()=>onAdd(contador)}>Agregar al carrrito</button>
    </div>
  )
}
