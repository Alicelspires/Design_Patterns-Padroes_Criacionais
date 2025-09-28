/*
QUESTÃO-6.4: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Syngleton: Implemente um gerenciador de configurações de sistema que garanta
apenas uma instância acessível globalmente. Use uma classe com método estático getInstance().
*/

// Singleton
class GerenciadorDeSistema{
    static instancia = null;

    constructor(){
        if(GerenciadorDeSistema.instancia){
            return GerenciadorDeSistema.instancia
        }
        this.config = {}
        GerenciadorDeSistema.instancia = this;
    }

    getInstance(){
        if (!GerenciadorDeSistema.instancia) {
            GerenciadorDeSistema.instancia = new GerenciadorDeSistema();
        }
        return GerenciadorDeSistema.instancia;
    }

    setConfig(chave, valor){
        this.config[chave] = valor;
    }

    getConfig(chave) {
        return this.config[chave];
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - SINGLETON
// ============================================

const sistema1 = new GerenciadorDeSistema();
sistema1.setConfig("tema", "escuro");

const sistema2 = new GerenciadorDeSistema();

console.log("\n")
console.log("TEMA: " + sistema2.getConfig("tema"));
console.log(`Esta na mesma instancia? ${sistema1 === sistema2}`);
console.log("\n")