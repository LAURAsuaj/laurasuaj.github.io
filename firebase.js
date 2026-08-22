import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// CONFIGURACIÓN DE FIREBASE
// Reemplaza estos valores por los que te proporciona Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDw5_6vqYYg8XGs6iU8EKgw3Bss3klvf8w",
  authDomain: "mi-login-266ff.firebaseapp.com",
  projectId: "mi-login-266ff",
  storageBucket: "mi-login-266ff.firebasestorage.app",
  messagingSenderId: "248400596033",
  appId: "1:248400596033:web:a24e13c358b02057a1cac0",
  measurementId: "G-QET6SQ5E2L"
};


// INICIALIZAR FIREBASE

const app = initializeApp(firebaseConfig);


// AUTENTICACIÓN

const auth = getAuth(app);


// FIRESTORE

const db = getFirestore(app);


// EXPORTAR FUNCIONES

export {

    auth,
    db,

    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

    signOut,
    onAuthStateChanged,

    collection,
    addDoc,
    serverTimestamp

};


