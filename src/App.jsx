
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { CartProvider } from './Context/CartContex'
import Carrito from './components/Carrito/Carrito'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout'
function App() {
  


  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailConteiner/>}/>
        <Route path='/:categoria' element={<ItemListContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
