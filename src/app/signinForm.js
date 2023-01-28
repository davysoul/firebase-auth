import {auth} from './firebase.js';
import {signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import { showMessage } from './showMessage.js';

//on recupere le formaulaire de signin
const signinForm = document.querySelector('#login-form');
// On recupere le modal de sign in
const modalSignin = document.querySelector('#modal-signin')
signinForm.addEventListener('submit', async e=>{
    e.preventDefault();
    
    const email = signinForm['email-login'].value
    const password = signinForm['password-login'].value
     try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        
       const modal= bootstrap.Modal.getInstance(modalSignin);
       modal.hide();
       showMessage("Hello "+userCredential.user.email,'success');
     } catch (error) {
        if(error.code === 'auth/user-not-found'){
         showMessage('User not found')
        }else{
           showMessage('Something went wrong');
        }
        
     }

})