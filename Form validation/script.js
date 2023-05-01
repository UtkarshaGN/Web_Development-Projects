var text = document.getElementById("username");
var pass = document.getElementById("password");
var flag = 1;

function validateform(){
//Give the error msg
if(username.value == ""){
    document.getElementById("usererror").innerHTML ="username is empty";
   flag = 0;
}
else if(username.value.length < 3){
    document.getElementById("usererror").innerHTML ="username is required mini 3 char";
   flag = 0;

//empty sentence of error
}else{
    document.getElementById("usererror").innerHTML ="";
    flag = 1;
}


if(password.value == ""){
    document.getElementById("passerror").innerHTML= "password is empty";
    flag = 0;
}else{
    document.getElementById("passerror").innerHTML ="";
    flag = 1;
}

//for form submit
if(flag){
    return true;
}else{
    return false;
}
}
