/*
QUESTÃO-2.4: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Factory Method: Um sistema educacional precisa permitir a criação de diferentes
tipos de provas (objetiva, dissertativa, prática). O aluno deve criar uma interface Prova, implementar
as variantes concretas e utilizar Factory Method para instanciar dinamicamente o tipo correto.
 */

// Classe abstrata - Prova
class Prova{
    constructor(tipo) {
        this.tipo = tipo;
    }
    aplicar() {
        (`Tipo de prova criado: ${this.tipo}`);
    }
}

// Classes concretos
class ProvaObjetiva extends Prova {
    constructor() { 
        super("Objetiva"); 
    }
    aplicar() {
        console.log("Aplicando prova objetiva...");
    }
}

class ProvaDissertativa extends Prova {
    constructor() { 
        super("Dissertativa"); 
    }
    aplicar() {
        console.log("Aplicando prova dissertativa...");
    }
}

class ProvaPratica extends Prova {
    constructor() { 
        super("Prática"); 
    }
    aplicar() {
        console.log("Aplicando prova prática...");
    }
}

// Interface Fabrica Prova
class FabricaProva{
    criarProva(){};
}

class FabricaProvaObjetiva extends FabricaProva {
    criarProva() { 
        return new ProvaObjetiva(); 
    }
}

class FabricaProvaDissertativa extends FabricaProva {
    criarProva() { 
        return new ProvaDissertativa(); 
    }
}

class FabricaProvaPratica extends FabricaProva {
    criarProva() { 
        return new ProvaPratica(); 
    }
}

// =========================================
// USO DO PADRÃO DE PROJETO - FACTORY METHOD 
// =========================================

const fabricaObjetiva = new FabricaProvaObjetiva();
const fabricaDissertativa = new FabricaProvaDissertativa();
const fabricaPratica = new FabricaProvaPratica();

console.log("\n======== Provas ==========");
const provaObjetiva = fabricaObjetiva.criarProva();
const provaDissertativa = fabricaDissertativa.criarProva();
const provaPratica = fabricaPratica.criarProva();

provaDissertativa.aplicar();
provaPratica.aplicar();
provaObjetiva.aplicar();

console.log("\n")