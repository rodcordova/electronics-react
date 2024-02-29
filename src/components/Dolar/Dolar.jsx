
import { useState,useEffect } from 'react'
export default function Dolar() {
    const [dolar,setDolar]=useState([])

    useEffect(()=>{
        fetch('https://criptoya.com/api/dolar')
        .then(response=> response.json())// nose cuando llegue de la api
        .then(( {oficial,ahorro,blue} )=>{//nose cuanto tiempo tarde en convertir a json
            const plantillaDolar=
            <>
            <p>Dolar oficial: ${oficial.price}</p>
            <p>Dolar ahorro: ${ahorro.price}</p>
            <p>Dolar blue:${blue.price}</p>
            </>
            setDolar(plantillaDolar)
            console.log(dolar)
        })
        
    },[])
    // [] solo cuando se renderiza una unica vez
    return (
        <>
            {dolar}
        </>
    )
}
