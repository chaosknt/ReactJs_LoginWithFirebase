import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/*const firebaseConfig = {
    apiKey: "AIzaSyDFXW2W2SNV0lmj8HJogeu267hdD2HR5WE",
    authDomain: "react-app-cursos.firebaseapp.com",
    databaseURL: "https://react-app-cursos.firebaseio.com",
    projectId: "react-app-cursos",
    storageBucket: "react-app-cursos.appspot.com",
    messagingSenderId: "959679322615",
    appId: "1:959679322615:web:89d8e604eee1b5fd68f6f2"
};*/

const firebaseConfig = {
    apiKey: "AIzaSyBJcrS2Gccwzm6YSbtprRUVywu8ZfrbQxg",
    authDomain: "cool-citadel-272000.firebaseapp.com",
    projectId: "cool-citadel-272000",
    storageBucket: "cool-citadel-272000.appspot.com",
    messagingSenderId: "107117953803",
    appId: "1:107117953803:web:1833f9637937266878980e"
  };
  
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}