import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC12avEoA4V_4Y55AmytUo7v_A9XMQeygE",
    authDomain: "crwn-db-f023e.firebaseapp.com",
    projectId: "crwn-db-f023e",
    storageBucket: "crwn-db-f023e.appspot.com",
    messagingSenderId: "347316266373",
    appId: "1:347316266373:web:bf8a7e58a1e061b3cd90ec",
    measurementId: "G-H9VM7SFEXN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        }
        catch (error) {
            console.log("error creating user :", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;