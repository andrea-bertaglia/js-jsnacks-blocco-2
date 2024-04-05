// test
console.log('test link script');

// Esercizio 1:
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// chiedo il numero all'utente
const userNum = parseInt(prompt("Digita un numero"))

// genero gli array
const array = randomArray(userNum);

// stampo gli array
console.log(array);