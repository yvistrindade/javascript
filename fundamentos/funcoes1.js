/**
 * estudo das funções
 * @author yvis trindade 
 */

hello ()

function hello() {
    console.log("hello function")
}
console.log(typeof(hello))

//função atribuida
// funções atribuidas precisam ser criados no inicio do codigo (antes da chamada da fução)
function hello2() {
    console.log("hello2 function")
} hello2 ()
console.log(typeof(hello2))

// arrow function (forma simplificada de criar uma função atribuida)
const hello3 = () => {
    console.log("hello3 function")
}
hello3()
console.log(typeof(hello3))

// arrow function mais simplificado (nesse caso so é possivel executar com uma linha de coddigo)

const hello4 = _ => console.log("hello4 function")
hello4()
console.log(typeof(hello4))
