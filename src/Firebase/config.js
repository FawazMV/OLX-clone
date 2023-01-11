import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0gbrRj_O8fXowFdbGgNNUh0lIYtK1lI",
  authDomain: "olx-clone-b0e65.firebaseapp.com",
  projectId: "olx-clone-b0e65",
  storageBucket: "olx-clone-b0e65.appspot.com",
  messagingSenderId: "1001124580133",
  appId: "1:1001124580133:web:5d0077fa0dedbd882de8cc",
  measurementId: "G-J19Y4MZPLS"
};

  export default firebase.initializeApp(firebaseConfig)


