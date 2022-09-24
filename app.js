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
const key = true;
window.console.clear();
// console.warn('Be warned!');
switch (key) {
    case 'bannana':
        console.log('Wow, I Love Bananas too!')
        break;
    case 'hhekek':
        console.log(listOfUsers[3]);
        listOfUsers.push('Name5', 'NAME6');
        console.log(listOfUsers);
        listOfUsers.shift();
        console.log(listOfUsers);
        console.log(listOfUsers.indexOf('Herve'));
    case 'err':
        window.console.error('This is an error Message!') // I hate errors.
    default:
        user.greet();
        break;
}


