import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyD5wN2nIKlPXDopw6QA91t8DdXePkx7SeY",
    authDomain: "crwn-db-a56db.firebaseapp.com",
    projectId: "crwn-db-a56db",
    storageBucket: "crwn-db-a56db.appspot.com",
    messagingSenderId: "184936778304",
    appId: "1:184936778304:web:1a774e1de9a3bc8d87eda5",
    measurementId: "G-4PJPE97MZM"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;