const Funcionario = require('./Funcionario');

class Gerente extends Funcionario {
    #equipe;

    constructor(nome, idade, cargo, salario, equipe) {
        super(nome, idade, cargo, salario);
        this.#equipe = equipe;
    }

    get equipe() {
        return this.#equipe;
    }

    set equipe(novaEquipe) {
        this.#equipe = novaEquipe;
    }

    toString() {
        return `${super.toString()} | Equipe: ${this.#equipe.length} membros`;
    }
}

module.exports = Gerente;