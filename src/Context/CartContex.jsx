import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext();
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const eliminarDelCarrito =(id) =>{
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevoCarrito)
    
    }

    const cantidadEnElCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }
    const MySwal = withReactContent(Swal);
    const vaciarCarrito = () => {
        MySwal.fire({ title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!', 
            icon: 'warning', showCancelButton: true, 
            confirmButtonColor: '#3085d6', 
            cancelButtonColor: '#d33', 
            confirmButtonText: '¡Sí, vaciar!', 
            cancelButtonText: 'Cancelar' })
            .then((result) => { if (result.isConfirmed) {
                setCarrito([]);
                Swal.fire({ 
                    title: '¡Vaciado!', 
                    text: 'Tu carrito esta vacio.', 
                    icon: 'success'
                 }); 
                } 
            });  
    }
    const limpiarCarrito = ()=>{
        setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    

    return (
        <CartContext.Provider value={ {
            carrito,
            agregarAlCarrito,
            cantidadEnElCarrito,
            precioTotal,
            vaciarCarrito,
            eliminarDelCarrito,
            limpiarCarrito
        } }>
            {children}
        </CartContext.Provider>
    )
}