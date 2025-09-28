/*
QUESTÃO-3.5: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Abstract Method: Um jogo permite criar personagens heróicos e malvados, cada um
com armas e habilidades diferentes. Modele o sistema usando Abstract Factory para garantir que
todos os elementos criados pertençam à mesma família temática.
*/

// Interface Personagem
class Personagem {
    arma(){};
    habilidade(){};
}

class Heroi extends Personagem{
    arma(){
        return new EspadaDeCristal();
    }
    habilidade(){
        return new  ConjuradorDeLuz();
    }
}

class Vilao extends Personagem{
    arma(){
        return new MachadoSombrio();
    }
    habilidade(){
        return new ConjurarSobras();
    }
}

// Interface Arma
class Arma{
    tipoArma(){};
}

class EspadaDeCristal extends Arma {
    tipoArma(){
        console.log("Usando espada de cristal")
    }
}

class MachadoSombrio extends Arma {
    tipoArma(){
        console.log("Usando machado das sombras")
    }
}

// Interface Habilidades
class Habilidades{
    tipoHabilidade(){};
}

class ConjuradorDeLuz extends Habilidades {
    tipoHabilidade(){
        console.log("Conjurando magia de luz")
    }
}

class ConjurarSobras extends Habilidades {
    tipoHabilidade(){
        console.log("Conjurando Sombras")
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - ABSTRACT FACTORY 
// ============================================

console.log("\n============== Heroi ==============\n")
const personagem1 = new Heroi();

const arma1 = personagem1.arma();
arma1.tipoArma();

const habilidade1 = personagem1.habilidade();
habilidade1.tipoHabilidade();

console.log("\n============== Vilao ==============\n")
const personagem2 = new Vilao();

const arma2 = personagem2.arma();
arma2.tipoArma()

const habilidade2 = personagem2.habilidade();
habilidade2.tipoHabilidade()

console.log("\n")