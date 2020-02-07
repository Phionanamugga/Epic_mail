function formValidation()
{
var uname = document.registration.username;
var passid = document.registration.password;



if(passid_validation(passid,7,12));
if(allLetter(uname));
return false;
}