# About

<ul>
  <li>Formulario de login y registro usando Firebase. </li>
  <li>Rutas publicas y privadas. </li>
 </ul>


# Getting Started

Librerias necesarias para el proyecto:

### `npm install node-sass`
### `npm install react-redux`
### `npm install --save redux-thunk`
### `npm i validator`
### `npm install sweetalert2`
### `npm install --save firebase`

# Configuration

Firestore:

1.- Crear proyecto en Firebase<br><br>
    a.- https://console.firebase.google.com/u/0/<br>
    b.- Agregar proyecto --> Crear el proyecto<br><br>
2.- Configurar Proyecto<br><br>
    a.- Dentro del proyecto en el menu lateral ir a authentication<br>
    b.- Dentro de authentication ir a la pestaña de Sign-in method y habilitar correo electronico y Google<br><br>
3.- Copiar SDK<br><br>
    a.- ir a configuracion (arriba a la izquierda, ruedita al lado de descripcion general) --> configuracion del proyecto<br>
    b.- Ir abajo de todo y seleccionar app web ( </> ) <br>
    c.- Seguir los pasos para registrar la APP, al terminar se nos va crear el SDK para importar al proyecto<br>

Proyecto:

En el proyecto irr al Path firebase/firebase-config.js
<br>
Copiar SDK del proyecto<br>
Ejemplo:

```
   const firebaseConfig = {
    apiKey: "AIzaSyBJcrS2Gccwzm6YSbtprRUVywu8ZfrbQxg",
    authDomain: "cool-citadel-272000.firebaseapp.com",
    projectId: "cool-citadel-272000",
    storageBucket: "cool-citadel-272000.appspot.com",
    messagingSenderId: "107117953803",
    appId: "1:107117953803:web:1833f9637937266878980e"
  };
```


