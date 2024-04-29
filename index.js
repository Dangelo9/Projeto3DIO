class Heroi{
    constructor(tipo, nome, arma){
        this.tipo = tipo;
        this.nome = nome;
        this.arma = arma;
    }
    escrever() {
        console.log(`O ${this.tipo} conhecido pelo nome de ${this.nome} atacou Exandria usando ${this.arma}`);
    }
}

let heroi1 = new Heroi("Guerreiro" , "Grog", "Espada");
let heroi2 = new Heroi("Mago", "Reyna" , "Phantom");
let heroi3 = new Heroi("Monje", "Iso", "Operator");
let heroi4 = new Heroi("Ninja", "Omen", "Vandal");

heroi1.escrever();
heroi2.escrever();
heroi3.escrever();
heroi4.escrever();
