import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../fireBase/config";


function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] =useState("Productos")
    const {categoria}=useParams();    

    useEffect(() => {
        const productosRef = collection(db , "productos");

        const q = categoria ? query(productosRef, where ("categoria", "==", categoria)): productosRef;
        setTitulo(categoria ? (categoria) : ("Todos los productos"))
        getDocs(q)
          .then((resp)=>{
            setProductos(
              resp.docs.map((doc)=>{
                return {...doc.data(), id: doc.id}
              })
            )
          })
    
    }, [categoria])
    
  return (
    <ItemList productos={productos} titulo={titulo} />
  )
}

export default ItemListContainer