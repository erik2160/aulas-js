class Funcionario {
    #nome;
    #idade;
    #cargo;
    #salario;

    constructor(nome, idade, cargo, salario) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cargo = cargo;
        this.#salario = salario;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get idade() {
        return this.#idade;
    }

    set idade(idade) {
        this.#idade = idade;
    }

    get cargo() {
        return this.#cargo;
    }

    set cargo(cargo) {
        this.#cargo = cargo;
    }

    get salario() {
        return this.#salario;
    }

    set salario(salario) {
        this.#salario = salario;
    }

    toString() {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Cargo: ${this.cargo} | Salário: ${this.salario}`;
    }
}

module.exports = Funcionario;