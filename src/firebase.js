import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCT6auOjQEdZq20iuAahMFTvAX4J1BExQk",
    authDomain: "portfoolio-8ea6c.firebaseapp.com",
    databaseURL: "https://portfoolio-8ea6c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfoolio-8ea6c",
    storageBucket: "portfoolio-8ea6c.appspot.com",
    messagingSenderId: "271304716965",
    appId: "1:271304716965:web:5b7ae2a8578798314c134c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase()
export { app as firebase, db};