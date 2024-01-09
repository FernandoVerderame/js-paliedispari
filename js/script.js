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