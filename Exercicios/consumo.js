/**
 * calculo do consumo de combustivel
 * @author yvis trindade
 */

const input = require (`readline-sync`)

//variaveis
let distancia, litros, consumo

console.clear()
console.log("calculo do consumo de combustivel")

//entrada
distancia = Number(input.question("digite a distancia percorrida: "))
litros = Number(input.question("digite os litros gastos: "))

// Processando
consumo = (distancia / litros ) 

// saida
console.log(`consumo gastos: ${consumo.toFixed(1)} KM/L `)
