import "./ItemList.css"
import Item from "../Item/Item"



function ItemList({productos, titulo}) {
    
  return (
    <div className="contenedor">
        <h1 className="text-5xl mt-7 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 px-6 rounded-lg shadow-lg">{titulo}</h1>
        <div className="productos">
            {productos.map((prod)=> <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList