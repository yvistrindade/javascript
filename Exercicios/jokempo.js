/**
 * jokempo
 * @author João Victor
 */

const input = require('readline-sync')
let opcao

do {
    console.clear()
    console.log("__JoKenPo__")
    console.log("1. Pedra")
    console.log("2. Papel")
    console.log("3. Tesoura")

    jogador = Number(input.question("Digite a opcao desejada: "))
    console.log("")
    switch (jogador) {
        case 1:
            console.log("jogador escolheu: PEDRA")
            break
        case 2:
            console.log("jogador escolheu: PAPEL")
            break
        case 3:
            console.log("jogador escolheu: TESOURA")
            break
        default:
            console.log("Opcao invalida")
            break
    }

    computador = Math.floor(Math.random() * 3 + 1)

    switch (computador) {
        case 1:
            console.log("Computador escolheu: PEDRA")
            break
        case 2:
            console.log("Computador escolheu: PAPEL")
            break
        case 3:
            console.log("Computador escolheu: TESOURA")
            break
        default:
            console.log("Opcao invalida")
            break
    }
    opcao = input.question("Deseja jogar novamente(s/n)")
    
    //logica para determinar o vencer ou declarar empate 

    if (jogador === computador) {
        console.log("Empate")
    } else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
        console.log("Jogador Venceu")
    } else {
        console.log("Computador Vence")
    }
} while (opcao === 's');
