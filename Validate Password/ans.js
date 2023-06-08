let check = document.getElementById("submit")
check.addEventListener("click",()=>{
    let gmail = document.getElementById("inpg").value
    let pass = document.getElementById("inpp").value
    let cont = document.getElementById("cont")
    
    let result = gmail.includes("@")
    let count = pass.length;
    if(result == false || (count<8) ){
        cont.textContent = "*Please Enter Valid Inputs!!"
        cont.style.color = "red"
    }
    else{
        cont.textContent = "Valid email and password"
        cont.style.color = "green"
    }
})