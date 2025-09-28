/*
QUESTÃO-5.5: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Prototype: Uma editora digital utiliza documentos como contratos, cartas e relatórios.
Modele o sistema com Prototype, criando uma classe Documento com método clone(), e classes
derivadas.
*/

class Document {
    constructor(titulo, conteudo){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    clone(){
        return new Document(this.titulo, this.conteudo)
    }
    mostrar(){
        console.log(`
        ========== Documento ==========
        Título: ${this.titulo}
        Conteúdo: ${this.conteudo}`);
    }
}

class Carta extends Document{
    constructor(titulo, conteudo, remetente, destinatario){
        super(titulo, conteudo)
        this.remetente = remetente
        this.destinatario = destinatario
    }

    clone(){
        return new Carta(this.titulo, this.conteudo, this.remetente, this.destinatario)
    }
    
    mostrar(){
        super.mostrar()
        console.log(`
        -------------------------------
        Remetente: ${this.remetente}
        Destinatario: ${this.destinatario}
        ===============================
        `);
    }
}

class Contrato extends Document{
    constructor(titulo, conteudo, assinador){
        super(titulo, conteudo)
        this.assinador = assinador
    }

    clone(){
        return new Contrato(this.titulo, this.conteudo, this.assinador)
    }
    
    mostrar(){
        super.mostrar()
        console.log(`
        -------------------------------=
        Assinador: ${this.assinador}
        ================================
        `);
    }
}

class Relatorio extends Document{
    constructor(titulo, conteudo, autor){
        super(titulo, conteudo)
        this.autor = autor
    }

    clone(){
        return new Relatorio(this.titulo, this.conteudo, this.autor)
    }
    
    mostrar(){
        super.mostrar()
        console.log(`
        -------------------------------
        Autor: ${this.autor}
        ===============================
        `);
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - PROTOTYPE
// ============================================

const contrato1 = new Contrato("Contrato de Trabalho", "Cláusulas de serviço...", "Empresa X");
contrato1.mostrar()
const contrato2 = contrato1.clone();
contrato2.mostrar()

const carta1 = new Carta("Carta de Apresentação", "Seja bem-vindo à equipe!", "João", "Maria");
carta1.mostrar()
const carta2 = carta1.clone();
carta2.mostrar()

const relatorio1 = new Relatorio("Relatório Financeiro", "Dados do trimestre...", "Departamento Financeiro");
relatorio1.mostrar()
const relatorio2 = relatorio1.clone();
relatorio2.mostrar()