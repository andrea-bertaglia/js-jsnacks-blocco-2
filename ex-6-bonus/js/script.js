// test
console.log('test link script');

// 6. BONUS scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A
// Svolgimento
// - creo l'array con gli elementi
// - chiedo all'utente di inserire l'elemento E
// - funzione: tramite un ciclo aggiungo al secondo array tutti gli elementi del primo eccetto con E in prima posizione
// - stampo in pagina


// 1. Input
const listOriginal = [100, 26, 3, 4, 39]
const userElem = prompt("Inserisci l'elemento da aggiungere")

// 2. Logic
let listCopy = putAsFirst(listOriginal, userElem);
console.log(listCopy);

// 3. Output
const bodyElem = document.querySelector('body');
const elemResultTitle = document.createElement('h1');
const elemResultParagraphOriginal = document.createElement('p');
const elemResultParagraphCopy = document.createElement('p');
elemResultTitle.innerHTML = "Elenchi";
bodyElem.append(elemResultTitle);
elemResultParagraphOriginal.innerHTML = `L'elenco originale è: ${listOriginal}`;
bodyElem.append(elemResultParagraphOriginal);
elemResultParagraphCopy.innerHTML = `L'elenco con l'aggiunta del nuovo elemento è: ${listCopy}`;
bodyElem.append(elemResultParagraphCopy);
