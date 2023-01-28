
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
  import {getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
  import {getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVbqumMvK6_Ij_VTxBtgE1dPFnV2IuDMA",
    authDomain: "fir-auth-project-e7a5f.firebaseapp.com",
    projectId: "fir-auth-project-e7a5f",
    storageBucket: "fir-auth-project-e7a5f.appspot.com",
    messagingSenderId: "1097811388054",
    appId: "1:1097811388054:web:99a093921e18a39dba04b7",
    
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  // constante qui va nous permettre de s'autentifier
  export const auth= getAuth(app);
  export const db = getFirestore(app);
