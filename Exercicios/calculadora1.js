/**
 * desenvolvimento de uma calculadora
 * @author yvis trindade
 */

const input = require ('readline-sync')

let a, b

console.clear()
console.log("calculadora")

a = Number (input.question("digite o primeiro numero: "))
b = Number (input.question("digite o segundo numero: "))

console.log("")
console.log("1 somar")
console.log("2 subtrair")
console.log("3 multiplicar")
console.log("4 dividir")
console.log("5 calcular a porcentagem")
console.log("calculadora")
opcao = Number(input.question("Digite a opcao desejada: "))
// Lógica do jogador

console.log("")
switch (opcao) {
    case 1:
        console.log(`${a} + ${b} = ${a + b}`)
        break
    case 2:
        console.log(`${a} - ${b} = ${a - b}`)
        break
        case 3:
        console.log(`${a} * ${b} = ${a * b}`)
        break
        case 4:
        console.log(`${a} / ${b} = ${a / b}`)
        break
        case 5:
        console.log(`${a} % ${b} = ${(a * b) /100}`)
        break

    
    
}