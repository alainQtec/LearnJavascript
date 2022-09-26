//*********** */ Functions
function greet(name) {
    return `Hello ${name}`;
}
function askCreds() {
    let name = prompt(`What's your Name?`);
    let age = prompt(`How old are you?`);
    return [name, age]
}
//*********** */ Objects
// const user = {
//     name: 'Alain',
//     age: 22,
//     greet: function () {
//         console.log('HELLO tHERE!');
//     }
// };
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

//*********** */ Loops

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
let array = ['one', 'two', 'Three', 'Four'];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
console.log('*********************************\n\n')
array.forEach(function parse(name, index) {
    console.log(name, index);
})