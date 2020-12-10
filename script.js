

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


const addListItem = (event) => {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    const newItem = document.createElement("li");
    newItem.innerText = todoInput.value;
    newItem.classList.add("todo-item");
    todoDiv.appendChild(newItem);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

const deleteItem = (event) => {
    const item = event.target;
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === 'check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('checked');
    }
}

// I can find a way to link the event listener to the API and
// at the same time, allow the user to type a new list item
// and add it to the list by pressing the button

todoButton.addEventListener("click", addListItem);
todoList.addEventListener("click", deleteItem);



