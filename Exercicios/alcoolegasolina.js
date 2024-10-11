/**
 * calculo da media aritimetica de 3 valores
 * @author yvis trindade
 */

//importar a biblioteca read-linesync
const input = require(`readline-sync`)
const colors = require(`colors`)

//variaveis
let alcool, gasolina , media

console.clear()
console.log("calculo do alcool e gasolina")

//entrada
alcool = Number(input.question("digite o alcool:"))
gasolina = Number(input.question("digite a gasosa:"))

//processando
media = (alcool / gasolina)

//saida
console.log(`media: ${media.toFixed(1)}`)
if (media < 7){
    console.log("alcool".red)
} else {
    console.log("gasolina".blue)
}
