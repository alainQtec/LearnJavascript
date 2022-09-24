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
const text = 'Bananan';
const listOfUsers = ['Alain', 'Herve', 'Name3', 'Name4'];
window.console.clear();
// console.warn('Be warned!');
switch (prompt('What Kind Of food do you LIKE ?')) {
    case 'Bananan':
        console.log('Wow, I Love Bananas too!')
        break;
    case 'Hello':
        user.greet();
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
        console.log('What ?!');
        break;
}


