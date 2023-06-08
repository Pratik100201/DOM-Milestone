let check = document.getElementById("sub");
check.addEventListener("click",()=>{
    let txt = document.getElementById("inp");
    let arr = ["The Most Affordale Learning Platform","PW Skills"]
    let aa = Math.floor(Math.random()*2)
    let bb = []
    bb.push(aa)
    
    txt.textContent = arr[aa]

})