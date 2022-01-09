import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config ={
    apiKey: "AIzaSyAG7ERLSVKegssaRtmjH2Q427pnY4Udppk",
    authDomain: "udemypractise-fc62d.firebaseapp.com",
    projectId: "udemypractise-fc62d",
    storageBucket: "udemypractise-fc62d.appspot.com",
    messagingSenderId: "683715324949",
    appId: "1:683715324949:web:992fef00f291c37f22f21c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;