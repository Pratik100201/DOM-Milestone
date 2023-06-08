let check = document.getElementById("sub");
check.addEventListener("click",()=>{
    let type = document.getElementById("type").value;
    let days = document.getElementById("days").value;
    dasy = parseFloat(days)
    type = type.toLowerCase()
    let Result ;
    switch (type) {
        case "economy":
        Result = 4000*days
        alert("Your Rental for "+type +" type car for "+days+" days would be : "+Result+" Rs")
            break;
        case "midsize":
        Result = 10000*days
        alert("Your Rental for "+type +" type car for "+days+" days would be : "+Result+" Rs")
            break;
        case "luxury":
        Result = 20000*days
        alert("Your Rental for "+type +" type car for "+days+" days would be : "+Result+" Rs")
            break;
    
        default: 
        alert("Please Enter Valid Inputs")
            break;
    }
})