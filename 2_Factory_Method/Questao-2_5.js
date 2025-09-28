/*
QUESTÃO-2.5: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Factory Method: Uma empresa de software cria interfaces de usuário para Windows,
Mac e Linux. Modele uma estrutura usando Factory Method para criar os elementos da interface de
forma independente da plataforma.
*/

// Interface de Botao
class ElementosInterface {
    renderizar(){}
}

class BotaoWindows extends ElementosInterface{
    renderizar(){
        console.log("Renderizando botão de Windows...")
    }
}

class BotaoMac extends ElementosInterface{
    renderizar(){
        console.log("Renderizando botão de Mac...")
    }
}

class BotaoLinux extends ElementosInterface{
    renderizar(){
        console.log("Renderizando botão de Linux...")
    }
}

// Interface SO
class SistemaOperacional {
    elementoInterface(){}
}

class SistemaWindows extends SistemaOperacional{
    elementoInterface(){
        return new BotaoWindows()
    }
}

class SistemaMac extends SistemaOperacional{
    elementoInterface(){
        return new BotaoMac()
    }
}

class SistemaLinux extends SistemaOperacional{
    elementoInterface(){
        return new BotaoLinux()
    }
}

// =========================================
// USO DO PADRÃO DE PROJETO - FACTORY METHOD 
// =========================================

const sistemaWindows = new SistemaWindows();
const sistemaMac = new SistemaMac();
const sistemaLinux = new SistemaLinux();

console.log("\n==== Elementos das interfaces de cada SO ====");
const botaoWindows = sistemaWindows.elementoInterface();
const botaoMac = sistemaMac.elementoInterface();
const botaoLinux = sistemaLinux.elementoInterface();

botaoMac.renderizar();
botaoLinux.renderizar();
botaoWindows.renderizar();

console.log("\n")