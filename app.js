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
const funnytext = 'Bananan';
const listOfUsers = ['Alain', 'Herve', 'Name3', 'Name4'];
window.console.clear();
window.console.error('This is an error Message!') // I hate errors.
// console.warn('Be warned!');
switch (key) {
    case value:
        console.log('Wow, I Love Bananas too!')
        break;
    case value2:
        console.log(listOfUsers[3]);
        listOfUsers.push('Name5', 'NAME6');
        console.log(listOfUsers);
        listOfUsers.shift();
        console.log(listOfUsers);
        console.log(listOfUsers.indexOf('Herve'));
    default:
        user.greet();
        break;
}


