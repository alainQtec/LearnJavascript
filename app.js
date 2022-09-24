function greet(name) {
    return `Hello ${name}`;
}
function askCreds() {
    let name = prompt(`What's your Name?`);
    let age = prompt(`How old are you?`);
    return [name, age]
}
function signIn() {
    let userName = ''
    let userAge = '';
    [userName, userAge] = askCreds();
    console.log(`
    ======================================
    ${greet(userName)}
    You say you are ${userAge} years old?
    ======================================`
    );
}
signIn();