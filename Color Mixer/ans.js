let submit = document.getElementById("check");
submit.addEventListener("click", ()=>{
    let fc1 = document.getElementById("input1");
    let fc2 = document.getElementById("input2");
    let op = document.getElementById("res")
  
    let fcolor1 = fc1.value.toLowerCase();
    let fcolor2 = fc2.value.toLowerCase();
    let Result ;
    switch (fcolor1) {
        case "red":
            switch (fcolor2){
                case "blue":
                Result = "Purple";
                break;
                case "yellow":
                Result = "Orange"
                break;
                default :
                Result = "Invalid Color Combination"
            } 
                                 
            break;
        case "blue":
            switch (fcolor2){
                case "red" :
                    Result = "Purple";
                    break ;
                case "yellow":
                    Result = "Green" ;
                    break;
            default :
                Result = "Invalid Color Combination"
            }
            break;
        case "yellow":
                switch (fcolor2){
                    case "red" :
                        Result = "Orange";
                        break;
                    case "blue":
                        Result = "Green" ;
                        break;
                default :
                    Result = "Invalid Color Combination" ;
                }
                break;
    
        default:
            Result = "Invalid" ;
            break;
    }
    op.textContent = Result ;
    
});