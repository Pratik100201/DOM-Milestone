let check = document.getElementById("sub");
check.addEventListener("click",()=>{
    let input = parseFloat(document.getElementById("inp").value);
    for( var i = 0 ; i <= input ; i++){
        for (var j = input -1 ; j >= i ; j--){
            document.write("*");
        }
        document.write('<br>')
    }
})