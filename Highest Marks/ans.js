let op = document.getElementById("submit");
op.addEventListener("click",()=>{
    let m1 = document.getElementById("input1").value;
    let m2 = document.getElementById("input2").value;
    let m3 = document.getElementById("input3").value;
    let m4 = document.getElementById("input4").value;
    let m5 = document.getElementById("input5").value;

    m1 = parseFloat(m1);
    m2 = parseFloat(m2);
    m3 = parseFloat(m3);
    m4 = parseFloat(m4);
    m5 = parseFloat(m5);
    
    var marks = [ m1 , m2 , m3 , m4 , m5];
    var Result = Math.max(...marks);
    let output = isNaN(Result) ? "Please Enter Valid Input" : " Highest Marks Scored is : "+Result
    console.log(output);
    alert(output)

})