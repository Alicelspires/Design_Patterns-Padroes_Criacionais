/*
QUESTÃO-4.7: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Builder: Um sistema de relatórios permite montar documentos com capa, sumário,
conteúdo e gráficos. Modele a construção desses relatórios passo a passo usando um Diretor e
Builder.
*/

// Builder
class RelatorioBuilder{
    addCapa(){}
    addSumario(){}
    addConteudo(){}
    addGraficos(){}
    getRelatorio(){}
}

// Builders
class RelatorioPDF extends RelatorioBuilder{
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.capa = null;
        this.sumario = null;
        this.conteudo = null;
        this.grafico = null;
    }

    addCapa(titulo) {
        this.capa = `Capa: ${titulo}`;
        return this;
    }

    addSumario(texto) {
        this.sumario = `Sumário: ${texto}`;
        return this;
    }

    addConteudo(texto) {
        this.conteudo = `Conteúdo: ${texto}`;
        return this;
    }

    addGraficos(grafico) {
        this.grafico = `Gráfico: ${grafico}`;
        return this;
    }

    getRelatorio() {
        const relatorio = new Relatorio(this.capa, this.sumario, this.conteudo, this.grafico);
        this.reset();
        return relatorio;
    }
}

// Product
class Relatorio {
    constructor(capa, sumario, conteudo, grafico) {
        this.capa = capa;
        this.sumario = sumario;
        this.conteudo = conteudo;
        this.grafico = grafico;
    }

    mostrar() {
        console.log(`
        =============== RELATÓRIO ===============
        ${this.capa}
        ${this.sumario}
        ${this.conteudo}
        ${this.grafico}
        =========================================
        `);
    }
}

// Director
class Director {
    constructor(builder) {
        this.builder = builder;
    }

    relatorioCompleto() {
        this.builder
            .addCapa("Relatório - 2025")
            .addSumario("Sumário do ano")
            .addConteudo("Dados financeiros, metas e resultados")
            .addGraficos("Gráfico de crescimento");
        return this.builder.getRelatorio();
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - BUILDER 
// ============================================

const builderPDF = new RelatorioPDF();
const director = new Director(builderPDF);
const relatorioCompletoDirector = director.relatorioCompleto()

relatorioCompletoDirector.mostrar()