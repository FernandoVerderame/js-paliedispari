// ! ESERCIZIO 2
// Chiedere all'utente di scegliere tra pari o dispari
const userChoice = prompt('Scegli tra pari o dispari!').trim();
console.log("Scelta dell'utente:", userChoice);

// Chiedere all'utente un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5!'));
console.log("Numero scelto dall'utente:", userNumber);

// Funzione per generare un numero random da 1 a 5 per il computer
/**
 * Generate a random number
 * @returns {number} random computer number
 */
function generateRandomNumber() {

    return Math.floor(Math.random() * 5) + 1;
}

const random = generateRandomNumber();
console.log("Numero random del computer:", random);

// Somma dei due numeri
const sum = userNumber + random;
console.log("La somma è:", sum);

// Funzione per stabilire se un numero è pari o dispari
/**
 * Declare if a number is even or odd
 * @param {number} number number to be checked
 * @returns {boolean} true if number is even and false if number is odd
 */
function isEven(number) {
    return number % 2 === 0;
}

const winner = isEven(sum);
console.log(winner);

// Stabilire il vincitore
if ((userChoice === 'pari' && winner === true) || (userChoice === 'dispari' && winner === false)) {
    console.log("L'utente è il vincitore!");
} else {
    console.log("Il computer è il vincitore!");
}