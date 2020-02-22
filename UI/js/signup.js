export function validatePassword(form){
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value){
        if(form.pwd1.value.length < 6){
            alert("Error:Password must contain atleast 6 character!s");
            form.pwd1.focus();
            return false;}}}

