//Sugestão de solução-melhoramento vinda do DEEPSEEK após a entrega do desafio:

let vitorias = 105;
let derrotas = 20;
let saldoVitorias = vitorias - derrotas;
let nivel;

if (saldoVitorias < 10) {
    nivel = "Ferro";
} 
else if (saldoVitorias <= 20) {
    nivel = "Bronze";
} 
else if (saldoVitorias <= 50) {
    nivel = "Prata";
} 
else if (saldoVitorias <= 80) {
    nivel = "Ouro";
} 
else if (saldoVitorias <= 90) {
    nivel = "Diamante";
} 
else if (saldoVitorias <= 100) {
    nivel = "Lendário";
} 
else {
    nivel = "Imortal";
}

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel} do ranking.`);

// saldoFinal = parseInt(gets())
// solucao DESAFIO 2, encontrada em post na DIO, testar!!

// let material = { "Ferro":"Bronze", "Prata": "Ouro", "Diamante": "Lendário", "Imortal": "Mítico" } 
// let inicio = {0: 11, 21: 51, 81: 91}
// let fim = {10: 20, 50: 80, 90: 100}
// let nivel = material.length - 1

// for (let i = 0; i < nivel; i++) {
//   if (saldoFinal >= inicio[i] && saldoFinal <= fim[i]) {
//     nivel = i
//     break 
//   }
// }
 
// console.log(material[nivel])


// function calcularIdade(nome, anoNascimento) {
//   let idade = 2023 - anoNascimento;
//   console.log(nome + " tem " + idade + " anos!");
// }

// calcularIdade("Pedrinho", 2010); // Vai mostrar Pedrinho tem 13 anos!
// calcularIdade("Mariana", 2008); // Vai mostrar Mariana tem 15 anos!


// enviarDados();

// function enviarDados() { 
//     let nomeDoBanco = "banco-de-dados";
//     console.log("salvando dados em :" + nomeDoBanco);

//     if (3 === 3) {
//         console.log("senha valida");
//     }
// }


// mainSaveData();

// function mainSaveData() {
//     getData();
//     sendToDatabase();
//     checkValues();

// }

// // função que pega todos os dados
// function getData() {
//     console.log("Pegou os dados do utilizador");
//     if (1 < 3) {
//         console.log("numero encontrado");
//     }
// }

// // lógica para enviar dados para o banco de dados
// function sendToDatabase() {
//     console.log("enviei os dados para a BD");
// }

// function checkValues() {
//     console.log("verificando valores");
    
// }


// torrar();

// function torrar() {
//     console.log("torrando pão");
//     injetarPao();
// }

// function injetarPao() {
//     console.log("Preparando para injetar pão");
//     console.log("Passar manteiga no pão");
//     console.log("finalizado o pão");
// }