// ! ESERCIZIO 2
/*
// Chiedere all'utente di scegliere tra pari o dispari
const userChoice = prompt('Scegli tra pari o dispari!').trim();
console.log("Scelta dell'utente:", userChoice);

// Chiedere all'utente un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5!'));
console.log("Numero scelto dall'utente:", userNumber);
*/

// Funzione per generare un numero random da 1 a 5 per il computer
/**
 * Generate a random number
 * @returns {number} random computer number
 */
function generateRandomNumber(min, max) {

    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/*
const random = generateRandomNumber();
console.log("Numero random del computer:", random);

// Somma dei due numeri
const sum = userNumber + random;
console.log("La somma è:", sum);
*/

// Funzione per stabilire se un numero è pari o dispari
/**
 * Declare if a number is even or odd
 * @param {number} number number to be checked
 * @returns {boolean} true if number is even and false if number is odd
 */
function isEven(number) {
    return number % 2 === 0;
}

/*
const winner = isEven(sum);
console.log(winner);

// Stabilire il vincitore
if ((userChoice === 'pari' && winner === true) || (userChoice === 'dispari' && winner === false)) {
    console.log("L'utente è il vincitore!");
} else {
    console.log("Il computer è il vincitore!");
}
*/






// Recupero gli elementi
const inputField = document.getElementById('number');
const form = document.querySelector('form');
const resultElement = document.getElementById('result');
const selectField = document.getElementById('pari-dispari');

// Reagisco al click
form.addEventListener('submit', function(event) {
    // ! Impedisco il comportamento di default
    event.preventDefault();

    // Recuperiamo il valore
    const inputValue = parseInt(inputField.value);
    const inputChoice = selectField.value;

    // ! Validazione 
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 5) {
        alert('Devi inserire un numero da 1 a 5');
        return;
    }

    if (inputChoice !== 'odd' && inputChoice !== 'even') {
        alert('Devi scegliere pari o dispari');
        return;
    }

    //  Generiamo il numero della CPU
    const random = generateRandomNumber(1, 5);

    const sum = inputValue + random;

    const winner = isEven(sum);

    if ((inputChoice === 'even' && winner === true) || (inputChoice === 'odd' && winner === false)) {
        resultElement.innerText = "L'utente è il vincitore!";
    } else {
        resultElement.innerText = "Il computer è il vincitore!";
    }

})