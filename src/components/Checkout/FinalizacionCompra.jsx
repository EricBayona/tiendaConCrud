function FinalizacionCompra({pedidoId, data}) {
        
    return (
      <div className="container mx-auto p-6 mt-12 mb-100 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold mb-4 text-center text-green-600">
      Gracias {data.nombre} por tu Compra
    </h1>
    <p className="text-2xl text-center mb-8">
      Numero de pedido: <span className="font-semibold">{pedidoId}</span>
    </p>
    <div className="text-center">
      <p className="text-lg">
        ¡Tu compra ha sido procesada con éxito! Pronto recibirás un correo con los detalles de tu pedido.
      </p>
      <p className="mt-4">
        Si tienes alguna pregunta, no dudes en <a href="/contacto" className="text-blue-500 underline">contactarnos</a>.
      </p>
    </div>
  </div>
  
    )
  }
  
  export default FinalizacionCompra