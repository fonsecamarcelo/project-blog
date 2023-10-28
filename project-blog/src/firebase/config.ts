import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjUmp9DkcbrLpsH9myibfxcZUPfPtkRFw",
    authDomain: "project-blog-9a985.firebaseapp.com",
    projectId: "project-blog-9a985",
    storageBucket: "project-blog-9a985.appspot.com",
    messagingSenderId: "16315425444",
    appId: "1:16315425444:web:174d12b28676eb8d807c31"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };