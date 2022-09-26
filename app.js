//*********** */ Functions
function greet(name) {
    return `Hello ${name}`;
}
function askCreds() {
    let name = prompt(`What's your Name?`);
    let age = prompt(`How old are you?`);
    return [name, age]
}
function guessGame(params) {
    let random = Math.floor((Math.random() * 11));
    let guess;
    do {
        guess = prompt("Guess a number between 1 and 10");
        if (guess > random) {
            console.log('guess was too high');
        } else if (guess < random) {
            console.log('gess was too low');
        }
    } while (guess != random);
}
//*********** */ Objects
const user = {
    name: 'Alain',
    age: 22,
    height: 178,
    money: NaN,
    greet: function () {
        console.log('HELLO tHERE!');
    }
};
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
// // lOOP IN ARRAY (Basic for & for of)
// let array = ['one', 'two', 'Three', 'Four'];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element, index);
// }
// console.log('*********************************\n\n')
// array.forEach(function parse(name, index) {
//     console.log(name, index);
// });

// console.log('---------------------------------\n\n')
// for (const element of array) {
//     console.log(element, array.indexOf(element));
// }
// // LOOP inside object (for-in)
// console.log('-----------for-in-------------\n\n')
// for (const key in user) {
//     console.log(
//         key.toLocaleLowerCase(), user[key]
//     );
// }

// Guesinf game
guessGame();
// generate random number
// give the user the ability to guess
// if they are wrong ask again (hint)
// if they win say they won