import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Cargando from "../Cargando/Cargando";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fireBase/config";

function ItemDetailConteiner() {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp)=>{
                setItem(
                {...resp.data(), id: resp.id}
                )
            })
    }, [id]);

    return (
        <div className="contenedor">
            {item ? <ItemDetail item={item} /> : <Cargando/>}
        </div>
    );
}

export default ItemDetailConteiner;
