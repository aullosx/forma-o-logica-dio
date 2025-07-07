nomeHeroi = "Aullosx"
Patente = ""
let rank = calcularRank(60,8)


function calcularRank(vitoria, derrota){
    let rank = vitoria - derrota
    return rank
    
}

if (rank <= 10) {
    Patente += "Ferro"
}
 
else if 
    ((rank >= 11) && (rank <= 20)){
    Patente += "Bronze"

}
else if 
    ((rank >= 21) && (rank <= 50)) {
        Patente += "Prata"
    }
else if 
    ((rank >= 51) && (rank <= 80)) {
        Patente += "ouro"
    }
else if 
    ((rank >= 81) && (rank <= 90)) {
        Patente += "Diamante"
    }
else if 
    ((rank >= 91) && (rank <= 100)) {
        Patente += "Lendario"
    }
else if 
    (rank >= 101){
        Patente += "imortal"
    }

/// Saida ///

console.log("O Heroi " + nomeHeroi + " tem saldo de: " + rank + " vitorias e esta no nivel: " + Patente )
