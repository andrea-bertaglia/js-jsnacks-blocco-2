// test
console.log('test link functions');

/**
 * Description verifica se il numero è presente ed in quale posizione si trova
 * @param {number} num numero inserito dall'utente
 * @param {array} array elenco da controllare
 * @returns {number} posizione in elenco oppure -1 se non è presente
 */
function findPosition(num, array) {

    let result = -1;
    
    for (let i = 0; i <= array.length - 1; i++) {
        if (num === array[i]) {
            result = i;
        } 
    }

    return result;
}