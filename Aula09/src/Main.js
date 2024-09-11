const read = require("readline-sync");

const Programador = require("./Programador");
const Designer = require("./Designer");
const Gerente = require("./Gerente");

let funcionarios = [];
let running = true;

while (running) {
    console.log("\n# Gerenciamento de Funcionários");
    console.log(
        "#1 - Cadastrar novo funcionário\n#2 - Visualizar funcionários\n#0 - Sair"
    );
    let escolha = parseInt(read.question("-> "));

    switch (escolha) {
        case 1:
            cadastrarFuncionario();
            break;
        case 2:
            listarFuncionarios();
            break;
        case 0:
            running = false;
            break;
        default:
            console.log("Escolha inválida.");
            break;
    }
}

function cadastrarFuncionario() {
    let tipoFuncionario = parseInt(
        read.question(
            "\n# Tipo de funcionário\n# 1 - Programador\n# 2 - Designer\n# 3 - Gerente\n# 0 - Voltar\n-> "
        )
    );

    switch (tipoFuncionario) {
        case 1:
            cadastrarProgramador();
            break;
        case 2:
            cadastrarDesigner();
            break;
        case 3:
            cadastrarGerente();
            break;
        case 0:
            break;
        default:
            console.log("\b# Tipo de funcionário inválido.");
            break;
    }
}

function cadastrarProgramador() {
    const nome = read.question("Nome: ");
    const idade = read.question("Idade: ");
    const cargo = "Programador";
    const linguagem = read.question("Linguagem de programação: ");
    const salario = parseFloat(read.question("Salário: "));

    let programador = new Programador(nome, idade, cargo, salario, linguagem);
    funcionarios.push(programador);
}

function cadastrarDesigner() {
    const nome = read.question("Nome: ");
    const idade = read.question("Idade: ");
    const cargo = "Designer";
    const ferramenta = read.question("Ferramenta de design: ");
    const salario = parseFloat(read.question("Salário: "));

    let designer = new Designer(nome, idade, cargo, ferramenta, salario);
    funcionarios.push(designer);
}

function cadastrarGerente() {
    const nome = read.question("Nome: ");
    const idade = read.question("Idade: ");
    const cargo = "Gerente";
    const equipe = read.question("Equipe de gerência: ");
    const salario = parseFloat(read.question("Salário: "));

    let gerente = new Gerente(nome, idade, cargo, equipe, salario);
    funcionarios.push(gerente);
}

function listarFuncionarios() {
    if (arrayVazio(funcionarios)) {
        console.log("Nenhum funcionário cadastrado.");
        return;
    }

    let escolha = parseInt(
        read.question(
            "\n# Filtrar visualização\n# 1 - Cargo\n# 2 - Sem filtro\n# 0 - Voltar\n-> "
        )
    );

    switch (escolha) {
        case 1:
            let cargo = parseInt(
                read.question(
                    "# Qual cargo deseja filtrar?\n# 1 - Programador\n# 2 - Designer\n# 3 - Gerente\n-> "
                )
            );
            switch (cargo) {
                case 1:
                    listarFuncionariosPorCargo("Programador");
                    break;
                case 2:
                    listarFuncionariosPorCargo("Designer");
                    break;
                case 3:
                    listarFuncionariosPorCargo("Gerente");
                    break;
                default:
                    console.log("Cargo inválido.");
                    break;
            }
            break;
        case 2:
            listarTodosFuncionarios();
            break;
        case 0:
            return;
        default:
            console.log("Opção inválida.");
            break;
    }
}

function listarFuncionariosPorCargo(cargo) {
    let funcionariosPorCargo = funcionarios.filter(
        (funcionario) => funcionario.cargo === cargo
    );

    if (arrayVazio(funcionariosPorCargo)) {
        console.log(`Nenhum funcionário do cargo ${cargo} cadastrado.`);
        return;
    }

    let funcionariosFormatados = funcionariosPorCargo.map((funcionario) =>
        funcionario.toString()
    );

    let index = read.keyInSelect(
        funcionariosFormatados,
        "Selecione um funcionário para editar ou 0 para sair"
    );

    if (index !== -1) {
        editarFuncionario(funcionariosPorCargo[index]);
    } else {
        console.log("Nenhum funcionário foi selecionado.");
    }
}

