let check = document.getElementById("sub");
let lista = []
check.addEventListener("click",()=>{
    let inp = document.getElementById("inp").value;
    if(inp==""){
        alert("Please Enter A Valid Input")
    }
    else{
        inp = parseFloat(inp)

        lista.push(inp)
        alert("You Have Entered = "+lista)
    }
    
});
let set = document.getElementById("ch");
set.addEventListener("click",()=>{
    let listb = []
    for(let i = 0 ; i < lista.length ; i++){
        if(lista[i]%3==0){
            if(lista[i]%2==0)
            {continue;}
            listb.push(lista[i])
            alert("Numbers that are divisible by 3 not 2 are : "+listb)
        }
        }
     
})

   