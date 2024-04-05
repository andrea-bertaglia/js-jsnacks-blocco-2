// test
console.log('test link script');

// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// 1. Input
// Richiedo le due parole
const word1 = prompt('Dimmi la prima parola');
const word2 = prompt('Dimmi la seconda parola');

// 2. Logic
// Verifico se le due parole hanno la stessa lunghezza
console.log(numWord(word1,word2));

// 3. Output
const result = numWord(word1,word2);
if (result === "Sono di uguale lunghezza") {
    console.log("Le parole sono: ", word1, word2);
} else {
    console.log(result);
}