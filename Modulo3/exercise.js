"use strict";
let nota1 = 8.8;
let nota2 = 5.7;
let nota3 = 5.5;
let nomeAluno = 'Luis Eduardo';
function verificaAprovacao(n1, n2, n3, a) {
    let result = (n1 + n2 + n3) / 3;
    if (result >= 6.0) {
        console.log(`O aluno ${a} foi aprovado com média ${result}`);
    }
    else {
        console.log(`O aluno ${a} foi reprovado, sua nota média foi ${result}`);
    }
}
verificaAprovacao(nota1, nota2, nota3, nomeAluno);
