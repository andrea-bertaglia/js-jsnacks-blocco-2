// test
console.log('test link script');

// 2. scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

// Svolgimento
// - creo un array con una serie di numeri
// - chiedo all'utente di inserire il numero da cercare
// - funzione: cerco il numero nell'array e memorizzo l'indice oppure il valore "-1" se non è presente
// - stampo il risultato

// 1. Input
const listOfNumbers = [22, 3, 44, 1, 9, 245, 21];
const numberToFind = parseInt(prompt('Digita il numero'));

// 2. Logic
const position = findPosition(numberToFind, listOfNumbers);
console.log("posizione: ", findPosition(numberToFind, listOfNumbers));

// 3. Output
const bodyElem = document.querySelector('body');
const elemResultTitle = document.createElement('h1');
const elemResultParagraph = document.createElement('p');
elemResultTitle.innerHTML = "Verifica del numero";
bodyElem.append(elemResultTitle);
if (position === -1) {
    elemResultParagraph.innerHTML = `Mi dispiace ma il numero ${numberToFind} non è presente nell'elenco`;
} else {
    elemResultParagraph.innerHTML = `Il numero ${numberToFind} è presente alla posizione n. ${position + 1} dell'elenco`;
}
bodyElem.append(elemResultParagraph);
