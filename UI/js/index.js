function formValidation(){
    var x = document.forms.login.username.value;
    if (x == ""){
        alert("Username must be filled in!!");
        return false;
    }
    if (x != "A-Za-z"){
        alert("Username should be in letters!");
        return false;
    }
}

function formValidation(){
    var y = document.forms.login.password.value;
    if (y == ""){
        alert("password must be filled in!!");
        return false;
    }
}

