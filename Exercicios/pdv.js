/**
 * PDV
 * @author
 */

const input = require(`readline-sync`)

//vairiaveis
let total, desconto, troco, totalcomdesconto, valorcomdesconto, valorpago

console.clear()


console.log("_____                    _____                    _____          ")
console.log("/\\    \\                  /\\   \\                 /\\    \\         ")
console.log("/::\\    \\                /::\\    \\               /::\\____\\        ")
console.log("/::::\\   \\              /::::\\    \\              /:::/    /        ")
console.log("/::::::\\    \\            /::::::\\    \\            /:::/    /         ")
console.log("/:::/\\:::\\    \\          /:::/\\:::\\    \\          /:::/    /          ")
console.log("/:::/__\\:::\\    \\        /:::/  \\:::\\    \\        /:::/____/           ")
console.log("/::::\\   \\:::\\    \\      /:::/    \\:::\\    \\      |::|    |            ")
console.log("/::::::\\   \\:::\\    \\    /:::/    / \\:::\\    \\      |::|    |     _____  ")
console.log("/:::/\\:::\\   \\:::\\____\\  /:::/    /   \\:::\\ ___\\     |::|    |    /\\    \\ ")
console.log("/:::/  \\:::\\   \\:::|    |/:::/____/     \\:::|    |    |::|    |   /::\\____\\ ")
console.log("\\::/    \\:::\\  /:::|____|\\:::\\    \\     /:::|____|    |::|    |  /:::/    /")
console.log("\\/_____/\\:::\\/:::/    /  \\:::\\    \\   /:::/    /     |::|    | /:::/    / ")
console.log("\\::::::/    /    \\:::\\    \\ /:::/    /      |::|____|/:::/    /  ")
console.log("\\::::/    /      \\:::\\    /:::/    /       |:::::::::::/    /   ")
console.log("\\::/____/        \\:::\\  /:::/    /        \\::::::::::/____/    ")
console.log("~~               \\:::\\/:::/    /          ~~~~~~~~~~          ")
console.log("\\::::::/    /                               ")
console.log("\\::::/    /                                ")
console.log("\\::/____/                                 ")
console.log("~~                                       ")
console.log("")

//entrada 1
total = Number(input.question("digite o valor total: "))
desconto = Number(input.question("digite o valor di descnonto em %: "))

//processamento 1
valorcomdesconto = (desconto * total) / 100

//processamento 2
totalcomdesconto = total - valorcomdesconto

//saida 1
console.log("")
console.log("------------------------------")
console.log(`total: R$ ${total.toFixed(2)}`)
console.log(`desconto: ${desconto}%`)
console.log(`valor com desconto: R$ ${valorcomdesconto.toFixed(2)}`)
console.log(`total com desconto: R$ ${totalcomdesconto.toFixed(2)}`)
console.log("")

//entrada  2
valorpago = Number(input.question("valor em dinheiro pago pelo cliente: "))

//processamento 3 
troco = valorpago - totalcomdesconto

//saida 2
console.log("")
console.log(`valor pago em dinheiro: R$ ${valorpago.toFixed(2)}`)
console.log(`troco: R$ ${troco.toFixed(2)}`)
console.log("------------------------------")

