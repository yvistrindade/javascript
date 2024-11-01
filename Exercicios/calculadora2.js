/**
 * desenvolvimento de uma calculadora
 * @author yvis trindade
 */

const input = require('readline-sync')

let a, b, opcao
do {
    console.clear()
    console.log("Calculadora")
    console.log(" _____     _         _       _             ")
    console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
    console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
    console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")
    console.log("")

    a = Number(input.question("digite o primeiro numero: "))
    b = Number(input.question("digite o segundo numero: "))

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
            somar(a, b)
            break
        case 2:
            subtrair(a, b)
            break
        case 3:
            console.log(`${a} * ${b} = ${a * b}`)
            break
        case 4:
            console.log(`${a} / ${b} = ${a / b}`)
            break
        case 5:
            console.log(`${a} % ${b} = ${(a * b) / 100}`)
            break
    }

    // funçoes com parametros de retorno

    //somar
    function somar(a, b) {
        return console, log(`A soma de ${a} + ${b} = ${a + b}`)
    }


    //subtrair
    function subtrair(a, b) {
        return console, log(`A subtração de ${a} - ${b} = ${a - b}`)
    }

    //multiplicar
    function multiplicar(a, b) {
        return console, log(`A multiplicar de ${a} * ${b} = ${a * b}`)
    }

    //dividir
    function dividir(a, b) {
        return console, log(`A divisao de ${a} / ${b} = ${a / b}`)
    }
    //porcentagem
    function dividir(a, b) {
        return console, log(`A porcentagem de ${b} % ${a} = ${(b * a) / 100}`)
    }
    opcao = input.question("deseja jogar novamente {s} {n}: ")
} while (opcao === 's');


