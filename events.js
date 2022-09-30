const todolist = document.querySelector('#todolist');
const items = todolist.children; //html collection
const button = document.querySelector('.add_item');
const counter = document.querySelector('.counter');
counter.innerHTML = items.length

button.addEventListener('click', function () {
    let item = document.createElement('li');
    item.classList.add('item');
    item.innerText = 'Item 6';
    todolist.appendChild(item);
    counter.innerHTML = items.length
});