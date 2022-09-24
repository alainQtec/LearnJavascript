function greet(name) {
    return `Hello ${name}`
}
function signIn() {
    let userName = prompt(`What's your Name?`);
    let userAge = prompt(`How old are you?`);
    console.log(`
        ======================================
        ${greet(userName)}
        You say you are ${userAge} years old?
        ======================================
    `);
}
signIn();