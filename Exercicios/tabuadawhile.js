/**
 * Tabuada usando a estrutura while
 * @author yvis trindade
 */

const input = require (`readline-sync`)
let valor 
let i = 1 // apoio a logica e laço while

console.clear()
console.log("tabuada while")

valor = Number (input.question("digite o valor  da tabuada: "))

while(i < 11){
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}