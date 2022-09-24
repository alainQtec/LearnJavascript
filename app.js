function greet(textName, age) {
    console.log(`Welcome to our Website  ${textName} ${age}`);
}
function signUp() {
    let name = prompt('What Is your Name?');
    let ag = prompt('How old Are you?');
    greet(name, ag);
}
console.log('The Rest Of The code...')

signUp();