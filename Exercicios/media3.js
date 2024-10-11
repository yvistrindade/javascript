/**
 * calculo da media aritimetica de 3 valores
 * @author yvis trindade
 */

//importar a biblioteca read-linesync
const input = require(`readline-sync`)
const colors = require(`colors`)

//variaveis
let num1, num2 , num3, MediaCapabilities

console.clear()
console.log("calculo da media aritimetica de 3 numeros")

//entrada
num1 = Number(input.question("digite o primeiro numero:"))
num2 = Number(input.question("digite o segundo numero:"))
num3 = Number(input.question("digite o terceiro numero:"))

//processando
media = (num1 + num2 + num3) / 3

//saida
console.log(`media: ${media.toFixed(1)}`)
if (media < 5){
    console.log("REPROVADO".red)
} 
if (media > 5){
    console.log("APROVADO".blue)
}