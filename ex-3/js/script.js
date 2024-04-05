// test
console.log('test link script');

// 3. scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola

// Svolgimento
// - chiedo i numeri all'utente per formare l'array
// - funzione: creo una stringa contente i numeri dell'array separati da una virgola
// - stampo il risultato in pagina

// 1. Input
const arrayNum = getNumbers();
console.log(arrayNum);

// 2. Logic
const resultString = print(arrayNum);

// 3. Output
const bodyElem = document.querySelector('body');
const elemResultTitle = document.createElement('h1');
const elemResultParagraph = document.createElement('p');
elemResultTitle.innerHTML = "Elenco numeri";
bodyElem.append(elemResultTitle);
elemResultParagraph.innerHTML = `I numeri inseriti sono: ${resultString}`;
bodyElem.append(elemResultParagraph);