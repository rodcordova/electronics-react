// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import  {getFirestore, collection, addDoc,getDocs,getDoc,doc, updateDoc,deleteDoc} from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD98dZR4s2Kc_x_9r96KdO5wQyL3k94eSU",
  authDomain: "electrodomestics-6ea77.firebaseapp.com",
  projectId: "electrodomestics-6ea77",
  storageBucket: "electrodomestics-6ea77.appspot.com",
  messagingSenderId: "592425164811",
  appId: "1:592425164811:web:980d734732aab406dd670e",
  measurementId: "G-GXG0XW2YW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= getFirestore() // referencia a la base de datos

/*
CRUD

CREATE
READ
UPDATE
DELETE
*/
export const cargarBDD=async()=>{
    const promise=await fetch("./json/productos.json")
    const productos=await promise.json()
    productos.forEach(async(prod)=>{
        await addDoc(collection(db,"productos"),{
            nombre:prod.nombre,
            marca:prod.marca,
            modelo:prod.modelo,
            idCategoria:prod.idCategoria,
            stock:prod.stock,
            precio:prod.precio,
            img:prod.img
        })// collection si existe mi coleccion, lo lee sino lo crea y consulta
    })
}

export const getProductos=async()=>{
    const productos=await getDocs(collection(db,"productos"))
    console.log("GET_PRODUCTOS",productos) // objeto de firestore

    const items =productos.docs.map(prod=>{
        return{
            ...prod.data(),
            id:prod.id
        }
    })

    return items
}

export const getProducto=async(id)=>{
    const producto=await getDoc(doc(db,"productos",id))
    console.log("GET_PRODUCTOS",producto)

    const item ={
        ...producto.data(),
        id:producto.id
    }

    return item
}

export const updateProducto=async(id,info)=>{
    await updateDoc(doc(db,"productos",id),info)
}

export const deleteProducto=async(id)=>{
    await deleteDoc(doc(db, "productos", id))
}

// CREATE AND READ  ORDEN DE COMPRA
export const createOrdenCompra= async (cliente,productos,precioTotal,fecha) => {
    const ordenCompra=await addDoc(collection(db,"ordenesCompra"),{
        datosCliente: cliente,
        productos: productos,
        precioTotal:precioTotal,
        fecha:fecha

    })
    return ordenCompra
}

export const getOrdenCompra=async(id)=>{
    const oC=await getDoc(doc(db, 'ordenesCompra', id));
    const ordenCompra={
        ...oC.data(),
        id:oC.id
    }

    return ordenCompra
}