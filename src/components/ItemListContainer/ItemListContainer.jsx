// funciones
import { consultarBDD } from "../../utils/funciones"
import { getProductos } from "../../utils/firebase";

// react
import { useState,useEffect } from "react"
// DOM
import { useParams  } from "react-router-dom";
//componentes
import ItemList from "../ItemList/ItemList";
export default function ItemListContainer() {
    //react
    const [productos, setProductos] = useState([]);
    //DOM
    const {idCategoria}=useParams();
    
    // react - ciclo de vida
    useEffect(()=>{
        if(idCategoria){
            //consultarBDD('../json/productos.json')
            getProductos().then((products) => {
                const prods=products.filter(prod=> prod.stock > 0).filter(prod=>prod.idCategoria===parseInt(idCategoria))
                const items=<ItemList prods={prods} plantilla="Item"/>;
                //console.log('ItemListContainer',items) // MUESTRO EL JSON
                setProductos(items)
            })
        }else{
            //consultarBDD('./json/productos.json')
            getProductos().then((products) => {
                const prods=products.filter(prod=> prod.stock > 0)
                const items=<ItemList prods={prods} plantilla="Item"/>;
                console.log('ItemListContainer',items) // MUESTRO EL JSON
                setProductos(items)
            })
        }
        
    },[idCategoria])

    return (
        <div className="row card-productos">
            {productos}
        </div>
    )
}
