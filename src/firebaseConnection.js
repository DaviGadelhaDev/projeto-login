import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBS00xjYz6hajMLAklsSXPryxHU1Dfv0as",
    authDomain: "curso-6be52.firebaseapp.com",
    projectId: "curso-6be52",
    storageBucket: "curso-6be52.appspot.com",
    messagingSenderId: "651412616022",
    appId: "1:651412616022:web:b1ae7de92e80a96f685cf7",
    measurementId: "G-30JM3TZMEC"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth}