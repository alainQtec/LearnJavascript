const title = document.getElementsByClassName("title");
const pageName = document.getElementsByClassName("todoPage");
const todoList = document.querySelector("#todolist");
const counter = document.querySelector(".counter");
const addBtn = document.querySelector(".addBtn");
const InputTxt = document.querySelector(".InputTxt");
const items = todoList.children;

function addEventListeners(item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation(); item.remove();
        counter.innerHTML = items.length;
    });
}

addBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the  page from refeshing (so we wont loose our Data).
    if (InputTxt.value != null) {
        console.log(InputTxt.value);
        let el = document.createElement('li'); el.className = 'item'; el.innerText = InputTxt.value;
        todoList.appendChild(el);
        counter.innerHTML = items.length;
        addEventListeners(el);
    } else {
        console.log('Null El')
    }
});
for (const item of items) {
    addEventListeners(item);
}
counter.innerHTML = items.length;