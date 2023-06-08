let check = document.getElementById("sub");
check.addEventListener("click",()=>{
    let cost = parseFloat(document.getElementById("cost").value);

    let people = parseFloat(document.getElementById("inp").value);
    
    let out = document.getElementById("out");
    

    
    
    let Result = cost / people ;
    
    out.textContent = Result
    
    
    
})