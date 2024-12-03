import "./Item.css"
import { Link } from "react-router-dom"

function Item({producto}) {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.nombre} />
        <div>
            <h4>{producto.nombre}</h4>
            <p>${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>

    </div>
  )
}

export default Item