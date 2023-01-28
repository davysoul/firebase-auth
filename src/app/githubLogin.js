
import { signInWithPopup, GithubAuthProvider } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const githubButton = document.querySelector('#githubLogin')
const modalSignin = document.querySelector('#modal-signin')
githubButton.addEventListener('click', async(e)=>{
    e.preventDefault();
    const provider = new GithubAuthProvider();
   
    
    try {
        const credential = await signInWithPopup(auth,provider)
                
         const modal = boostrap.Modal.getInstance(modalSignin);
         modal.hide()
         showMessage('Welcome '+ credential.user.displayName,'success');
    } catch (error) {
        
    }
   
})