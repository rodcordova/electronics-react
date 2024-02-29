import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import { toast } from 'react-toastify';
export default function Checkout() {
    const datosForm=useRef() 
    let navigate=useNavigate()

    const consultarForm=(e)=>{
        e.preventDefault()// para que no se recargue la pagina(no renderizar y pierda datos)
        console.log(datosForm.current)// HTML

        const data =new FormData(datosForm.current)
        console.log(data.get('nombre'))// me da metodos para sacar cada parametro

        const cliente=Object.fromEntries(data)// un objeto con todos sus datos
        console.log(cliente)

        e.target.reset()// resetea formulario

        toast('🦄 Muchas gracias por su compra!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });

        //toast.success('Muchas gracias por realizar u compra!!')
        navigate('/')
    }
  return (
    <div className="container contForm">
        <form  onSubmit={consultarForm} ref={datosForm}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                <input type="text" className="form-control" name="nombre" />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
            </div>

            <div className="mb-3">
                <label htmlFor="dni" className="form-label">Documento</label>
                <input type="number" className="form-control" name="dni" />
            </div>

            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                <input type="number" className="form-control" name="celular" />
            </div>

            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input type="text" className="form-control" name="direccion" />
            </div>

            <button type="submit" className="btn btn-primary">Finalizar compra</button>

        </form>
    </div>
  )
}
