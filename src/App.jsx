import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { CartProvider } from "./Context/CartContex";
import Carrito from "./components/Carrito/Carrito";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import Crud from "./components/Crud/Crud";
import Login from "./pages/Login";
import { AuthProvider } from "./Login/AuthProvider";
import ProtectedRoute from "./Login/ProtectedRoute";
function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailConteiner />} />
            <Route path="/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/crud"
             element={
              <ProtectedRoute>
             <Crud />
             </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
