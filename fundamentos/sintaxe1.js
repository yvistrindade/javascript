/**
 * Sintaxe basica da linguagem javascripi
 * @author yvis trindade
 */

// limpar a tela do console 
console.clear()

// Js - sentença
console.log("hello world")

let nome = "yvis trindade"
let idade = 22
// O ponto é usado para casas decimais
let altura = 1.74
// typeof() é usado para identificar o tipo de variável
console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(altura))

// identificando variáveis inteiras e não inteiras
console.log(Number.isInteger(idade))
console.log(Number.isInteger(altura))

// concatenação (unir textos e variáveis)
console.log(`Nome: ${nome}`)
console.log("Nome: " + nome) // não recomendado

// Arrendodamneto (casas decimais)
let media = 5.789
console.log(`media: ${media.toFixed(1)}`)

// particularidade do JS 
console.log(10/0)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)


