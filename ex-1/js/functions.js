// test
console.log('test link functions');

function randomArray(numArray) {
    for (let i = 0; i <= numArray; i++) {
        
        let genArray = [];
        for (let y = 0; y < 10; y++) {
            genNum = Math.floor(Math.random() * 100) + 1; 
            genArray.push(genNum);
        }
        return genArray;
    }
}