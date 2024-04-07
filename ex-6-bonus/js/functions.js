// test
console.log('test link functions');


/**
 * Description
 * @param {array} arrayOriginal l'elenco originale
 * @param {string} elementExtra l'elemento in aggiunta
 * @returns {array} secondo elenco formato dalla lista del primo array, con l'aggiunta del nuovo elemento in prima posizione
 */
function putAsFirst(arrayOriginal, elementExtra) {
    let arrayCopy = [];
    arrayCopy[0] = elementExtra;

    for(let i = 1; i <= arrayOriginal.length; ++i) {
        arrayCopy[i] = arrayOriginal[i-1];
    }
    return arrayCopy;
}