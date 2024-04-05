// test
console.log('test link functions');

function randomArray() {
    let genArray = [];
    for (let i = 0; i < 10; i++) {
        genNum = Math.floor(Math.random() * 100) + 1; 
        genArray.push(genNum);
    }
    return genArray;
}
