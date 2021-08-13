"use strict";
//Objeto
let carro;
carro = { nome: 'Fusca', ano: 1980, preco: 10000 };
console.log(carro);
//Funcao
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 3));
//Boolean
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
let concluido = false;
if (!concluido) {
    console.log("Tarefa Concluida");
}
else {
    console.log("Tarefa Pendente");
}
//Number
let num = 14.0;
let num1 = 0x78CF;
let num2 = 0o577;
let num3 = 0b110001;
console.log(`Number - Ponto flutuante: ${num}`);
console.log(`Number - Hexadecimal: ${num1}`);
console.log(`Number - Octal: ${num2}`);
console.log(`Number - Binario: ${num3}`);
//String
let primeiroNome = 'Luis Eduardo';
let sobrenome = 'de Matos';
console.log(`Nome completo: ${primeiroNome} ${sobrenome}`);
//Array
//Declaracao 1
let animais = ['Elefante', 'Gato', 'Cachorro', 'Guaxini'];
animais.forEach(element => {
    console.log(element);
});
//Declarando como Object Array
let cores = ['azul', 'amarelo', 'vermelho', 'verde'];
//Adicionando elemento
let cores2 = ['cinza', 'marrom', 'roxo'];
cores2.push('laranja');
console.log(cores2);
//Removendo elemento
cores2.pop();
console.log(cores2);
//Spread Operator
let listaNums1 = [1, 2, 3, 4, 5];
let listaNums2 = [6, 7, 8, 9, 10];
let listaNums3 = [...listaNums1, ...listaNums2];
console.log(listaNums3);
//Laço de iteracao
let linguagens = new Array('JavaScript', 'Java', 'Python', 'PHP');
function funcaoLinguagens(lings) {
    for (let i = 0; i < lings.length; i++) {
        console.log(lings[i]);
    }
}
funcaoLinguagens(linguagens);
//Tuplas
let pessoa;
pessoa = ['Luis Eduardo', 'dev', 26];
console.log(pessoa);
console.log(pessoa[2]);
//Declaracao Label
let pessoa2 = ['Pessoa teste', 'Engenheiro', 50];
console.log(pessoa2);
//Spread Operator
let listaFrutas = ['abacaxi', 'banana', 'maça', 'morango'];
console.log(...listaFrutas);
//Tuplas Heterogeneas
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
//Tuplas em funcoes
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Pessoa1', 'Pessoa2'], [1, 2]);
console.log(resultado);
//Enums
//NumeralEnum
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
//StringsEnum
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia.Sexta);
function comida(c) {
    return 'Boas comidas!';
}
console.log(comida(4 /* Churrasco */));
//Unknown
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = 'Teste';
valorVariavel = [];
//Assercao de tipo
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase());
}
else {
    console.log("Error - A string was expected here.");
}
//MultiType
let multiType;
multiType = 20;
multiType = true;
//multiType = "string"; -> Não permitido 
