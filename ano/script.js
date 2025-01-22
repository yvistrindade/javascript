/**
 * Ano automatico
 * @author yvis trindade
 */

// inserindo o ano na tag <spam>
let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual