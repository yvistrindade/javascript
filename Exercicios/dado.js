/**
 * exemplo de uso do metodo para gerar numeros aleatorios
 * @author yvis trindade
 */

const input = require(`readline-sync`)

let face, opcao

do {    

console.clear()
console.log("jogo do dado")
input.question("pressione a tecla [enter] para jogar o dado")

// sorteio da face de um dado
// match classe matematica
//floor() conversao para numeros inteiros
//random() * (gerador do numeros aleatorios)

face = Math.floor(Math.random() *6 + 1) // 0 1 2 3 4 5 6
console.log(`face do dado: ${face}`)
opcao = input.question("deseja jogar novamente(s/n) ")
}while (opcao === `s`);
