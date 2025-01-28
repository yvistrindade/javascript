/**
 * Data automatica no rodape 
 * @author yvis trindade
 */

function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return `${data.toLocaleDateString('pt-BR', options)} - ${data.toLocaleDateString('pt-BR')}`
}

function atualizarData() {
    //a linha abaixo insere na TAG <p> indentificando como dataatual e retorno de função
    document.getElementById('dataAtual').innerHTML = obterData()

}

//atualizar a data a cada segundo
setInterval(atualizarData,1000)//1000ms - 1s
