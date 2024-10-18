/**
 * Cálculo do consumo de água
 * @author Claudio Silva
 */

const input = require('readline-sync')

let consumo, peso
console.clear()
peso = Number(input.question("Digite o seu peso (Kg): "))
consumo = peso * 0.035
console.log(`Consumo diário de água deve ser: ${consumo.toFixed(2)}`)