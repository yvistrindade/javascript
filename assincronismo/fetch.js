/**
 * Assincronismo - uso do promises em API
 * @author yvis trindade
 */

const input = require('readline-sync')
let cep, urlAPI

console.clear()
console.log("VIA CEP")
cep = input.question("Digite o CEP: ")
//console.log(cep)
//consumo da API (VIA cep)
urlAPI = `https://viacep.com.br/ws/${cep}/json`
//console.log(urlAPI)
//Uso do promise(assincronismo) para acessar o API
fetch(urlAPI)
    .then((response) => {
        return response.json()

    })
    .then((dados) => {
console.log(dados.logradouro)
console.log(dados.bairro)
console.log(dados.localidade)
console.log(dados.estado)
console.log(dados.uf)

    })
    .catch((error) => {
        console.log(error)
    })
