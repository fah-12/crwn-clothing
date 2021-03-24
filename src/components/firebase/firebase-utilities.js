import firebase from 'firebase/app'
import 'firebase/firestore' // database
import 'firebase/auth'  // authentication



const config={
    apiKey: "AIzaSyCAw7HoEzXSmKNTcMkDVPtMKM-EWCL_wXU",
    authDomain: "crwn-db-546f5.firebaseapp.com",
    projectId: "crwn-db-546f5",
    storageBucket: "crwn-db-546f5.appspot.com",
    messagingSenderId: "1043273086686",
    appId: "1:1043273086686:web:7f19089ed99f03a4d9344f",
    measurementId: "G-FVSS6SK5WT"
  };


firebase.initializeApp(config);


export const auth=firebase.auth();  // by importing after this we can use it 
export const firestore=firebase.firestore();

// Google Authentications 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});


export const SignInGoogle=()=>firebase.auth().signInWithPopup(provider);


export default firebase;