var password = document.getElementById("password"),
confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value){
        return confirm_password.setCustomValidity("Passwords do not match!");}
}