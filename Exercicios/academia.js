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
peso = 60
altura = 1.74
vip = true
fcm = 208 - (0.7 * idade)
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

// processamento
fmc = 208 -(0.7 * idade)
imc = peso / (altura * altura)

