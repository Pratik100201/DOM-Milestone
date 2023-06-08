
let cal = document.getElementById("check");
cal.addEventListener("click", ()=>{
    let firstNumber = document.getElementById("input1").value;
    let secondNumber = document.getElementById("input2").value;
    let operator = document.getElementById("op").value;
    
    let result ;
        switch (operator) {
            case "+"  : 
                result =  Number(firstNumber)  + Number(secondNumber) ;
                alert( firstNumber + "+" + secondNumber + "=" + result)

                break;
            case "-"  : 
                result =  Number(firstNumber)  - Number(secondNumber) ;
                alert( firstNumber + "-" + secondNumber + "=" + result)
  
                break;
            
            case "/"  : 
                result =  Number(firstNumber)  / Number(secondNumber) ;
                alert( firstNumber + "/" + secondNumber + "=" + result)
    
                break;
            case "%"  : 
                result =  Number(firstNumber)  % Number(secondNumber) ;
                alert( firstNumber + "&" + secondNumber + "=" + result)
  
                  break;
            default:
                alert("Enter A Valid Operator")
                break;
        }

})