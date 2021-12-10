const listContainer = document.querySelector(".list_container")
const addBtn = document.getElementById("add_btn")


addBtn.addEventListener("click", ()=>{
    addNew()
})



function addNew(){

        const list = document.createElement("div")
        list.classList.add("list")
    
        list.innerHTML = `
        <input type="text" name="text" class="text">
        <input type="button" value="delete" class="delete_btn">
        `
    
        listContainer.appendChild(list);
    
        const deleteBtn = list.querySelector(".delete_btn")

        deleteBtn.addEventListener("click", ()=>{
            list.remove()
        })
    
}



// function deleteEl(){
//     const deleteBtn = document.querySelector(".delete_btn")

//     deleteBtn.addEventListener("click", ()=>{
//         deleteBtn.parentElement.remove()
//         console.log("deleted");
//     })
// }





// deleteBtn.addEventListener("click", deleteEl)
