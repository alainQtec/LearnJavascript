// Guesing game:
// generate random number
// give the user the ability to guess
// if they are wrong ask again (hint)
// if they win say they won

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

guessGame();