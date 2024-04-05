// test
console.log('test link functions');

/**
 * Description
 * @param {array} arrayOriginal elenco originale
 * @param {array} arrayCopy elenco di copia
 * @returns {array} elenco senza l'ultimo elemento
 */
function removeLastElement(arrayOriginal) {
    let arrayCopy = [];
    for(let i = 0; i < arrayOriginal.length - 1; i++) {
        arrayCopy[i] = arrayOriginal[i];
    }
    return arrayCopy;
}