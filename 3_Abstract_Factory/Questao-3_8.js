/*
QUESTÃO-3.8: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Abstract Method: Um sistema bancário internacional precisa adaptar-se para criar
componentes diferentes em cada país (menu, idioma, layout). Modele com Abstract Factory para
garantir coerência e manutenção
*/

// Fábrica abstrata
class SistemaBanco {
    criarMenu() {}
    criarIdioma() {}
    criarLayout() {}
}

// Fábricas concretas
class SistemaBrasil extends SistemaBanco {
    criarMenu() {
        return new MenuBrasil();
    }
    criarIdioma() {
        return new IdiomaPT();
    }
    criarLayout() {
        return new LayoutBrasil();
    }
}

class SistemaEUA extends SistemaBanco {
    criarMenu() {
        return new MenuEUA(); 
    }
    criarIdioma() {
        return new IdiomaEN();
    }
    criarLayout() {
        return new LayoutEUA();
    }
}

// Produtos abstratos
class Menu {
    exibir(){}
}
class Idioma {
    traduzir(){}
}
class Layout {
    render(){}
}

// Produtos concretos - Brasil
class MenuBrasil extends Menu {
    exibir(){
        console.log("Menu: Contas, Transferências, Pagamentos");
    }
}

class IdiomaPT extends Idioma {
    traduzir(){ 
        console.log("Idioma: Português");
    }
}

class LayoutBrasil extends Layout {
    render(){
        console.log("Layout: Tema verde e amarelo");
    }
}

// Produtos concretos - EUA
class MenuEUA extends Menu {
    exibir() { 
        console.log("Menu: Accounts, Transfers, Payments");
    } 
}

class IdiomaEN extends Idioma {
    traduzir(){ 
        console.log("Idioma: English");
    } 
}

class LayoutEUA extends Layout {
    render(){ 
        console.log("Layout: Blue theme");
    } 
}


// ============================================
// USO DO PADRÃO DE PROJETO - ABSTRACT FACTORY 
// ============================================

function mostrarInterface(sistema, pais) {
    
    console.log(`\n===== Sistema Bancário: ${pais} =====\n`);
    const menu = sistema.criarMenu();
    const idioma = sistema.criarIdioma();
    const layout = sistema.criarLayout();

    menu.exibir();
    idioma.traduzir();
    layout.render();
}

mostrarInterface(new SistemaBrasil(), "Brasil");
mostrarInterface(new SistemaEUA(), "EUA");

console.log("\n")