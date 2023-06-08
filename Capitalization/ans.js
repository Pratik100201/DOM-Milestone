let check = document.getElementById("check");
check.addEventListener("click",()=>{
    let inp = document.getElementById("inp").value
    let strb = inp.toLowerCase()
    function capital(){
        let output1 = inp[0];
        let output2 = inp.slice(1);
        output1 = output1.toUpperCase();
        let modified = output1+output2;
        modified = "Name Entered ="+ modified
        return modified
    
    }
    let finalOutput = inp=== strb ? capital() : "Name Entered = "+inp 
    console.log(finalOutput)
    alert(finalOutput)
    
})