/**
 * Fundamentos POO
 * Encapsulamento (segurança)
 * @author yvis trindade
 */

console.clear()

class User {
    //atributos
    constructor(login, senha){
        this.login = login
        //encapsulamento (O_ "underline" anjuria a variavel)
        let _senha = senha
        this.getSenha = () =>_senha //leitura
        this.setSenha = (novasenha) =>_senha = novasenha // escrita
    }
    //metodo
    logar() {
        console.log("--------------")
        console.log(`usuario: ${this.login}`)
        console.log(`senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log("usuario autenticado")
        } else {
            console.log("usuario e/ou senha invalido")
        }
    }
}

/**** Sistema  *****/
//criando um novo objeto
const user1 = new User ("admin", "1234")
user1.logar()
user1.setSenha("123@senac")
user1.logar()
