let vitorias = 105;
let derrotas = 20;
let ranking = vitorias - derrotas;
let nivel = "";
    
// ["Ferro, Bronze, Prata, Ouro, Diamante, Lendário, Imortal"];



if (vitorias - derrotas < 10) {
    // console.log("Ranking Ferro")
    nivel = "Ferro";
}
else if (vitorias - derrotas < 21 && vitorias - derrotas > 10) {
    // console.log("Ranking Bronze")
    nivel = "Bronze";
}
else if (vitorias - derrotas < 51 && vitorias - derrotas > 20) {
    // console.log("Ranking Prata")
    nivel = "Prata";
}
else if (vitorias - derrotas < 81 && vitorias - derrotas > 50) {
    // console.log("Ranking Ouro")
    nivel = "Ouro";
}
else if (vitorias - derrotas < 91 && vitorias - derrotas > 80) {
    // console.log("Ranking Diamante")
    nivel = "Diamante";
}
else if (vitorias - derrotas < 101 && vitorias - derrotas > 90) {
    // console.log("Ranking Lendário")
    nivel = "Lendário";
}
else if (vitorias - derrotas >= 101) {
    // console.log("Ranking Imortal")
    nivel = "Imortal";
}
else {
    String(nivel) = "Desconhecido";
    return null;
}

console.log("O Herói tem saldo de " + ranking + " vitórias e esta no nível " + nivel + " do ranking.");

