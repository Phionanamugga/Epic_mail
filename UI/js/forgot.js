function validateEmail(form){
    if(form.email.value == ""){
        alert("Error: Email must be filled in!");
        form.email.focus();
        return false;
    }
    else{
        alert("check email for password reset link!");
        form.email.focus();
        return true;
    }
}