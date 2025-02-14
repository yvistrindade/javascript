/**
 * Uso de async - await (sintaxe moderna do JD com assincronismo)
 * @author yvis trindade
 */

//biblioteca nativa do js para trabalhar com arquivos
const fs = require('fs')

function criarArquivo() {
    let conteudo = "yvis trindade\nExemplo de uso dos novos recurso de assincronismo no java script (async - await)"
    gravarArquivo("text.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try{
await fs.promises.writeFile(path, conteudo)
console.log("Arquivo gravado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()