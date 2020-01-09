import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAbP3p82uHLWL5yN0fo-pyPj1wPFbWWNBU",
    authDomain: "cloth-shop-crwn.firebaseapp.com",
    databaseURL: "https://cloth-shop-crwn.firebaseio.com",
    projectId: "cloth-shop-crwn",
    storageBucket: "cloth-shop-crwn.appspot.com",
    messagingSenderId: "177067733331",
    appId: "1:177067733331:web:99de8eb2b2b149ad3eb1a6",
    measurementId: "G-8LQXDP8KHY"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
