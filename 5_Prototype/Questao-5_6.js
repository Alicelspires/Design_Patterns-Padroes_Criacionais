/*
QUESTÃO-5.6: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Prototype:Uma pizzaria utiliza protótipos de pizzas para clonagem rápida dos pedidos.
Modele com Prototype e permita alterações no clone (ex: ingredientes extras)
*/

// Prototype
class Pizza {
    constructor(nome, ingredientes, tamanho) {
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.tamanho = tamanho;
    }

    clone() {
        return new this.constructor(this.nome, [...this.ingredientes], this.tamanho);
    }

    mostrar() {
        console.log(`
        ================== Pizza ==================
        Nome: Pizza ${this.nome}
        Tamanho: ${this.tamanho}
        Ingredientes: ${this.ingredientes.map(ing => `${ing}`).join(", ")}
        ===========================================
        `);
    }
}

// Concrete Prototypes
class PizzaMussarela extends Pizza {
    constructor() {
        super("Mussarela", ["Queijo", "Molho de Tomate"], "Grande");
    }
}

class PizzaCalabresa extends Pizza {
    constructor() {
        super("Calabresa", ["Calabresa", "Cebola", "Queijo"], "Média");
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - PROTOTYPE
// ============================================

const prototipoMussarela = new PizzaMussarela();
const prototipoCalabresa = new PizzaCalabresa();

const pedido1 = prototipoMussarela.clone();
pedido1.ingredientes.push("Orégano");

const pedido2 = prototipoCalabresa.clone();
pedido2.ingredientes.push("Azeitona");

pedido1.mostrar();
pedido2.mostrar();
