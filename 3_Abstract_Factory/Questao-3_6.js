/*
QUESTÃO-3.6: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Abstract Method: Um e-commerce possui duas linhas de produtos: eletrônicos e
moda. Cada tipo possui fábricas diferentes. Modele a aplicação usando Abstract Factory, com
fábricas concretas e interfaces de produto.
*/

// Interface Produto
class Fabrica {
    criarProdutos(){}
}

// Produtos concretos - Eletrônicos
class FabricaEletronico extends Fabrica {
    criarProdutos(){
        return [new Smartphone(), new Tablet()];
    }
}

// Produtos concretos - Moda
class FabricaModa extends Fabrica {
    criarProdutos(){
        return [new Camiseta(), new Tenis()];
    }
}

// Interface ProdutoEspecifico
class Eletronico {
    tipoProduto(){};
}

class Smartphone extends Eletronico{
    tipoProduto(){
        console.log("\t - Smartphone");
    }
}

class Tablet extends Eletronico {
    tipoProduto() {
        console.log("\t - Tablet");
    }
}

// Interface Detalhe
class Moda{
    tipoProduto(){};
}


class Camiseta extends Moda{
    tipoProduto() {
        console.log("\t - Camiseta");
    }
}

class Tenis extends Moda {
    tipoProduto() {
        console.log("\t - Tenis");
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - ABSTRACT FACTORY 
// ============================================

function mostrarProdutos(fabrica, nomeLinha) {
    console.log(`\n============== Linha ${nomeLinha} ==============\n`);
    const produtos = fabrica.criarProdutos();
    produtos.forEach(p => p.tipoProduto());
}


mostrarProdutos(new FabricaEletronico(), "Eletrônicos");
mostrarProdutos(new FabricaModa(), "Moda");
console.log("\n")