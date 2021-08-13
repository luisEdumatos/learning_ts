"use strict";
// Funcao nomeada
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2);
//Funcao anonima
let addNums = function (x, y) {
    return x + y;
};
addNums(1, 2);
let total = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3]));
//Funcao de Seta
// Arrow function
let addNumbers2 = (x, y) => x + y;
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
//Parametros opcionais
function sumNumbers(x, y) {
    if (typeof y === 'number') {
        return x + y;
    }
    return x;
}
console.log(sumNumbers(1));
//Parametro padrão
function addN(x, y = 25) {
    return x + y;
}
console.log(addN(1, 2)); //retorna 3
console.log(addN(1)); //retorna 26
//Parametros Rest
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'CJ', text: 'hello, world' });
