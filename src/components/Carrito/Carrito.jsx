import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContex";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from 'axios';


function Carrito() {
  const [preferenceId, setPreferenceId] = useState(null)
  initMercadoPago("APP_USR-8b04832b-edba-4570-9057-8e2e88f1882f",{
    locale:"es-AR",
  });

  const createPreference = async ()=>{
    try {
      console.log("Enviando carrito:", carrito);
      const response = await axios.post("http://localhost:3000/create_preference", {
        carrito: carrito
      })
      const {id}= response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id){
      setPreferenceId(id);
    }
  }


  const { carrito, precioTotal, vaciarCarrito, eliminarDelCarrito } =
  useContext(CartContext);
  
  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl mt-7 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 px-6 rounded-lg shadow-lg">
        Carrito
      </h1>
      <div className="flex gap-6 flex-wrap">
        {carrito.map((prod) => (
          <div key={prod.id} className="border-b border-gray-200 py-4 mt-4">
            <h3 className="text-2xl font-semibold">{prod.nombre}</h3>
            <img src={prod.imagen} alt={prod.nombre} />
            <p className="text-lg">Precio unitario: ${prod.precio}</p>
            <p className="text-lg">
              Precio total: ${prod.precio * prod.cantidad}
            </p>
            <p className="text-lg">Cantidad: {prod.cantidad}</p>
            <button
              className="bg-red-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-red-600 transition duration-300"
              onClick={() => eliminarDelCarrito(prod.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {carrito.length > 0 ? (
        <>
          <h2 className="text-3xl font-bold mt-8">
            Precio total: ${precioTotal()}
          </h2>
          <button
            className="bg-red-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-red-600 transition duration-300"
            onClick={handleVaciar}
          >
            Vaciar
          </button>
          <Link
            to="/checkout"
            className="bg-blue-500 text-white px-6 py-3 mt-4 ml-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Finalizar Compra
          </Link>
          <button onClick={handleBuy}>comprar</button>
          {preferenceId && <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />}
          
        </>
      ) : (
        <h2 className="text-2xl mt-8 text-center">El carrito está vacío :(</h2>
      )}
    </div>
  );
}

export default Carrito;
