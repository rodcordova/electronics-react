import './App.css';

// dom
import { BrowserRouter ,Routes, Route } from "react-router-dom";

import {Navbar} from "./Navbar/Navbar"
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/carritoContext';

// firebaase
import { getProductos } from '../utils/firebase';
export  const App=()=> {
  //cargarBDD() // se ejecuta solo una vez
  getProductos()
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <CarritoProvider>

            <Navbar nombre={100}/> 

            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>

            <ToastContainer position="bottom-right"/>

          </CarritoProvider>
        </DarkModeProvider>
      </BrowserRouter>
      
    </>
        
  );
}


//export default App;
