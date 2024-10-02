/**
 * calculo do volume de um aquario
 * @author yvis Trindade
 */

const input = require (`readline-sync`)

//variaveis
let comprimento, largura, altura, volume

console.clear()
console.log("calculo do volume de um aquario")

//entrada
comprimento = Number(input.question("digite o comprimento em cm: "))
largura = Number(input.question("digite o largura em cm: "))
altura = Number(input.question("digite o altura em cm: "))

// Processando
volume = (comprimento * largura * altura ) / 1000

// saida
console.log(`volume do aquario: ${volume.toFixed(2)} litros`)

