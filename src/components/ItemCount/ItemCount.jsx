import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ItemCount({cantidad, handleAgregar, handleRestar, handleSumar}) {
    
const notify =()=> toast.success(<div><Link to="/carrito">Se agrego al Carrito</Link></div>)
    return (
      <div>
          <div className="item-count flex items-center">
              <button className="bg-red-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-red-600 transition duration-300"
               onClick={handleRestar}>-</button>
              <p className="text-black font-extrabold px-6">{cantidad}</p>
              <button className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-blue-600 transition duration-300"
               onClick={handleSumar}>+</button>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-3 hover:bg-blue-600  transition duration-300"
          onClick={()=>{handleAgregar(); notify()}}>Agregar al Carrito</button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition: Bounce/>
      </div>
    )
  }
  
  export default ItemCount