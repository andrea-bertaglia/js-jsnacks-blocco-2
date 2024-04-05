// test
console.log('test link script');

// 1. scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

// Svolgimento
// - funzione: chiedo all'utente di inserire i numeri che la funzione memorizza in un array finchè l'utente non scrive stop
// - funzione: conta gli elementi dell'array e restituisci il valore
// - stampa del risultato in pagina

// 1. Input
const myNumbers = getNumbers();
console.log(myNumbers);

// 2. Logic
const totalElements = countElements(myNumbers);
console.log("n. di elementi: ", totalElements);

// 3. Output
const bodyElem = document.querySelector('body');
const elemResultTitle = document.createElement('h1');
const elemResultParagraph = document.createElement('p');
elemResultTitle.innerHTML = "Conteggio elementi";
elemResultParagraph.innerHTML = `Hai inserito ${totalElements} numeri`
bodyElem.append(elemResultTitle);
bodyElem.append(elemResultParagraph);