/**
 * Carro POO
 * @author yvis trindade
 */

console.clear();

// Criando a classe modelo Carro
class Carro {
    // Atributos
    constructor(marca, modelo, ano, cor, ligado = false) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligado = ligado;
    }

    // Métodos
    criarCarro() {
        console.log("------------------------------------");
        console.log("🚗 Carro criado!");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Cor: ${this.cor}`);
    }

    ligar() {
        if (this.ligado) {
            console.log(`O carro ${this.modelo} já está ligado!`);
        } else {
            this.ligado = true;
            console.log(`O carro ${this.modelo} foi ligado!`);
        }
    }

    desligar() {
        if (!this.ligado) {
            console.log(`O carro ${this.modelo} já está desligado!`);
        } else {
            this.ligado = false;
            console.log(`O carro ${this.modelo} foi desligado!`);
        }
    }

    acelerar() {
        if (this.ligado) {
            console.log(`O carro ${this.modelo} está acelerando! VRUMMM!`);
        } else {
            console.log(`⚠ Não é possível acelerar! Ligue o carro ${this.modelo} primeiro.`);
        }
    }
}

// Criando a classe modelo Aviao, que herda de Carro
class Aviao extends Carro {
    constructor(marca, modelo, envergadura, ligado = false) {
        super(marca, modelo, ligado);  // Chama o construtor da classe Carro
        this.envergadura = envergadura;
    }

    // Métodos específicos de Aviao
    criarAviao() {
        console.log("-------------------------------------------");
        console.log("✈️ Avião criado!");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Envergadura: ${this.envergadura}`);
    }

    acelerar() {
        console.log(`✈️ O avião ${this.modelo} está acelerando na pista! Turbinas a todo vapor!`);
    }

    aterrizar() {
        console.log(`🛬 O avião ${this.modelo} está aterrizando com segurança!`);
    }
}

/****** Testando a classe Carro ******/
const carro1 = new Carro("Hyundai", "Hb20", 2022, "amarelo");
carro1.criarCarro();
carro1.ligar();
carro1.acelerar();
carro1.desligar();

console.log(""); // Separador

const carro2 = new Carro("Fiat", "Argo", 2021, "vermelho");
carro2.criarCarro();
carro2.acelerar(); // Testando acelerar sem ligar
carro2.ligar();
carro2.acelerar();
carro2.desligar();

console.log(""); // Separador

/****** Testando a classe Aviao ******/
const aviao1 = new Aviao("Boeing", "737","2546")
aviao1.criarAviao();
aviao1.acelerar();
aviao1.aterrizar();
