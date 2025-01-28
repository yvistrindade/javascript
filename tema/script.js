/**
 * Uso do color-scheme para modificar o tem (claro-escuro)
 * Uso do "mode para armazenamento no storage de browser"
 * @author yvis trindade
 */

const html = document.querySelector('html')
//uso no banco de dados do navegador
const tema = localStorage.getItem('mdoe')

//capturar e implementar a preferencia do usuario(light ou dark)
if(tema === "light"){
    light()
}

if(tema === "dark"){
    dark()
}


function light () {
html.style.setProperty("color-scheme", "light")
localStorage.setItem("mode", "light")
}

function dark () {
    html.style.setProperty("color-scheme", "dark")
    localStorage.setItem("mode", "dark")
}

function auto () {
    html.style.setProperty("color-scheme", "light dark")
    localStorage.removeItem("mode")
}