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
    arrayCopy.push(elementExtra);
    console.log(arrayCopy);

    for(let i = 0; i < arrayOriginal.length; ++i) {
        arrayCopy.push(arrayOriginal[i]);
    }
    return arrayCopy;
}