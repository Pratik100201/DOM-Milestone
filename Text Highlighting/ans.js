let check = document.getElementById("check");
let op = document.getElementById("out")
check.addEventListener("click",()=>{
    let para = document.getElementById("para").innerText
    let text = para.split(" ")
    let change = ""
    let output = ""
    for(let i = 0 ; i < text.length ; i++){
       let txt = text[i]
        if(txt.length >= 8){
            change = `<span class ="lighttext">${txt}</span>`;
        }
        else{
            change = txt
        }
       output = `${output} ${change} ` 
    }
    op.innerHTML = output
}) 