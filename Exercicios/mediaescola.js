/**
 * media escolar 
 * @author yvis trindade
 */
const input = require (`readline-sync`)
const colors = require(`colors`)

let media

console.clear()
console.log("verificar Media escolar")
media = Number (input.question("digite sua media:"))
console.log(`media: ${media}`)
if (media > 5) {
    console.log("APROVADO".blue)
} 

if (media < 5) {
    console.log("REPROVADO".red)
} 

