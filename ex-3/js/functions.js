// test
console.log('test link functions');

/**
 * Description chiede all'utente di inserire i numeri finchè non digita stop
 * @returns {Array}
 */
function getNumbers() {
    let promptInput = "";
    const arrayNum = [];

    while (promptInput !== "stop") {
        promptInput = prompt('Inserisci un numero oppure scrivi STOP per interrompere');
        if (promptInput.toLowerCase() === "stop") {
            break;
        } 
        arrayNum.push(parseInt(promptInput));
    }
    return arrayNum;
}

/**
 * Description funzione che crea una stringa con i numeri dell'array e l'aggiunta di una virgola ad eccezione dell'ultimo numero
 * @param {array} array
 * @returns {string} stringa di numeri
 */
function print(array) {
    let result = "";
    for(let i = 0; i <= array.length - 1; i++) {
        result += array[i];

        if (i != array.length - 1) {
            result += ", ";
        } 
        console.log(result);
    }
    return result;
}