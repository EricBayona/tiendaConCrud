import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContex";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../fireBase/config";

function Checkout() {

    const [pedidoId, setPedidoId]=useState("")
    const { carrito, precioTotal, limpiarCarrito} = useContext(CartContext);

    const { register, handleSubmit, reset } = useForm();

  const comprar = (data) => {
    const pedido ={
        cliente: data,
        productos : carrito,
        total: precioTotal()
    }
    console.log(pedido);
    reset()
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
    .then((doc)=>{
        setPedidoId(doc.id);
        limpiarCarrito();
    })
  }

  if (pedidoId){7
    return (
        <div>
            <h1>Muchas Gracias Por su compra</h1>
            <p>Tu numero de pedido es: {pedidoId}</p>
        </div>
    )
  }

  return (
    <div className="container mx-auto p-6 mt-12 mb-100 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center">Finalizar Compra</h1>
      <form className="space-y-6" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Comprar
        </button>
      </form>
    </div>
  )
}

export default Checkout