/*
QUESTÃO-4.10: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Builder: Um menu de aplicativo permite adicionar título, ícones, atalhos e submenu.
Modele a estrutura usando Builder, permitindo composição fluente.
*/

// Builder
class MenuBuilder {
    setTitulo(){}
    setIcone(){}
    setAtalho(){}
    addSubmenu(){}
    build(){}
}

// Builders
class AppMenuBuilder extends MenuBuilder {
    constructor(){
        super();
        this.reset();
    }

    setTitulo(titulo){
        this.titulo = titulo || "Sem título";
        return this;
    }

    setIcone(icone){
        this.icone = icone || "Sem ícone";
        return this;
    }

    setAtalho(atalho){
        this.atalho = atalho || "Sem atalho";
        return this;
    }

    addSubmenu(submenu){
        this.submenus.push(submenu || "Sem submenus");
        return this;
    }

    reset(){
        this.titulo = "";
        this.icone = "";
        this.atalho = "";
        this.submenus = [];
    }

    build(){
        const menu = new Menu(
            this.titulo,
            this.icone,
            this.atalho,
            this.submenus
        );
        this.reset();
        return menu;
    }
}

// Product
class Menu {
    constructor(titulo, icone, atalho, submenus){
        this.titulo = titulo;
        this.icone = icone;
        this.atalho = atalho;
        this.submenus = submenus;
    }

    mostrar(){
        console.log(`\n================ MENU ================`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Ícone: ${this.icone}`);
        console.log(`Atalho: ${this.atalho}`);

        if(this.submenus.length > 0){
            console.log("Submenus:");
            this.submenus.forEach((s, i) => {
                console.log(`\t${i+1}. ${s.titulo} (${s.icone}, ${s.atalho})`);
            });
        } else {
            console.log("Sem submenus");
        }
        console.log("======================================\n");
    }
}

// ================== USO ==================
const builder = new AppMenuBuilder();

const menuArquivo = builder
    .setTitulo("Arquivo")
    .setIcone("📂")
    .setAtalho("Ctrl+A")
    .addSubmenu(
        new AppMenuBuilder()
            .setTitulo("Novo")
            .setIcone("✨")
            .setAtalho("Ctrl+N")
            .build()
    )
    .addSubmenu(
        new AppMenuBuilder()
        .setTitulo("Abrir")
        .setIcone("📄")
        .setAtalho("Ctrl+O")
        .build()
    )
    .addSubmenu(
        new AppMenuBuilder()
        .setTitulo("Sair")
        .setIcone("❌")
        .setAtalho("Alt+F4")
        .build()
    )
    .build();

menuArquivo.mostrar();