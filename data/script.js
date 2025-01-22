/**
 * Data automatica no rodape 
 * @author yvis trindade
 */

function obterData(){
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return data.toLocaleDateString('pt-BR', options)
}

//a linha abaixo insere na TAG <p> indentificando como dataatual e retorno de função
document.getElementById('dataAtual').innerHTML = obterData()