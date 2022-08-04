var confirmation=1;
var inputValue = document.getElementById("password");
var inputValue2 = document.getElementById("confirmPassword");
var tryAgainLabel= document.getElementById("tryAgain");
function changeColor(confirmation){

    if (confirmation==0)
    {
        inputValue2.style.borderColor= "red";
        inputValue2.style.borderWidth= "1.5px";
        inputValue2.style.boxShadow="4px 8px 5px lightgray";
        inputValue.style.border= null;
        tryAgainLabel.style.visibility= "visible";
    }
    else
    {
        inputValue.style.border= null;
        inputValue2.style.boxShadow= null;
        inputValue.style.borderColor= "green";
        inputValue.style.borderWidth= "1.5px";
        inputValue2.style.borderColor= "green";
        inputValue2.style.borderWidth= "1.5px";
        tryAgainLabel.style.visibility= "hidden";
    }
}
function myFunction(){
    console.log(inputValue.value+inputValue2.value);
    if (inputValue.value==inputValue2.value){
        console.log("yes");
        confirmation=1;
        changeColor(confirmation);
    }else{
        console.log("no");
        confirmation=0;
        changeColor(confirmation);
    }
}