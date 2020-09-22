//selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");






//ecouteurs
todoButton.addEventListener("click", addTodo);







//functions
function addTodo(event){
    event.preventDefault();

    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = "hello";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
}