/*
QUESTÃO-6.7: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Syngleton: Um cache de dados compartilhado por diversos módulos precisa ser
centralizado. Modele com Singleton para manter o cache acessível de forma segura.
*/

// Singleton
class Cache {
    static instancia = null;

    constructor() {
        if (Cache.instancia) {
            return Cache.instancia;
        }
        this.dados = {};
        Cache.instancia = this;
    }

    static getInstancia() {
        if (!Cache.instancia) {
            Cache.instancia = new Cache();
        }
        return Cache.instancia;
    }

    setDados(chave, valor) {
        this.dados[chave] = valor;
    }

    getDados(chave) {
        return this.dados[chave];
    } 

    removeDados(chave) {
        delete this.dados[chave];
    }

    cleanCache() {
        this.dados = {};
    }

    mostrar() {
        console.log("\n===== Cache Atual =====");
        console.log(this.dados);
        console.log("======================\n");
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - SINGLETON
// ============================================

const cache1 = Cache.getInstancia();
cache1.setDados("usuario1", { nome: "Alice", idade: 25 });
cache1.setDados("usuario2", { nome: "John", idade: 30 });

console.log("Conteúdo do cache1:");
cache1.mostrar();

const cache2 = Cache.getInstancia();
cache2.setDados("usuario3", { nome: "Maria", idade: 28 });

console.log("Conteúdo do cache2:");
cache2.mostrar();

console.log("Mesma instância?", cache1 === cache2);