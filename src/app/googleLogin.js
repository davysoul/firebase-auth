
import {signInWithPopup, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector('#googleLogin')
const modalSignin = document.querySelector('#modal-signin')
googleButton.addEventListener('click', async(e)=>{
    e.preventDefault();
    const provider = new GoogleAuthProvider();
   
    
    try {
        const credential = await signInWithPopup(auth,provider)
        const modal = boostrap.Modal.getInstance(modalSignin);
        modal.hide()
        showMessage('Welcome '+ credential.user.displayName,'success');
        
        
    } catch (error) {
        
    }
   
})