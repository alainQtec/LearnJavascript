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
    let el = document.createElement('li'); el.className = 'item'; el.innerText = InputTxt.value;
    todoList.appendChild(el);
    counter.innerHTML = items.length;
    addEventListeners(el);
});
for (const item of items) {
    addEventListeners(item);
}
counter.innerHTML = items.length;

// const text = 'Bananan';
// const listOfUsers = ['Alain', 'Herve', 'Name3', 'Name4'];
// window.console.clear();

// switch (prompt('What Kind Of food do you LIKE ?')) {
//     case 'Bananan':
//         console.log('Wow, I Love Bananas too!')
//         break;
//     case 'Hello':
//         user.greet();
//         break;
//     case 'hhekek':
//         console.log(listOfUsers[3]);
//         listOfUsers.push('Name5', 'NAME6');
//         console.log(listOfUsers);
//         listOfUsers.shift();
//         console.log(listOfUsers);
//         console.log(listOfUsers.indexOf('Herve'));
//         break;
//     case 'err':
//         window.console.error('This is an error Message!') // I hate errors.
//         break;
//     default:
//         alert('What ?!');
//         break;
// }

// Collections Are dynamic

