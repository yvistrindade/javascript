/**
 * verificar maioridade
 * @author yvis trindade
 */

const input = require (`readline-sync`)

let idade

console.clear()
console.log("verificar maioridade")
idade = Number (input.question("digite a idade:"))
console.log(`idade: ${idade}`)
if (idade < 18) {
    console.log("menor de idade")
}

if (idade > 18) {
    console.log("maior de idade")
}
