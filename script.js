//Deze opdracht heb ik incompleet ingeleverd!!

//Van alle modules vind ik deze over API’s de moeilijkste. 
//Ondanks dat ik alle items van de module heb afgemaakt, 
//meerdere keren naar de video’s heb gekeken en zelf meer 
//informatie via Google heb opgezocht, heb ik nog steeds 
//het idee dat ik het niet echt goed begrijp. Nu ik er al 
//zo lang mee bezig ben, zie ik het niet goed meer, ook 
//al bevindt de oplossing zich waarschijnlijk recht voor
// mijn neus. 
//Ik vind het zelfs moeilijk om via Slack uit te leggen 
//wat het probleem is. Ik snap wat ik in theorie met de 
//verschillende request moet doen (GET, POST, enz) maar 
//als ik de functies probeer te bouwen, dan raak ik de 
//weg kwijt en krijg ik allerlei foutmeldingen (“not 
//possible to fetch”). 

//De koppeling tussen mijn form (de app) en de JSONBox 
//vind ik om de een of andere reden moeilijk te maken. 
//Als jullie naar mijn opdracht willen kijken zoals hij nu is, en mij hopelijk wat extra informatie en/of voorbeelden kunnen geven (ik leer vooral door observatie), dan waardeer ik dat enorm!

//Ik ga in de tussentijd verder met de volgende module. 
//Dan kan ik even iets anders doen, wat afstand van de 
//API nemen, en met een frisse blik terug keren. 

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

todoButton.addEventListener("click", addListItem);
todoList.addEventListener("click", deleteItem);



