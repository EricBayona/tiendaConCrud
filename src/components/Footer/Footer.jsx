import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4  bottom-0 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Bayona BikeStore</h2>
            <p>&copy; 2024 Bayona BikeStore. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-8">
            <Link to="/" className="hover:underline mb-2 md:mb-0">Inicio</Link>
            <Link to="/ruta" className="hover:underline mb-2 md:mb-0">Ruta</Link>
            <Link to="/mtb" className="hover:underline mb-2 md:mb-0">MTB</Link>
            <Link to="/repuestos" className="hover:underline mb-2 md:mb-0">Repuestos</Link>
            <Link to="/nosotros" className="hover:underline mb-2 md:mb-0">Nosotros</Link>
            <Link to="/contacto" className="hover:underline">Contacto</Link>
            <Link to="/crud" className="hover:underline">Crud</Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
