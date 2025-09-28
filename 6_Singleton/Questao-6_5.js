/*
QUESTÃO-6.5: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Syngleton: Um sistema de log deve garantir que todas as partes da aplicação escrevam
no mesmo arquivo de log. Modele com Singleton usando um método estático para acesso global ao
logger.
*/

// Singleton
class Logger{
    static instancia = null;

    constructor(){
        if(Logger.instancia){
            return Logger.instancia;
        }

        this.logar = {}
        return Logger.instancia = this;
    }

    static getInstancia() {
        if (!Logger.instancia) {
            Logger.instancia = new Logger();
        }
        return Logger.instancia;
    }

    getLogados(){
        return Object.keys(this.logar);
    }

    setLogar(nome, email){
        return this.logar[nome] = email;
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - SINGLETON
// ============================================

const logger1 = new Logger()
logger1.setLogar("Alice", "alice@g")

const logger2 = Logger.getInstancia();
logger2.setLogar("John", "john@g.com");

console.log("\n")
console.log("Usuario: " + logger1.getLogados());
console.log(`Esta na mesma instancia? ${logger1 === logger2}`);
console.log("\n")