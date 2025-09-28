/*
QUESTÃO-3.8: Utilizando sua linguagem de POO desejada (recomenda-se JavaScript), resolva com
o Padrão GoF - Abstract Method: Um simulador de veículos precisa criar diferentes componentes
(motor, roda, freio) conforme o tipo de carro (esportivo ou popular). Modele com Abstract Factory com
classes fábrica especializadas.
*/

// Fábrica abstrata
class FabricaCarro {
    criarMotor() {}
    criarRoda() {}
    criarFreio() {}
}

// Fábricas concretas
class FabricaEsportivo extends FabricaCarro {
    criarMotor(){
        return new MotorEsportivo();
    }
    criarRoda(){ 
        return new RodaEsportiva(); 
    }
    criarFreio(){ 
        return new FreioEsportivo(); 
    }
}

class FabricaPopular extends FabricaCarro {
    criarMotor(){ 
        return new MotorPopular(); 
    }
    criarRoda(){ 
        return new RodaPopular(); 
    }
    criarFreio(){ 
        return new FreioPopular(); 
    }
}

// Produtos abstratos
class Motor { 
    tipo(){}
}

class Roda { 
    tipo(){}
}

class Freio { 
    tipo(){}
}

// Produtos concretos - Esportivo
class MotorEsportivo extends Motor {
    tipo(){
        console.log("Motor: V8 500cv"); 
    } 
}

class RodaEsportiva extends Roda {
    tipo(){ 
        console.log("Roda: Liga leve 19\""); 
    } 
}

class FreioEsportivo extends Freio { 
    tipo(){ 
        console.log("Freio: Disco cerâmico"); 
    } 
}

// Produtos concretos - Popular
class MotorPopular extends Motor {
    tipo(){ console.log("Motor: 1.0 75cv"); 

    } 
}

class RodaPopular extends Roda { 
    tipo(){ 
        console.log("Roda: Aço 14\""); 
    } 
}

class FreioPopular extends Freio { 
    tipo(){ 
        console.log("Freio: Tambor"); 
    } 
}

// ============================================
// USO DO PADRÃO DE PROJETO - ABSTRACT FACTORY 
// ============================================
function montarCarro(fabrica, tipoCarro) {
    console.log(`\n===== Carro: ${tipoCarro} =====\n`);
    const motor = fabrica.criarMotor();
    const roda = fabrica.criarRoda();
    const freio = fabrica.criarFreio();

    motor.tipo();
    roda.tipo();
    freio.tipo();
}

montarCarro(new FabricaEsportivo(), "Esportivo");
montarCarro(new FabricaPopular(), "Popular");

console.log("\n")