/*
QUESTÃO-6.8: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Syngleton:Um sistema de licenças de software deve manter apenas uma instância do
verificador de licença. Modele com Singleton assegurando controle único de validação.
*/

// Singleton
class VerificadorLicenca {
    static instancia = null;

    constructor() {
        if (VerificadorLicenca.instancia) {
            return VerificadorLicenca.instancia;
        }

        this.licencaValida = false;
        VerificadorLicenca.instancia = this;
    }

    static getInstancia() {
        if (!VerificadorLicenca.instancia) {
            VerificadorLicenca.instancia = new VerificadorLicenca();
        }
        return VerificadorLicenca.instancia;
    }

    setLicencaValida(valor) {
        this.licencaValida = valor;
    }

    verificar() {
        return this.licencaValida;
    }

    mostrarStatus() {
        console.log("\n===== Verificador de Licença =====");
        console.log(`Licença válida? ${this.licencaValida}`);
        console.log("================================\n");
    }
}

// ============================================
// USO DO PADRÃO DE PROJETO - SINGLETON
// ============================================

const licenca1 = VerificadorLicenca.getInstancia();
licenca1.setLicencaValida(true);
licenca1.mostrarStatus();

const licenca2 = VerificadorLicenca.getInstancia();
licenca1.setLicencaValida(false);
licenca2.mostrarStatus();

console.log("Mesma instância?", licenca1 === licenca2);
