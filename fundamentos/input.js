/**
 * imput de dados via terminal
 * uso do pacote read.line.sync
 * @author yvis trindade
 */

// importar o pacote
const input = require('readline-sync')

let nome

console.clear()

nome = input.question("digite seu nome: ")
console.log(`hello ${nome}`)