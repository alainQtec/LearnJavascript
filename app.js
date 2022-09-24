function greet(name) {
    return `Hello ${name}`;
}
function askCreds() {
    let name = prompt(`What's your Name?`);
    let age = prompt(`How old are you?`);
    return [name, age]
}

const user = {
    name: 'Alain',
    age: 22,
    greet: function () {
        console.log('HELLO tHERE!');
    }
};

const listOfUsers = ['Alain', 'Herve', 'Name3', 'Name4'];
window.console.clear();
// window.console.error('This is an error Message!') // I hate errors.
// console.warn('Be warned!');
user.greet();
console.log(listOfUsers[3]);
listOfUsers.push('Name5', 'NAME6');
console.log(listOfUsers);
listOfUsers.shift();
console.log(listOfUsers);