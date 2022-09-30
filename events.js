const todolist = document.querySelector('#todolist');
const btnsBlock = document.getElementById('buttns');
const items = todolist.children; //html collection
const button1 = document.querySelector('.add_item');
const button2 = document.querySelector('.Impress');
const counter = document.querySelector('.counter');
counter.innerHTML = items.length

button1.addEventListener('click', function () {
    let item = document.createElement('li');
    item.classList.add('item');
    item.innerText = `Item ${items.length + 1}`;
    todolist.appendChild(item);
    counter.innerHTML = items.length
});

button2.addEventListener('click', function () {
    btnsBlock.style.backgroundColor = 'red'
})

//  styles
