/*
QUESTÃO-4.8: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Builder: Em uma aplicação de educação, o aluno monta sua grade horária semanal
com disciplinas, horários e salas. Use Builder para permitir uma construção flexível e personalizável
da grade.
*/

// Builder
class GradeBuilder {
    disciplinas(){}
    horarios(){}
    salas(){}
    getGrade(){}
}

class GradeSemanal extends GradeBuilder{
    constructor() {
        super();
        this.reset();
    }

    disciplina(nome){
        this.disciplinas.push(nome);
        return this;

    }

    horario(horario){
        this.horarios.push(horario);
        return this;
    }

    sala(sala){
        this.salas.push(sala);
        return this;
    }

    reset(){
        this.disciplinas = [];
        this.horarios = [];
        this.salas = [];
    }
    
    getGrade(){
        const grade = new Grade(this.disciplinas, this.horarios, this.salas);
        this.reset(); 
        return grade;
    }
}

class Grade {
    constructor(disciplinas, horarios, salas) {
        this.disciplinas = disciplinas;
        this.horarios = horarios;
        this.salas = salas;
    }

    mostrar() {
        console.log("\n============= GRADE HORÁRIA =============");
        this.disciplinas.forEach((disciplina, i) => {
            const horario = this.horarios[i];
            const sala = this.salas[i];
            console.log(`${disciplina} - ${horario} - ${sala}`);
        });
        console.log("=========================================\n");
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - BUILDER
// ============================================

const builderGrade = new GradeSemanal();
const gradeSemanal = builderGrade
    .disciplina("Matemática").horario("08:00 - 09:30").sala("Sala 1")
    .disciplina("Português").horario("09:40 - 11:10").sala("Sala 2")
    .disciplina("História").horario("11:20 - 12:50").sala("Sala 3")
    .disciplina("Física").horario("14:00 - 15:30").sala("Lab 1")
    .getGrade();
    
gradeSemanal.mostrar()