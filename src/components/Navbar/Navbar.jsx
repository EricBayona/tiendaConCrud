import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar flex justify-between items-center bg-black p-6">
      <Link className="logo text-4xl text-gray-400" to="/">
        Bayona BikeStore
      </Link>
      <button
        className="block xl:hidden text-gray-400 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      <ul
        className={`menu flex-col items-center xl:flex-row gap-4 lg:pr-4 ${
          isOpen
            ? "fixed inset-0 bg-black bg-opacity-90 flex justify-center"
            : "hidden"
        } xl:flex`}
      >
        <li className="p-4 menu-lista xl:hidden text-gray-400 text-3xl absolute top-4 right-8">
          <button onClick={handleLinkClick}>
            X
          </button>   
        </li>
        <li className="p-4">
          <Link
            className="menu-lista text-gray-400 text-2xl"
            to="/"
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            className="menu-lista text-gray-400 text-2xl"
            to="/ruta"
            onClick={handleLinkClick}
          >
            Ruta
          </Link>
        </li>
        <li className="p-4">
          <Link
            className="menu-lista text-gray-400 text-2xl"
            to="/mtb"
            onClick={handleLinkClick}
          >
            Mtb
          </Link>
        </li>
        <li className="p-4">
          <Link
            className="menu-lista text-gray-400 text-2xl"
            to="/repuestos"
            onClick={handleLinkClick}
          >
            Repuestos
          </Link>
        </li>
        <li className="p-4">
          <Link
            className="menu-lista text-gray-400 text-2xl"
            to="/nosotros"
            onClick={handleLinkClick}
          >
            Nosotros
          </Link>
        </li>
        <li className="p-4">
          <Link
            className="menu-lista text-gray-400 text-2xl"
            to="/contacto"
            onClick={handleLinkClick}
          >
            Contacto
          </Link>
        </li>
        <li>
          <CartWidget handleLinkClick={handleLinkClick}/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
