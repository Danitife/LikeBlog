let username = document.getElementById("username")
let email = document.getElementById("email")
let pass = document.getElementById("password")
function signUpUser(){
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        user.updateProfile({
            displayName: username.value,
          }).then(() => {
            alert("Signup Successful");
            window.location.href = "./signin.html"
          }).catch((error) => {
            console.log(error);
          });  
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}

export {signUpUser}