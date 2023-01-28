import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
import {collection, getDocs} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"
import './app/signupForm.js';
import { auth,db } from "./app/firebase.js";
import {loginCheck} from "./app/loginCheck.js"
import './app/signinForm.js';
import './app/googleLogin.js'
import './app/githubLogin.js'
import { setupPosts } from "./app/postList.js";
import './app/logout.js'

onAuthStateChanged(auth, async(user) => {
    if (user) {
      const querySnapshot =  await getDocs(collection(db,'posts'));
       loginCheck(user)
       setupPosts(querySnapshot.docs)
       console.log(querySnapshot)
    } else {
        loginCheck(user)
        setupPosts([])
    }
  })
