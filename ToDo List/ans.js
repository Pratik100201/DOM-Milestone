let check = document.getElementById("check");

check.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    let item = document.getElementById("np");
    if(input.length==0){
        alert("Please Enter Valid Inputs");
    }
    else{
        item.innerHTML += `
        <div class = "np">
        <span class = "hello" >${input}</span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
        </div>`;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    }
})