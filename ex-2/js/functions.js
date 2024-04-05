// test
console.log('test link functions');

function numWord(firstWord, secondWord) {
    const numOfWord1 = firstWord.length;
    const numOfWord2 = secondWord.length;
    let result = "";

    if (numOfWord1 > numOfWord2) {
        result = "La prima è più lunga";
    } else if (numOfWord1 === numOfWord2) {
        result = "Sono di uguale lunghezza"
    } else {
        result = "La seconda è più lunga"
    }
    return result;
}