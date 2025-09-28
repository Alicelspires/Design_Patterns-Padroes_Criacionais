/*
QUESTÃO-5.9: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Prototype: Um sistema de agendamento de aulas usa modelos de horários que são
clonados e ajustados. Modele com Prototype criando uma classe Horario com suporte a clonagem.
*/

// Prototype
class Horario {
    constructor(disciplina, inicio, fim) {
        this.disciplina = disciplina;
        this.inicio = inicio;
        this.fim = fim;
    }

    clone() {
        throw new Error("O método clone() deve ser implementado nas subclasses");
    }

    mostrar() {
        console.log(`Disciplina: ${this.disciplina}`);
        console.log(`Horário: ${this.inicio} - ${this.fim}`);
        console.log('---------------------------');
    }
}

// Concrete Prototypes
class HorarioMatutino extends Horario {
    constructor(disciplina, inicio, fim) {
        super(disciplina, inicio, fim);
    }

    clone() {
        return new HorarioMatutino(this.disciplina, this.inicio, this.fim);
    }

    mostrar(){
        super.mostrar()
        console.log("Periodo Matutino");
        console.log("---------------------------")
    }
}

class HorarioVespertino extends Horario {
    constructor(disciplina, inicio, fim) {
        super(disciplina, inicio, fim);
    }

    clone() {
        return new HorarioVespertino(this.disciplina, this.inicio, this.fim);
    }

    mostrar(){
        super.mostrar()
        console.log("Periodo Vespertino");
        console.log("---------------------------")
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - PROTOTYPE
// ============================================

console.log("\n")
const horarioMat = new HorarioMatutino("Matemática", "08:00", "09:30");
horarioMat.mostrar();

// Clone
const horarioMatClone = horarioMat.clone();
horarioMatClone.disciplina = "Física";
horarioMatClone.inicio = "09:40";
horarioMatClone.fim = "11:10";

console.log("----------------- Ajustado:");
horarioMatClone.mostrar();
console.log("\n")

const horarioVesp = new HorarioVespertino("Química", "14:00", "15:30");
horarioVesp.mostrar();

// Clone
const horarioVespClone = horarioVesp.clone();
horarioVespClone.disciplina = "Biologia";

console.log("----------------- Ajustado:");
horarioVespClone.mostrar();
console.log("\n")
