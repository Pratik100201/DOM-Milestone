let check = document.getElementById("check");
check.addEventListener("click",()=>{
    let inp = document.getElementById("inp").value
    let vowel = [ "a" , "e" , "i" , "o" , "u"]
    let count = 0 ;
    for ( let letter of inp.toLowerCase()){
        if(vowel.includes(letter)){
            count ++
        }
    }
    alert(count)
})