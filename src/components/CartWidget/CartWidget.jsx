import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContex";

function CartWidget({handleLinkClick}) {
    const { cantidadEnElCarrito } = useContext(CartContext);

  return (
    <Link className="menu-lista text-gray-400 text-2xl" to="/carrito" onClick={handleLinkClick}>
        🛒<span>{cantidadEnElCarrito()}</span>
    </Link>
  )
}

export default CartWidget