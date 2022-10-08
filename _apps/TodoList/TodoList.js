// Selectors
const todoContainer = document.querySelector('.todo-container');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// Event Listeners

// Functions
function newTodo(text) {
    let todo = document.createElement('li');
    todo.classList.add('todo');
    let todoItemContainer = document.createElement('div'); todoItemContainer.classList.add('todoItemContainer');
    let todoItem = document.createElement('i'); todoItem.classList.add('todo-item');
    todoItem.innerText = text;
    let checkedBtn = document.createElement('button'); checkedBtn.classList.add('checkedBtn');
    checkedBtn.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>'
    // < i class="fa fa-trash" aria - hidden="true" ></i >
    todoItemContainer.append(todoItem, checkedBtn);
    todo.appendChild(todoItemContainer);
    todoList.appendChild(todo);
}
function newTodoList(name, todos) {
    // todos is an array of todos
    let newTodoList = document.createElement('ul');
    newTodoList.classList.add('todo-list');
    todoContainer.appendChild(newTodoList)
}
newTodo('Hello World');