// react
import { useState,useEffect } from "react"
// dom
import { useParams } from "react-router-dom";

import { consultarBDD } from "../../utils/funciones";
import { getProducto } from "../../utils/firebase";

import ItemDetail from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);

    const {id}=useParams()
    useEffect(()=>{
     //consultarBDD('../json/productos.json').then((prods)=>{
     //  const prod=prods.find(item=>item.id===parseInt(id))
     //  setProducto(prod);
     //})
      getProducto(id).then(prod=>{
        setProducto(prod)
      })
    },[])
  return (
    <div className="card mb-3 container itemDetail">
        <ItemDetail prod={producto} />
    </div>
  )
}
