//Objeto
let carro: { 
    nome: string;
    ano: number; 
    preco: number;
}

carro = {nome: 'Fusca', ano: 1980, preco: 10000}; 
console.log(carro);

//Funcao
function multiplicarNumero(num1: number, num2: number) { 
    return num1*num2;
}
console.log(multiplicarNumero(2,3));

//Boolean
let tarefaConcluida: boolean = true; 
let tarefaPendente: boolean = false; 

console.log(tarefaConcluida);
console.log(tarefaPendente);

let concluido: boolean = false; 
if (!concluido) {
    console.log("Tarefa Concluida"); 
} else { 
    console.log("Tarefa Pendente");
}

//Number
let num: number = 14.0; 
let num1: number = 0x78CF; 
let num2: number = 0o577; 
let num3: number = 0b110001; 
console.log(`Number - Ponto flutuante: ${num}`);
console.log(`Number - Hexadecimal: ${num1}`);
console.log(`Number - Octal: ${num2}`);
console.log(`Number - Binario: ${num3}`);

//String
let primeiroNome: string = 'Luis Eduardo'; 
let sobrenome: string = 'de Matos'; 
console.log(`Nome completo: ${primeiroNome} ${sobrenome}`);

//Array
//Declaracao 1
let animais: string[] = ['Elefante', 'Gato', 'Cachorro', 'Guaxini'];
animais.forEach(element => {
    console.log(element);
});

//Declarando como Object Array
let cores: Array<string> =  ['azul', 'amarelo', 'vermelho', 'verde']; 

//Adicionando elemento
let cores2: Array<string> = ['cinza', 'marrom', 'roxo']; 
cores2.push('laranja'); 
console.log(cores2);

//Removendo elemento
cores2.pop(); 
console.log(cores2);

//Spread Operator
let listaNums1: Array<number> = [1, 2, 3, 4, 5];
let listaNums2: Array<number> = [6, 7, 8, 9, 10]; 
let listaNums3: Array<number> = [...listaNums1, ...listaNums2];
console.log(listaNums3);

//Laço de iteracao
let linguagens: string[] = new Array('JavaScript', 'Java', 'Python', 'PHP'); 

function funcaoLinguagens(lings: string[]) {
    for (let i = 0; i < lings.length; i++) {
        console.log(lings[i]);
    }
}

funcaoLinguagens(linguagens); 

//Tuplas
let pessoa: [string, string, number];
pessoa = ['Luis Eduardo', 'dev', 26]; 
console.log(pessoa); 
console.log(pessoa[2]);

//Declaracao Label
let pessoa2: [nome: string, profissao: string, idade: number] = ['Pessoa teste', 'Engenheiro', 50]; 
console.log(pessoa2);

//Spread Operator
let listaFrutas: [string, ...string[]] = ['abacaxi', 'banana', 'maça', 'morango']; 
console.log(...listaFrutas);

//Tuplas Heterogeneas
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]; 
console.log(listaFrutas2); 

//Tuplas em funcoes
function listarPessoas(nomes: string[], idades: number[]) { 
    return [...nomes, ...idades]; 
}

let resultado = listarPessoas(['Pessoa1', 'Pessoa2'],[1, 2]); 
console.log(resultado);

//Enums
//NumeralEnum
enum Idioma { 
    Portugues,
    Espanhol, 
    Ingles, 
    Frances
}

console.log(Idioma); 

//StringsEnum
enum Dia {
    Segunda = 'SEG',
    Terca = "TER", 
    Quarta = "QUA", 
    Quinta = "QUI",
    Sexta = "SEX", 
    Sabado = "SAB", 
    Domingo = "DOM"
}

console.log(Dia.Sexta);

//EnumConst

const enum Comida { 
    Hamburger,
    Massa,
    Pizza,
    Torta,
    Churrasco
}

function comida(c: Comida) { 
    return 'Boas comidas!'; 
}

console.log(comida(Comida.Churrasco)); 

//Unknown
let valorVariavel: unknown; 
valorVariavel = true; 
valorVariavel = 123; 
valorVariavel = 'Teste'; 
valorVariavel = []; 

//Assercao de tipo
let randomValue: unknown = 10; 
randomValue = true;
randomValue = 'Mateo'; 

if (typeof randomValue === "string") { 
    console.log((randomValue as string).toUpperCase()); 
} else {
    console.log("Error - A string was expected here."); 
}

//MultiType Tipos de uniao
let multiType: number | boolean; 
multiType = 20; 
multiType = true; 
//multiType = "string"; -> Não permitido 

function add(x: number | string, y: number | string) { 
    if (typeof x === 'number' && typeof y === 'number') { 
        return x + y; 
    }
    if (typeof x === 'string' && typeof y === 'string') { 
        return x.concat(y); 
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); 
console.log(add(1 , 2)); 
//console.log(add(1, 'two')); -> dispara o erro

//Intersecao de tipos
interface Employee {
    employeeID: number;
    age: number; 
}
interface Manager { 
    stockPlan: boolean; 
}
type ManagementEmployee = Employee & Manager; 
let newManager: ManagementEmployee = { 
    employeeID: 12345, 
    age: 34, 
    stockPlan: true
}; 

//Tipos Literais
type testResult = "pass" | "fail" | "incomplete" | 1 | 2; 
let myResult: testResult; 
myResult = "pass";
myResult = "fail"; 
//myResult = "failure"; -> não funciona pois o tipo não foi definido.
myResult = 1; 
myResult = 2; 
//myResult = 3;  -> não funciona pois o tipo não foi definido. 
 