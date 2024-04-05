// test
console.log('test link functions');

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

function countElements(myArray) {
    return result = myArray.length;
}