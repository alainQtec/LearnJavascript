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