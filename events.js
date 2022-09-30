const todolist = document.querySelector('#todolist');
const btnsBlock = document.getElementById('buttns');
const items = todolist.children; //html collection
const addbtn = document.querySelector('.add_item');
const rembtn = document.querySelector('.remove_item');
const counter = document.querySelector('.counter');
counter.innerHTML = items.length;

addbtn.addEventListener('click', function () {
    let item = document.createElement('li');
    item.classList.add('item');
    item.innerText = `Item ${items.length + 1}`;
    todolist.appendChild(item);
    counter.innerHTML = items.length;
    counter.classList.toggle('spectacular');
});

rembtn.addEventListener('click', function () {
    counter.classList.toggle('spectacular');
});

//  styles