function listarTodosFuncionarios() {
    let funcionariosFormatados = funcionarios.map((funcionario) =>
        funcionario.toString()
    );

    let index = read.keyInSelect(
        funcionariosFormatados,
        "Selecione um funcionário para editar ou 0 para sair"
    );

    if (index !== -1) {
        editarFuncionario(funcionarios[index]);
    } else {
        console.log("Nenhum funcionário foi selecionado.");
    }
}

function editarFuncionario(funcionario) {
    console.log(`\n# ${funcionario.toString()}`);
    let escolha = "";

    switch (funcionario.cargo) {
        case "Programador":
            escolha = parseInt(
                read.question(
                    "# Editar\n# 1 - Nome\n# 2 - Idade\n# 3 - Salário\n# 4 - Linguagem de programação\n# 5 - Deletar funcionário\n# 0 - Cancelar\n-> "
                )
            );
            switch (escolha) {
                case 1:
                    funcionario.nome = read.question("Novo nome: ");
                    break;
                case 2:
                    funcionario.idade = parseInt(read.question("Nova idade: "));
                    break;
                case 3:
                    funcionario.salario = parseFloat(
                        read.question("Novo salário: ")
                    );
                    break;
                case 4:
                    funcionario.linguagem = read.question(
                        "Nova linguagem de programação: "
                    );
                    break;
                case 5:
                    deletarFuncionario(funcionario);
                    return;
                case 0:
                    return;
                default:
                    console.log("Opção inválida.");
                    return;
            }
            break;
        case "Designer":
            escolha = parseInt(
                read.question(
                    "# Editar\n# 1 - Nome\n# 2 - Idade\n# 3 - Salário\n# 4 - Ferramenta de design\n# 5 - Deletar funcionário\n# 0 - Cancelar\n-> "
                )
            );
            switch (escolha) {
                case 1:
                    funcionario.nome = read.question("Novo nome: ");
                    break;
                case 2:
                    funcionario.idade = parseInt(read.question("Nova idade: "));
                    break;
                case 3:
                    funcionario.salario = parseFloat(
                        read.question("Novo salário: ")
                    );
                    break;
                case 4:
                    funcionario.ferramenta = read.question(
                        "Nova ferramenta de design: "
                    );
                    break;
                case 5:
                    deletarFuncionario(funcionario);
                    return;
                case 0:
                    return;
                default:
                    console.log("Opção inválida.");
                    return;
            }
            break;
        case "Gerente":
            escolha = parseInt(
                read.question(
                    "# Editar\n# 1 - Nome\n# 2 - Idade\n# 3 - Salário\n# 4 - Equipe de gerência\n# 5 - Deletar funcionário\n# 0 - Cancelar\n-> "
                )
            );
            switch (escolha) {
                case 1:
                    funcionario.nome = read.question("Novo nome: ");
                    break;
                case 2:
                    funcionario.idade = parseInt(read.question("Nova idade: "));
                    break;
                case 3:
                    funcionario.salario = parseFloat(
                        read.question("Novo salário: ")
                    );
                    break;
                case 4:
                    funcionario.equipe = read.question(
                        "Nova equipe de gerência: "
                    );
                    break;
                case 5:
                    deletarFuncionario(funcionario);
                    return;
                case 0:
                    return;
                default:
                    console.log("Opção inválida.");
                    return;
            }
            break;
        default:
            console.log("Funcionário inválido.");
            return;
    }
}

function deletarFuncionario(funcionario) {
    let confirmacao = read.question(
        `Tem certeza que deseja deletar o funcionário ${funcionario.nome}? (s/n): `
    );
    if (confirmacao.toLowerCase() === "s") {
        let index = funcionarios.indexOf(funcionario);
        if (index > -1) {
            funcionarios.splice(index, 1);
            console.log("Funcionário deletado com sucesso.");
        } else {
            console.log("Funcionário não encontrado.");
        }
    } else {
        console.log("Operação cancelada.");
    }
}

function arrayVazio(arr) {
    return arr.length === 0;
}