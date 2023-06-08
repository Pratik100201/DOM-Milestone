let check = document.getElementById("sub");
check.addEventListener("click",()=>{
    let temp = document.getElementById("inp").value;
    temp = parseFloat(temp);
    let name = document.getElementById("dis");
    function CtoF(){
        let far = (9/5*temp)+32
        name.textContent = temp+ " C into Fahrenheit will be : " +far +" F"
    }
    CtoF(temp)
})