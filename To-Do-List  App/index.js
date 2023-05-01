const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");


item.addEventListener("keyup",function(data){
    if(data.key== 'Enter'){
        addToDo(this.value);
        this.value= "";
    };
})

const addToDo = (item) => {
    const ListItem = document.createElement("li");

    ListItem.innerHTML =`${item} <i class="fas fa-times"></i>`;

    //done list
    ListItem.addEventListener("click", function(){
        this.classList.toggle("done");
        })
        
     //remove cross
        ListItem.querySelector("i").addEventListener("click",function(){
            ListItem.remove();
        })

    toDoBox.appendChild(ListItem)

}






