/** 
 * Avaliação JS
 * Enunciado: 5) Cálculo do tempo de viagem:
   Desenvolva um programa que calcule o tempo necessário para uma viagem.
   - O usuário deve fornecer a distância a ser percorrida e a velocidade
   média do veículo. O programa deve calcular e exibir o tempo de viagem.
   O usuário ira passar o final de semana no RJ (Rio de Janeiro) e do seu
   local até o hotel que ele alugou, ele fará um percurso de 625km.
   Considerando que a velocidade média que ele mantém seja de 60km/h, quanto
   tempo ele levará para chegar ao seu destino?
 * @author Claudio Silva
   @author Yvis Trindade
 */

// importar a biblioteca read-line-sync
const input = require('readline-sync')

// variáveis
let distancia, velocidade, tempo

console.clear()
console.log("Cálculo distância percorrida por um veículo")

// entrada
distancia = Number(input.question("Digite a distancia: "))
velocidade = Number(input.question("Digite a velocidade: "))

// processamento
tempo = distancia / velocidade

// saída
console.log(`Tempo: ${tempo.toFixed(1)}`)