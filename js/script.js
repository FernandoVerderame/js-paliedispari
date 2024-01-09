// ! ESERCIZIO 1
// Chiedere all'utente una parola
const userWord = prompt('Inserisci una parola').trim();
console.log("Parola dell'utente:", userWord);

// Funzione per scrivere la parola dell'utente al contrario
/**
 * Reverse a given text
 * @param {string} text the text to be reverse
 * @returns {string} the reversed text
 */
function reverseText(text) {
    let reversedText = '';

    for (let i = text.length - 1; i >= 0 ; i--) {
        reversedText += text[i];
    }

    return reversedText;
}

const result = reverseText(userWord);
console.log("Parola dell'utente al contrario:", result);

// Capire se la parola dell'utente è palindroma
if (userWord === result) {
    console.log('La parola è palindroma!');
} else {
    console.log('La parola NON è palindroma!');
}






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