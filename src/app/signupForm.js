import {auth} from './firebase.js';
import {createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import { showMessage } from './showMessage.js';
const signupForm = document.querySelector('#signup-form');
 signupForm.addEventListener('submit', async e=>{
    e.preventDefault();
    const signupModal = document.querySelector('#modal-signup');
    const email = signupForm['email'].value;
    const password = signupForm['password'].value
    
    console.log(email,password);
   try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password)
    console.log(userCredential)
    //close Modal SingupModal
    
    bootstrap.Modal.getInstance(signupModal).hide();
    showMessage('Welcome'+ userCredential.user.email,'success');
    
   }
    catch (error) {
        if(error.code === 'auth/email-already-in-use'){
       
        showMessage('Email already in use');
        
     }
     else if(error.code === 'auth/invalid-email'){
        showMessage('Invalid email');
          
     }else if(error.code === 'auth/weak-password','fail'){
       showMessage('Password is weak');
       
     }else if(error.code){
        showMessage('Sommething went wrong');
        
     }
     
     
   }
})