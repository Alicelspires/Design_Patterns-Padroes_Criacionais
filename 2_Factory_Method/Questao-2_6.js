/*
QUESTÃO-2.6: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Factory Method: Uma aplicação de agendamento de serviços permite agendar
consultas, reparos e entregas. O aluno deve implementar um Criador abstrato com um método
factory, e classes concretas para cada tipo de serviço.
*/

// Interface Serviço
class Servico {
    executar() {}
}

// Produtos concretos
class Consulta extends Servico {
    executar() {
        console.log("Agendando uma consulta médica...");
    }
}

class Reparo extends Servico {
    executar() {
        console.log("Agendando um reparo técnico...");
    }
}

class Entrega extends Servico {
    executar() {
        console.log("Agendando uma entrega de produto...");
    }
}

// Classe abstrata Agendamento (Criador)
class Agendamento {
    criarServico() {}

    processarAgendamento() {
        const servico = this.criarServico();
        servico.executar();
    }
}

// Criadores concretos
class AgendamentoConsulta extends Agendamento {
    criarServico() {
        return new Consulta();
    }
}

class AgendamentoReparo extends Agendamento {
    criarServico() {
        return new Reparo();
    }
}

class AgendamentoEntrega extends Agendamento {
    criarServico() {
        return new Entrega();
    }
}


// =========================================
// USO DO PADRÃO DE PROJETO - FACTORY METHOD 
// =========================================

console.log("\n==== Serviços de Agendamento ====");

function cliente(agendamento) {
    agendamento.processarAgendamento();
}

cliente(new AgendamentoConsulta());
cliente(new AgendamentoReparo());
cliente(new AgendamentoEntrega());

console.log("\n")