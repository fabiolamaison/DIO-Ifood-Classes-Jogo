// Declaração da classe herói
class heroi{

    // Lista de classes existentes
    classes = ["mago","guerreiro","monge","ninja"]

    // Função construtora, receberá os argumentos 'nome' 'idade' e 'tipo'
    constructor(nome,idade,tipo){
        // Condicional que avalia se a classe informada é valida
        // valor de imput é transformado em string e posto em letras minúsculas
        // como medida para evitar erros
        if (this.classes.includes(tipo.toString().toLowerCase())) {
            this.tipo = tipo.toString().toLowerCase()
            this.nome = nome;
            this.idade = parseInt(idade);
        } else {
            // caso o valor para tipo seja invalido, é impresso a seguinte mensagem
            console.log("Classe inválida, por favor escolha entre mago, guerreiro, monge, ou ninja");
        }
    }
    // Declara a função atacar
    atacar(){
        // Verificação da existência de valores para a propriedade tipo(classe)
        if (this.tipo != undefined){
            // Switch que define o tipo de ataque com base no tipo de classe
            switch(true) {

                case this.tipo == "mago":
                    this.ataque = "magia";
                    break;

                case this.tipo == "guerreiro":
                    this.ataque = "espada";
                    break;

                case this.tipo == "monge":
                    this.ataque = "artes marciais";
                    break;
                
                case this.tipo == "ninja":
                    this.ataque = "shuriken";
                    break;
                
            } 
            // Impressão da string que descreve a classe do herói atacante e seu tipo de ataque
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`);

        }
        // Caso a condicional if seja invalida, a função encerrará sem apresentar algo no console
    }
}

// declaração de um objeto tipo heroi
let novoHeroi = new heroi("Fernando",26,"ninja");
// chamada da função atacar do objetio novo heroi
novoHeroi.atacar()