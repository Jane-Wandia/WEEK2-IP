const printBox=document.getElementById(print);
printBox.innerHTML="Akan name generator";


var submit=document.getElementById("submit");

submit.addEventListener("click",()=>{
    var userMonth=document.getElementById("enterMonth").value;
    var userDay=document.getElementById("enterDay").value;
    var userName=document.getElementById("enterName").value;

    var yearBirth=userDay/userMonth/userName;
    console.log(yearBirth);


    var userOutput=document.getElementById("userOutput");
    userOutput.innerText= "Your name is" + " " + userName;



    




