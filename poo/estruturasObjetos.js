/**
 * estruturas de dados e objetos 
 * @author yvis trindade
 */

console.clear()

const funcionario1 = {} // abrir e fechar chave é ojeto
console.log(typeof (funcionario1))
// adicionar dados a estrutura
funcionario1.nome = "yvis"
funcionario1.cargo = "Tecnico de campo"
funcionario1.email = "yvis.trindade@gmail.com"
funcionario1.salario = 3500
funcionario1.isntagram = "instagram"
//listar os dados das estrturas
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estruturas
funcionario1.nome = "yvis trindade"
console.log(funcionario1)
//excluir os dados da estrutura 
delete funcionario1.isntagram
console.log(funcionario1)

const funcionario2 = {
    nome: "yvis trindade",
    cargo: "CEO",
    email: "yvis.trindade@gmail.com",
    salario: 3500
}

console.log(funcionario2)
const endereco1 = {
    logradouro: "Bat caverna",
    cidade: "Ghotan city",
    estado: "Nova work",
}

console.log(endereco1)
//... spedd operator (uniao de 2 estruturas de dados )
const funcionario3 = {
    nome: "Flash",
    cargo: "corredor",
    salrio: 5000,
    ...endereco1
}
console.log(funcionario3)

const funcionario4 = {
    logradouro: "miami",
    cidade: "guaianases",
    estado: "tatuape",
}
console.log(funcionario4)

const funcionario5 = {
    nome: "pantera",
    cargo: "presidente",
    email: "pantenegra@gmail.com",
    salario: 2000,
    armadura: {
        versao: "mark II",
        ano: 210,
        reator: "arc 01",
        },
    suitup: () => {
            console.log("😃")
        }
    }
    console.log(funcionario5)
    console.log(funcionario5.cargo)
    console.log(funcionario5.armadura.versao)
    funcionario5.suitup() //executar a função interna da estrutura