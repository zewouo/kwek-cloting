import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config =  {
  apiKey: "AIzaSyCdTJFfkDrRixaaT5Lb8S_K_nhhJu-sj0M",
  authDomain: "kwek-db.firebaseapp.com",
  projectId: "kwek-db",
  storageBucket: "kwek-db.appspot.com",
  messagingSenderId: "953226499508",
  appId: "1:953226499508:web:95785d192c94bfc59c0ee1",
  measurementId: "G-2T46GX19QN"
};

 firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;