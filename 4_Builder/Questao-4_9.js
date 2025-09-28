/*
QUESTÃO-4.9: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Builder: Um sistema de cadastro de estudantes permite definir nome, curso,
endereço, e-mail, celular, responsáveis. Implemente o Builder para esse caso, permitindo
preenchimento opcional dos dados.
*/

class BuilderCadastro {
    setNome(){}
    setCurso(){}
    setEndereco(){}
    setEmail(){}
    setCelular(){}
    setResponsavel(){}
}

class SistemaCadastroBuilder extends BuilderCadastro{
    constructor(){
        super()
        this.reset()
    }

    setNome(nome){
        this.nome = nome || "Nome não definido";
        return this;
    }

    setCurso(curso){
        this.curso = curso || "Curso não definido";
        return this;
    }

    setEndereco(endereco){
        this.endereco = endereco || "Enderço não definido";
        return this;
    }

    setEmail(email){
        this.email = email || "Email não definido";
        return this;
    }

    setCelular(celular){
        this.celular = celular || "Celular não definido";
        return this;
    }

    setResponsavel(responsavel){
        this.responsavel.push(responsavel || "Responsavel não definido");
        return this;
    }

    reset(){
        this.nome = "";
        this.curso = "";
        this.endereco = "";
        this.email = "";
        this.celular = "";
        this.responsavel = [];
    }

    getInformacoes(){
        const cadastro = new Cadastro(
            this.nome, 
            this.curso,
            this.endereco,
            this.email,
            this.celular,
            this.responsavel
        )

        this.reset()

        return cadastro;
    }
}

class Cadastro{
    constructor(nome, curso, endereco, email, celular, responsavel){
        this.nome = nome;
        this.curso = curso;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
        this.responsavel = responsavel;
    }

    mostrar(){
        console.log(`
        \n
        ============= Sistema Cadastro =============
        Nome: ${this.nome}
        Curso: ${this.curso}
        Endereço: ${this.endereco}
        Email: ${this.email}
        Celular: ${this.celular}
        Responsáveis: ${this.responsavel.map(r => r).join(", ")}
        ============================================\n`);
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - BUILDER 
// ============================================

const cadastro1 = new SistemaCadastroBuilder()
const infos = cadastro1
    .setNome("Alice")
    .setCurso("DSM")
    .setEndereco("São Paulo")
    .setEmail("alice@g")
    .setCelular("2345-6789")
    .setResponsavel("Liana")
    .setResponsavel("Nilto")
    .getInformacoes()

infos.mostrar()