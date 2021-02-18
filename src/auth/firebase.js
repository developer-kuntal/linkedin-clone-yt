import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCy9MyDWU8HmYf3dzNcbaHUF6sXXZa-5O4",
    authDomain: "linkedin-clone-yt-5222a.firebaseapp.com",
    projectId: "linkedin-clone-yt-5222a",
    storageBucket: "linkedin-clone-yt-5222a.appspot.com",
    messagingSenderId: "685237020468",
    appId: "1:685237020468:web:e382d6fadba4ab813f6761"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };