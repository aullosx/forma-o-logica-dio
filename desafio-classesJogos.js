class heroi {

    constructor(nome, idade, tipo) {

        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
    }

    atacar() {
       let ataque ;
       if (this.tipo === "mago") {ataque = "usou magia"; 

       } else if (this.tipo === "guerreiro") { ataque =
        "usou espada";
       } else if (this.tipo === "monge") { ataque =
        "usou artes marciais";
       } else if ( this.tipo === "ninja") { ataque =
        "usou shuriken";
       }

       console.log(`o Heroi ${tipoHeroi.nome} de ${tipoHeroi.idade} anos tipo ${this.tipo} ${ataque}`)
    
    }


}

let tipoHeroi = new heroi ("Luis", "20", "monge")
tipoHeroi.atacar()

