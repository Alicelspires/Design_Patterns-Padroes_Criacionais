/*
QUESTÃO-6.6: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Syngleton: Uma aplicação de vendas online deve garantir um único carrinho de
compras por usuário. Modele com Singleton garantindo consistência nas operações do carrinho.
*/

// Singleton
class Carrinho {
    static instancia = null;

    constructor() {
        if (Carrinho.instancia) {
            return Carrinho.instancia;
        }
        this.itens = [];
        Carrinho.instancia = this;
    }

    static getInstancia() {
        if (!Carrinho.instancia) {
            Carrinho.instancia = new Carrinho();
        }
        return Carrinho.instancia;
    }

    addItem(item, quantidade = 1) {
        this.itens.push({ item, quantidade });
    }

    removerItem(item) {
        this.itens = this.itens.filter(i => i.item !== item);
    }

    listItens() {
        console.log("\n===== Carrinho de Compras =====");
        if (this.itens.length === 0) {
            console.log("Carrinho vazio");
        } else {
            this.itens.forEach((i, index) => {
                console.log(`${index + 1}. ${i.item} - Quantidade: ${i.quantidade}`);
            });
        }
        console.log("===============================\n");
    }

    cleanCarrinho() {
        this.itens = [];
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - SINGLETON
// ============================================

const carrinho1 = Carrinho.getInstancia();
carrinho1.addItem("Camiseta", 2);
carrinho1.addItem("Tênis", 1);

console.log("Itens no carrinho 1:");
carrinho1.listItens();

const carrinho2 = Carrinho.getInstancia();
carrinho2.addItem("Boné", 1);

console.log("Itens no carrinho 2:");
carrinho2.listItens();

console.log("Mesma instância?", carrinho1 === carrinho2);
