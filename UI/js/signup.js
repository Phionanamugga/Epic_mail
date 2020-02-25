function validatePassword(form){
    if(form.username.value == ""){
        alert("Error: Username must be filled in!");
        form.username.focus();
        return false;
    }
  
    re = /^([a-zA-Z]{3,20})$/;
    if(!re.test(form.username.value)){
        alert("Error: Username must contain only letters with a minimum length of 3 and maximum 20!");
        form.username.focus();
        return false;
    }

    if(form.email.value == ""){
        alert("Error: email must be filled in!");
        form.email.focus();
        return false;
    }

    re = /^[A-Za-z._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,4}$/;
    if(!re.test(form.email.value)){
        alert("Incorect email format!");
        form.email.focus();
        return false;
    }

    if(form.pwd1.value == ""){
        alert("Error: password must be filled in!");
        form.pwd1.focus();
        return false;
    }

/** *
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value){
        // **include maximum length
        
        if(form.pwd1.value == form.username.value){
            alert("Error: Password must be different from Username!");
            form.pwd1.focus();
            return false;
        }
        // **combine the regex
        re = /[0-9]/;
        if(!re.test(form.pwd1.value)){
            alert("Error: password must contain at least one number!");
            form.pwd1.focus();
            return false;
        }
        re = /[a-z]/;
        if (!re.test(form.pwd1.value)){
            alert("Error: password must contain atleast one lowercase letter!");
            form.pwd1.focus();
            return false;
        }
        re = /[A-Z]/;
        if(!re.test(form.pwd1.value)){
            alert("Error: password must contain atleast one upper case later!");
        }
        }
    return true;**/
}

