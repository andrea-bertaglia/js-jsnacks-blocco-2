// test
console.log('test link script');

// 5. scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione

// Svolgimento
// - creo due array (uno con valori e l'altro vuoto)
// - funzione: tramite un ciclo aggiungo al secondo array tutti gli elementi del primo eccetto il primo elemento
// - stampo in pagina

// 1. Input
const listOriginal = ["kiwi", "mele", "arance", "mirtilli", "fragole"]

// 2. Logic
let listCopy = removeFirstElement(listOriginal);
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
elemResultParagraphCopy.innerHTML = `L'elenco senza il primo elemento è: ${listCopy}`;
bodyElem.append(elemResultParagraphCopy);
