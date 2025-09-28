/*
QUESTÃO-3.7: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Abstract Method: Você está desenvolvendo uma ferramenta multiplataforma. Crie um
exemplo usando Abstract Factory para construir a interface de usuário (botões, menus, janelas) de
forma consistente para cada SO.
*/

// Fábrica abstrata
class FabricaUI {
    criarBotao() {}
    criarMenu() {}
    criarJanela() {}
}

// Fábricas concretas
class FabricaWindows extends FabricaUI {
    criarBotao(){ 
        return new BotaoWindows(); 
    }
    criarMenu(){ 
        return new MenuWindows(); 
    }
    criarJanela(){ 
        return new JanelaWindows(); 
    }
}

class FabricaMac extends FabricaUI {
    criarBotao(){ 
        return new BotaoMac(); 
    }
    criarMenu(){ 
        return new MenuMac();
    }
    criarJanela(){ 
        return new JanelaMac(); 
    }
}

class FabricaLinux extends FabricaUI {
    criarBotao(){ 
        return new BotaoLinux();
    }
    criarMenu(){ 
        return new MenuLinux();
    }
    criarJanela(){ 
        return new JanelaLinux();
    }
}

// Produtos abstratos
class Botao { 
    render(){} 
}
class Menu { 
    exibir(){} 
}
class Janela { 
    abrir(){} 
}

// Produtos concretos - Windows
class BotaoWindows extends Botao { 
    render(){ 
        console.log("Botão Windows"); 
    } 
}

class MenuWindows extends Menu {
    exibir(){ 
        console.log("Menu Windows");
    }
}

class JanelaWindows extends Janela { 
    abrir() { console.log("Janela Windows");
    }
}

// Produtos concretos - Mac
class BotaoMac extends Botao {
    render() { console.log("Botão Mac");
    }
}

class MenuMac extends Menu {
    exibir() { 
        console.log("Menu Mac");
    }
}

class JanelaMac extends Janela {
    abrir() { 
        console.log("Janela Mac");
    } 
}

// Produtos concretos - Linux
class BotaoLinux extends Botao { 
    render(){
        console.log("Botão Linux");
    }
}

class MenuLinux extends Menu {
    exibir(){
        console.log("Menu Linux");
    }
}

class JanelaLinux extends Janela {
    abrir(){
        console.log("Janela Linux");
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - ABSTRACT FACTORY 
// ============================================

function mostrarUI(fabrica, sistema) {
    console.log(`\n===== Interface do ${sistema} =====\n`);
    const botao = fabrica.criarBotao();
    const menu = fabrica.criarMenu();
    const janela = fabrica.criarJanela();

    botao.render();
    menu.exibir();
    janela.abrir();
}

// Criando interfaces para cada SO
mostrarUI(new FabricaWindows(), "Windows");
mostrarUI(new FabricaMac(), "Mac");
mostrarUI(new FabricaLinux(), "Linux");

console.log("\n")