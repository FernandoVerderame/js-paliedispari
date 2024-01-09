// ! ESERCIZIO 1
// Chiedere all'utente una parola
/*
const userWord = prompt('Inserisci una parola').trim();
console.log("Parola dell'utente:", userWord);
*/

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

/*
const result = reverseText(userWord);
console.log("Parola dell'utente al contrario:", result);

// Capire se la parola dell'utente è palindroma
if (userWord === result) {
    console.log('La parola è palindroma!');
} else {
    console.log('La parola NON è palindroma!');
}
*/



// Recupero gli elementi 
const inputField = document.getElementById('text');
const form = document.querySelector('form');
const resultElement = document.getElementById('result');


// Reagisco al click
form.addEventListener('submit', function(event) {
    // ! Impedisco il comportamento di default
    event.preventDefault();

    // Recuperiamo il valore
    const inputValue = inputField.value.trim();

    // ! Validazione 
    if (!inputValue) return;

    const result = reverseText(inputValue);

    if (inputValue === result) {
        resultElement.innerText = 'La parola è palindroma!';
    } else {
        resultElement.innerText = 'La parola NON è palindroma!';
    }

})