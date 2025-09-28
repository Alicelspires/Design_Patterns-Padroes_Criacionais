/*
QUESTÃO-2.3: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Factory Method: Você está desenvolvendo uma aplicação de logística que deve
permitir entrega por caminhão, navio ou drone. Implemente uma solução usando o padrão Factory
Method, criando uma interface Transporte e subclasses concretas para cada modal. Crie uma classe
Logistica com método de fábrica. 
*/

// Classe abstrata  - Transporte
class Transporte {
    constructor(tipoEntrega){
        this.tipoEntrega = tipoEntrega;
    }

    mostrar(){
        console.log(`Entrega por: ${this.tipoEntrega}`)
    }
}

// Classes concretas de Transporte
class Caminhao extends Transporte{
    constructor(tipoEntrega){
        super(tipoEntrega)
    }
}

class Navio extends Transporte{
    constructor(tipoEntrega){
        super(tipoEntrega)
    }
}

class Drone extends Transporte{
    constructor(tipoEntrega){
        super(tipoEntrega)
    }
}


// interface Logistica
class Logistica {
    criarTransporte(){}
}

// Classes concretas de Logistica
class LogisticaCaminhao extends Logistica{
    criarTransporte(tipoEntrega){
        return new Caminhao(tipoEntrega)
    }
}

class LogisticaNavio extends Logistica{
    criarTransporte(tipoEntrega){
        return new Navio(tipoEntrega)
    }
}

class LogisticaDrone extends Logistica{
    criarTransporte(tipoEntrega){
        return new Drone(tipoEntrega)
    }
}

// =========================================
// USO DO PADRÃO DE PROJETO - FACTORY METHOD 
// =========================================

const fabricaCaminhao = new LogisticaCaminhao();
const fabricaNavio = new LogisticaNavio();
const fabricaDrone = new LogisticaDrone();

console.log("\n======== Entrega tipo: Caminhões ==========");
const pedidoCaminhao1 = fabricaCaminhao.criarTransporte("Carreta");
const pedidoCaminhao2 = fabricaCaminhao.criarTransporte("Truck");
pedidoCaminhao1.mostrar();
pedidoCaminhao2.mostrar();

console.log("\n======== Entrega tipo: Navios ==========");
const pedidoNavio1 = fabricaNavio.criarTransporte("Graneleiro");
const pedidoNavio2 = fabricaNavio.criarTransporte("Porta contêiner");
pedidoNavio1.mostrar();
pedidoNavio2.mostrar();

console.log("\n======== Entrega tipo: Drones ==========");
const pedidoDrone1 = fabricaDrone.criarTransporte("AirRobot");
const pedidoDrone2 = fabricaDrone.criarTransporte("Draganfly Drones");
pedidoDrone1.mostrar();
pedidoDrone2.mostrar();

console.log("\n")