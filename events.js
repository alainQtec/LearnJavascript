const todolist = document.querySelector('#todolist');
const items = todolist.children; //html collection
const button = document.querySelector('.submit');
button.addEventListener('click', function () {
    console.log('NEW ITEM ADDED.');
});