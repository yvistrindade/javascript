/**
 * regra de 3
 * @author yvis trindade
 */

const input = require (`readline-sync`)

//variaveis
let x, y, valor

console.clear()
console.log("regra de 3")
console.log("x% de y = valor")

//entrada
x = Number(input.question("digite valor de x"))
y = Number(input.question("digite valor de y"))

//processamento
valor = (x * y) /100

//saida
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)

