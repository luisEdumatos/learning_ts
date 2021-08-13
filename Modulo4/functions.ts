// Funcao nomeada
function addNumbers (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);

 //Funcao anonima
 let addNums = function (x: number, y:number): number { 
     return x + y; 
 }
addNums(1,2); 

let total = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 2, 3]));

//Funcao de Seta
// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;

let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

//Parametros opcionais
function sumNumbers(x: number, y?: number): number {
    if (typeof y === 'number') {
        return x + y; 
    }
    return x; 
}
console.log(sumNumbers(1));

//Parametro padrão
function addN(x: number, y = 25): number { 
    return x + y; 
}
console.log(addN(1 , 2)); //retorna 3
console.log(addN(1)); //retorna 26

//Parametros Rest
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }

 //Interface como parametro
 interface Message {
    text: string;
    sender: string;
 }
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 
 displayMessage({sender: 'CJ', text: 'hello, world'});

