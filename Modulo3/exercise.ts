let nota1: number = 8.8; 
let nota2: number = 5.7; 
let nota3: number = 5.5; 
let nomeAluno: string = 'Luis Eduardo';

function verificaAprovacao(n1: number, n2: number, n3: number, a: string) {
    let result: number = (n1 + n2 + n3)/3;
    if (result >= 6.0) { 
        console.log(`O aluno ${a} foi aprovado com média ${result}`);
    } else {
        console.log(`O aluno ${a} foi reprovado, sua nota média foi ${result}`); 
    }
}

verificaAprovacao(nota1, nota2, nota3, nomeAluno); 