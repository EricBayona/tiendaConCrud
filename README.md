BayonaBikeStore
Bienvenido a BayonaBikeStore, tu tienda en línea de confianza para todo lo relacionado con bicicletas. Este proyecto es una tienda de e-commerce desarrollada en React que ofrece una amplia gama de productos para ciclistas, desde bicicletas de montaña hasta repuestos y accesorios.

Índice
Características

Instalación

Uso

Dependencias

Contribución

Licencia

Características
Interfaz de Usuario Intuitiva: Navegación sencilla y clara para encontrar y comprar productos fácilmente.

Gestión del Carrito de Compras: Agrega, elimina y modifica productos en el carrito de compras.

Sistema de Pago Integrado: Soporte para múltiples métodos de pago.

Panel de Administrador: Para la gestión de productos y pedidos.

Notificaciones: Implementación de notificaciones en tiempo real usando react-toastify.

Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

Clona el repositorio:

sh
git clone https://github.com/EricBayona/BayonaBikeStore.git
Navega al directorio del proyecto:

sh
cd BayonaBikeStore
Instala las dependencias:

sh
npm install
Configura Firebase:

Crea un archivo firebaseConfig.js en el directorio src y añade tu configuración de Firebase:

javascript
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
Inicia la aplicación:

sh
npm start
Uso
Después de seguir los pasos de instalación, puedes abrir la aplicación en tu navegador en http://localhost:3000. Desde ahí, podrás:

Navegar por las distintas categorías de productos.

Añadir productos al carrito.

Finalizar la compra mediante el checkout.

Acceder al panel de administrador para gestionar productos y pedidos.

Dependencias
React

Firebase

react-router-dom

react-toastify

Tailwind CSS

Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del proyecto.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').

Envía tus cambios (git push origin feature/nueva-funcionalidad).

Abre un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
