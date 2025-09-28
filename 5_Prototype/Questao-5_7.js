/*
QUESTÃO-5.7: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Prototype:Um sistema CAD permite clonar formas gráficas com pequenas alterações.
Modele com Prototype e implemente formas como classes concretas que implementam o método
clone().
*/

// Prototype
class Forma {
    constructor(x, y, cor) {
        this.x = x;
        this.y = y;
        this.cor = cor;
    }

    clone() {
        return new this.constructor(this.x, this.y, this.cor);
    }

    mostrar() {
        console.log(`Forma em (${this.x}, ${this.y}) com cor ${this.cor}`);
    }
}

// Concrete Prototypes
class Circulo extends Forma {
    constructor(x, y, cor, raio = 10) {
        super(x, y, cor);
        this.raio = raio;
    }

    clone() {
        return new Circulo(this.x, this.y, this.cor, this.raio);
    }

    mostrar() {
        console.log(`Círculo em (${this.x}, ${this.y}), cor: ${this.cor}, raio: ${this.raio}`);
    }
}

class Quadrado extends Forma {
    constructor(x, y, cor, lado = 10) {
        super(x, y, cor);
        this.lado = lado;
    }

    clone() {
        return new Quadrado(this.x, this.y, this.cor, this.lado);
    }

    mostrar() {
        console.log(`Quadrado em (${this.x}, ${this.y}), cor: ${this.cor}, lado: ${this.lado}`);
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - PROTOTYPE
// ============================================

console.log("\n================= FORMAS ==================")
const circuloOriginal = new Circulo(5, 5, "Vermelho", 15);
const circuloClone = circuloOriginal.clone();
circuloClone.raio = 25;

const quadradoOriginal = new Quadrado(10, 10, "Azul", 20);
const quadradoClone = quadradoOriginal.clone();
quadradoClone.lado = 30;

circuloOriginal.mostrar();
circuloClone.mostrar();
quadradoOriginal.mostrar();
quadradoClone.mostrar();
console.log("\n")
