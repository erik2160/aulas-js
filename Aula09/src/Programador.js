const Funcionario = require('./Funcionario');

class Programador extends Funcionario {
    #linguagem;
    #listaProgramadores;

    constructor(nome, idade, cargo, salario, linguagem) {
        super(nome, idade, cargo, salario);
        this.#linguagem = linguagem;
    }

    get linguagem() {
        return this.#linguagem;
    }

    set linguagem(novaLinguagem) {
        this.#linguagem = novaLinguagem;
    }

    

    toString() {
        return `${super.toString()} | Linguagem: ${this.#linguagem}`;
    }
}

module.exports = Programador;
