/**
 * calculo do valor com desconto
 * @author
 */

const input = require (`readline-sync`)

//variaveis
let total, desconto, totalcomdesconto

console.clear()
console.log("calculo com desconto")

//entrada
total = Number(input.question("digite o total: "))
desconto = Number(input.question("digite o desconto: "))

//processamento
totalcomdesconto = total - (desconto * total) /100

//saida
console.log(`total com desconto:  ${totalcomdesconto.toFixed(2)}`)
