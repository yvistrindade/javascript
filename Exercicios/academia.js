/**
 * ficha de um aluno de academia3
 * @author yvis trindade
 */

// variaveis 
let nome
let idade
let peso
let altura
let vip
let fcm
let imc


// entradada de dados
console.clear ()
nome = "yvis trindade"
idade = 22
peso = 35
altura = 1.74
vip = true
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// processamento
fmc = 208 -(0.7 * idade)
imc = peso / (altura * altura)

// saida
console.log("ficha do aluno")
console.log("______________________")
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`imc: ${imc.toFixed(2)}`)

// tabela imc
if (imc < 18.5) {
    console.log("abaixo do peso")
 } else if (imc < 25) {
console.log("peso normal")
 } else if (imc < 30) {
console.log ("levemente acima do peso")
 } else if (imc < 35) {
    console.log("obesidade grau I")
 } else if (imc < 40) {
    console.log("obesidade gra II")
 } else {
    console.log("obesidade grau III")
 }
 
 
