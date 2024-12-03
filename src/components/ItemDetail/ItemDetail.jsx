import { useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContex";

function ItemDetail({ item }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: "Descripción del Producto", content: item.descripcion },
    {
      title: "Medios de Pago",
      content: <div>
        <p>Mercado Pago</p>
        <span>Paga con tu cuenta de Mercado Pago. Tarjeta de crédito, tarjeta de débito, mercado crédito, efectivo en puntos de pago o dinero disponible en mercado pago. Saber mas.</span>
        <p>Plataforma de pagos Mobbex</p>
        <span>Paga con débito o crédito en 1, 3 o 6 cuotas (Tarjetas bancarias y Naranja en 1 pago) Con la mejor financiación disponible. Al finalizar tu compra se te pedirá que valides tu identidad (foto DNI, selfie de prueba de vida y foto de tarjeta). Una vez verificado lo datos, el pago quedará aprobado.</span>
        <p>En nuestro local</p>
        <span>Paga en efectivo, transferencia, depósito, dólares o con tarjetas de manera presencial. Podes conocer nuestra sucursal en el enlace de contacto.</span>
        <p>Contrareembolso</p>
        <p>A acordar con el venderdor</p>
        <p>Impuestos</p>
        <span>Si, el precio mostrado de los productos es a consumidor final e incluye IVA.</span>
        <p>Factura A</p>
        <span>Para solicitar Factura A escribí el número de CUIT en el campo de observaciones al momento del check out, precedido de la leyenda “Necesito factura A”</span>
      </div> ,
    },
    {
      title: "Envío",
      content: <div>
        <p>Envíos a todo el país</p>
        <span>Realizamos envíos a todo el país (excepto Tierra del Fuego) a través de Andreani, Correo Argentino, Vía Cargo y Bus Pack dependiendo de tu ubicación, de lo que hayas elegido y el proveedor que sea más conveniente.</span>
      </div> ,
    },
    // Agrega más secciones según sea necesario
  ];
  const {carrito , agregarAlCarrito}= useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="detalle-producto">
      <img src={item.imagen} alt={item.nombre} />
      <div className="detalle-contenido"> 
        <div>
          <h2 className="text-5xl">{item.nombre}</h2>
          <p className="mt-5 text-3xl">Categoria: {item.categoria}</p>
          <p className=" mt-5 text-2xl">Precio: ${item.precio}</p>
        </div>
        <div className="mt-5 accordion space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="accordion-item border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                className="w-full text-left py-3 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition text-2xl"
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
              </button>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "block" : "hidden"
                } p-4`}
              >
                <div className="text-left">{section.content}</div>
              </div>
            </div>
          ))}
        </div>
        <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar} 
            handleRestar={handleRestar} 
            handleAgregar={()=>{agregarAlCarrito(item,cantidad)}}/>
      </div>
    </div>
  );
}

export default ItemDetail;
