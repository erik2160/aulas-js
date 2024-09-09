const Funcionario = require('./Funcionario');

class Designer extends Funcionario {
    #ferramenta;

    constructor(nome, idade, cargo, salario, ferramenta) {
        super(nome, idade, cargo, salario);
        this.#ferramenta = ferramenta;
    }

    get ferramenta() {
        return this.#ferramenta;
    }

    set ferramenta(novaFerramenta) {
        this.#ferramenta = novaFerramenta;
    }

    toString() {
        return `${super.toString()} | Ferramenta: ${this.#ferramenta}`;
    }
}

module.exports = Designer;
