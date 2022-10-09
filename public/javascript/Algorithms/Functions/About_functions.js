function greet(name) {
    return `Hello ${name}`;
}
function askCreds() {
    let name = prompt(`What's your Name?`);
    let age = prompt(`How old are you?`);
    return [name, age]
}
let numbers = [1, 3, 5, 9, 14];
// ASCII sorting
numbers.sort();
console.log(numbers);
// numeric sorting
numbers.sort(function (x, y) {
    return x - y
});
// or
numbers.sort((x, y) => x - y);


// array of funtions:
// Pretty usefull if you need to store a sequence of actions ( or functions)
function jump() {
    console.log('I jump')
}
function punch() {
    console.log('I punch')
}
function block() {
    console.log('I block')
}
function kick() {
    console.log('I kick ass')
}
let actions = [jump, punch, block, kick]

for (let i = 0; i < actions.length; i++) {
    actions[i]();
}
// or
actions.forEach(action => action());