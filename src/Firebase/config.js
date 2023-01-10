import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQSRJi-xSuo1LjcZmVRtRidm6zEmDPAB8",
    authDomain: "olx-clone-ed465.firebaseapp.com",
    projectId: "olx-clone-ed465",
    storageBucket: "olx-clone-ed465.appspot.com",
    messagingSenderId: "959539370335",
    appId: "1:959539370335:web:01c4b0dbb7fd365fab3eea",
    measurementId: "G-XC1ZKS5L4D"
};

export default firebase.initializeApp(firebaseConfig)