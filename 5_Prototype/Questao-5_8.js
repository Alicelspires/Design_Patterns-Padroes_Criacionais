/*
QUESTÃO-5.8: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Prototype: Uma aplicação de RH precisa clonar perfis de cargos com pequenas
variações de requisitos. Modele usando Prototype com base em modelos de cargo.
*/

// Prototype
class Cargo {
    constructor(nome, salarioBase, beneficios) {
        this.nome = nome;
        this.salarioBase = salarioBase;
        this.beneficios = beneficios;
    }

    clone() {
        return new this.constructor(this.nome, this.salarioBase, [...this.beneficios]);
    }

    mostrar() {
        console.log(`Cargo: ${this.nome}`);
        console.log(`Salário Base: ${this.salarioBase}`);
        console.log(`Benefícios: ${this.beneficios.join(", ")}`);
        console.log('--------------------------------------------');
    }
}

// Concrete Prototypes
class CargoTI extends Cargo {
    constructor(nome, salarioBase, beneficios, linguagens) {
        super(nome, salarioBase, beneficios);
        this.linguagens = linguagens;
    }

    clone() {
        return new CargoTI(this.nome, this.salarioBase, [...this.beneficios], [...this.linguagens]);
    }

    mostrar() {
        super.mostrar();
        console.log(`Linguagens: ${this.linguagens.join(", ")}`);
        console.log("--------------------------------------------\n")
    }
}

class CargoRH extends Cargo {
    constructor(nome, salarioBase, beneficios, experiencia = 0) {
        super(nome, salarioBase, beneficios);
        this.experiencia = experiencia;
    }

    clone() {
        return new CargoRH(this.nome, this.salarioBase, [...this.beneficios], this.experiencia);
    }

    mostrar() {
        super.mostrar();
        console.log(`Experiência: ${this.experiencia} anos`);
        console.log("--------------------------------------------\n")
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - PROTOTYPE
// ============================================

const cargoTIOriginal = new CargoTI("Desenvolvedor", 8000, ["Vale Refeição"], ["JavaScript", "Python"]);
const cargoTIClone = cargoTIOriginal.clone();
cargoTIClone.linguagens.push("Java");

const cargoRHOriginal = new CargoRH("Analista de RH", 5000, ["Vale Transporte"], 2);
const cargoRHClone = cargoRHOriginal.clone();
cargoRHClone.experiencia = 5;

cargoTIOriginal.mostrar();
cargoTIClone.mostrar();
cargoRHOriginal.mostrar();
cargoRHClone.mostrar();
