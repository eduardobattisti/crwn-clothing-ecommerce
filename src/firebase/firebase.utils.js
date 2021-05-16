import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG = {
    apiKey: "AIzaSyBYd-SXfIRxbkkH5nFwohlbpEMfbgDV3-M",
    authDomain: "crwn-db-ecommerce.firebaseapp.com",
    projectId: "crwn-db-ecommerce",
    storageBucket: "crwn-db-ecommerce.appspot.com",
    messagingSenderId: "715874243382",
    appId: "1:715874243382:web:d29d21b54f53141b2f9997",
    measurementId: "G-F2FGYQPZKT"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData 
            })
        } catch (err) {
            console.log('error creating user', err.message);
        };
    };

    return userRef;

};

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;