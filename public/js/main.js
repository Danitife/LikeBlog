import { firebaseConfig } from "./setup.js";
import { signUpUser } from "./functions.js";

const app = firebase.initializeApp(firebaseConfig);
document.getElementById("dan").addEventListener("click", ()=>{
    console.log(app);
});

document.getElementById("signup").addEventListener("click", signUpUser);
document.getElementById("toSignIn").addEventListener("click", ()=>{
    window.location.href = "./signup.html"
})

document.getElementById("toSignUp").addEventListener("click", ()=>{
    window.location.href = "./signin.html"
})
