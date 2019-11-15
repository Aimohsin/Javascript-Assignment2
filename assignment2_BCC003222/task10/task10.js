var savePass = "aiman";
var input = prompt("Write Password");

if(input == ""){
    document.write("Please enter your password")
}
else if(input == savePass){
    document.write("Correct! The password you entered matches the original passord")
}
else{
    document.write("Incorrect Password")
}
