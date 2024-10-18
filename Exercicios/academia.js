/**
 * APP - Calculadora saude
 * @author yvis trindade
 */

//Bibliotecas
const input = require(`readline-sync`)
const colors = require(`colors`)

// variaveis 
let nome
let idade
let peso
let altura
let fcm
let imc
let consumo

//entrada de dados
nome = "digite o seu nomme: "
idade = Number(input.question("digite sua idade: "))
peso = Number(input.question("digite seu peso em kg: "))
altura = Number(input.question("digite sua altura em metros: "))

// processamento
fmc = 208 -(0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// saida
console.log("ficha do aluno")
console.log("______________________")
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`imc: ${imc.toFixed(2)}`)

// tabela imc
if (imc < 18.5) {
    console.log("abaixo do peso".cyan)
 } else if (imc < 25) {
console.log("peso normal".green)
 } else if (imc < 30) {
console.log ("levemente acima do peso".yellow)
 } else if (imc < 35) {
    console.log("obesidade grau I".magenta)
 } else if (imc < 40) {
    console.log("obesidade gra II".red)
 } else {
    console.log("obesidade grau III".bgRed)
 }

 //consumno de agua
 console.log(`consumir por dia ${consumo.toFixed(3)} litros de agua: `)
 
 
