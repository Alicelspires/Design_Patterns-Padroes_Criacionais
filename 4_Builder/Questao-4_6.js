/*
QUESTÃO-4.6: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Builder: Um sistema de pizzaria permite que o cliente monte sua própria pizza com
diferentes ingredientes. Modele a solução usando Builder, separando cada etapa da montagem em
métodos do builder.
*/

class Tamanho {
    constructor(tipo){
        this.tipo = tipo
    }
}

class Massa {
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Molho {
    constructor(tipo){
        this.tipo = tipo
    }
}

class Cobertura {
    constructor(tipo){
        this.tipo = tipo
    }
}

// Builder
class Builder{
    addTamanho(){}
    addMassa(){}
    addCobertura(){}
    addMolho(){}
}

// Builders
class PizzaBuilder extends Builder{
    constructor(){
        super()
        this.tamanho = null;
        this.massa = null;
        this.cobertura = null;
        this.molho = null;
    }

    addTamanho(tipo){
        this.tamanho = new Tamanho(tipo)
        return this;
    }

    addMassa(tipo){
        this.massa = new Massa(tipo)
        return this;
    }

    addCobertura(tipo){
        this.cobertura = new Cobertura(tipo)
        return this
    }

    addMolho(tipo){
        this.molho = new Molho(tipo)
        return this
    }

    fazer(){
        return new Pizza(this.molho, this.tamanho, this.massa, this.cobertura)
    }
}

// Product
class Pizza {
    constructor(molho, tamanho, massa, cobertura){
        this.tamanho = tamanho;
        this.massa = massa;
        this.cobertura = cobertura;
        this.molho = molho;
    }

    mostrarDetalhes(){
        console.log(`
            PIZZA:
            \tTamanho: ${this.tamanho.tipo}
            \tMassa: ${this.massa.tipo}
            \tCobertura: ${this.cobertura.tipo}
            \tMolho: ${this.molho.tipo}
        `)
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - BUILDER 
// ============================================

const builderPizza = new PizzaBuilder();

const pizzaTradicional = builderPizza
    .addMassa('Tradicional')
    .addTamanho('Grande')
    .addMolho('Tomate')
    .addCobertura('Frango e Catupiry')
    .fazer();

const pizzaVegetariana = builderPizza
    .addMassa('Trigo')
    .addTamanho('Broto')
    .addMolho('Tomate com Manjericão')
    .addCobertura('Brocolis com Queijo')
    .fazer();

pizzaTradicional.mostrarDetalhes()
pizzaVegetariana.mostrarDetalhes()