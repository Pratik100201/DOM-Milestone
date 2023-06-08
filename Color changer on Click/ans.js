let submit = document.getElementById("check");
let color = [ "red" , "blue" , "green" , "yellow" , "orange" , "white" , "black" , "pink"]
submit.addEventListener("click",()=>{
    
    let num =Math.floor(Math.random ()* 8+1)
    let op = color[num]
    
    document.body.style.backgroundColor = op ;


})