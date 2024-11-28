/**
 * Estrutura de dados 
 * array
 * @author yvis trindade
 */

 //                0        1        2        3        4
let alunosEM1 = ["tania", "pedro", "maria", "joao", "viviane"]

console.clear()
console.log(typeof(alunosEM1))
console.log(alunosEM1)
// o comando abaixo identificar o numero de elementos de um vetor 
console.log(alunosEM1.length)
// o comando abaixo exibe o indice do array associado ao elemento
console.table(alunosEM1)
console.log(alunosEM1[2])
// o comando adiciona um elemento ao vetor 
alunosEM1.push("jorge")
console.table(alunosEM1)
// para alterar um elemento  de vetor, é necessario usar o indice 
alunosEM1[3] = "joaozinho"
console.log(alunosEM1)
// o comando abaixo remove o ultimo elemento de vetor 
alunosEM1.pop()
console.table(alunosEM1)
// removendo um elemento especifico sem alterar o indice, neste caso é necessario fornecer o indice de elementos a ser excluido
delete alunosEM1[1]
console.table(alunosEM1)