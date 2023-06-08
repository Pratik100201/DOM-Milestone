
let ch = document.getElementById("check");
ch.addEventListener("click",()=>{
    let ina = document.getElementById("input1").value;
    let inb = document.getElementById("input2").value;
    if( ina == inb){
        alert("Password Matched . Password Validation Successful");
    }
    else{
        alert("Password didn't Matched . Password Validation Unsuccessful");
    }
});
