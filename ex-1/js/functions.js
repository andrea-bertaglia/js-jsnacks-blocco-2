// test
console.log('test link functions');

/**
 * Description chiede all'utente di inserire i numeri finchè non digita stop
 * @returns {Array}
 */
function getNumbers() {
    let promptInput = "";
    let arrayNum = [];
    let y = 0;
    
    while (promptInput !== "stop") {
        
    promptInput = prompt('Inserisci un numero oppure scrivi STOP per interrompere');

    if (promptInput.toLowerCase() === "stop") {
        break;
    } else {
        arrayNum[y] = parseInt(promptInput);
        y++;
    }
    }
    return arrayNum;
}

/**
 * Description calcola il numero degli elementi presenti nell'array
 * @param {Array} myArray elenco dei numeri inseriti dall'utente
 * @returns {number}
 */
function countElements(myArray) {
    return result = myArray.length;
}