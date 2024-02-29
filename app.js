// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzCdmzHxsbu1jWVT_IHtvdvy58YFtogGo",
    authDomain: "authentication-app-807a4.firebaseapp.com",
    databaseURL: "https://authentication-app-807a4-default-rtdb.firebaseio.com",
    projectId: "authentication-app-807a4",
    storageBucket: "authentication-app-807a4.appspot.com",
    messagingSenderId: "104998105705",
    appId: "1:104998105705:web:7bfbb2c8f752610aa068f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);