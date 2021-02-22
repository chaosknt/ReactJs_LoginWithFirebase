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

1.- Crear proyecto en Firebase
    a.- https://console.firebase.google.com/u/0/
    b.- Agregar proyecto --> Crear el proyecto
2.- Configurar Proyecto
    a.- Dentro del proyecto en el menu lateral ir a authentication
    b.- Dentro de authentication ir a la pestaña de Sign-in method y habilitar correo electronico y Google
3.- Copiar SDK
    a.- ir a configuracion (arriba a la izquierda, ruedita al lado de descripcion general) --> configuracion del proyecto
    b.- Ir abajo de todo y seleccionar app web ( </> )
    c.- Seguir los pasos para registrar la APP, al terminar se nos va crear el SDK para importar al proyecto

Proyecto:

Ir al Path firebase/firebase-config.js

Copiar SDK del proyecto

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


The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
