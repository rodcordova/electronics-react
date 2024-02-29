import { useContext,createContext,useState } from "react";

const CarritoContext=createContext()
export const useCarritoContext= ()=>useContext(CarritoContext)


export const CarritoProvider = (props)=>{
    

    const  [carrito, setCarrito] = useState([])
    // Si exite producto en carrito
    const isOnCart=(id)=>{
        return carrito.find(prod=> prod.id === id)
    }

    // Agregar producto
    const addItem=(producto,cantidad)=>{
        // si existe en el carrito => modifico las cantidaddes
        
        if(isOnCart(producto.id)){
            const indice=carrito.findIndex(prod=>prod.id===producto.id)
            const aux=[...carrito]
            aux[indice].cant=cantidad

            setCarrito(aux)
        }else{
            // si no exite en el carrito => lo creo
            const prodCart= {
                ...producto ,
                cant:cantidad}

            setCarrito([...carrito,prodCart]);
        }
    }

    // eliminar producto de carrtiyo
    const removeItem=(id)=>{
        //const indice=carrito.findIndex(prod=>prod.id===id)
        //carrito.splice(indice,1)

        setCarrito(carrito.filter(prod=>prod.id !== id))
    }

    // Vaciar carrito
    const emptyCart=()=>{
        setCarrito([])
    }

    // cantidad total de productos de carrito
    const getItemQuantity=()=>{
        return carrito.reduce((acum,prod)=> acum += prod.cant ,0)
    }
    
    
    // precio total
    const totalPrice=()=>{
        return  carrito.reduce((acum,prod)=> acum +=(prod.cant*prod.precio ),0)
    }

    console.log(carrito)
    return (
        <CarritoContext.Provider value={{carrito,addItem,removeItem,emptyCart,getItemQuantity,totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )
}