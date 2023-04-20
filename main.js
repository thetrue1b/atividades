// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

const lista = {
    nome: "Gabi",
    itens: ["arroz", "feijão", "batata"]
}

function listaItens (lista){
    console.log(`Olá, nome é ${lista.nome}. Hoje seus itens prioritários na lista de comprar são ${lista.itens[0]}, ${lista.itens[1]} e ${lista.itens[2]}`)
}

listaItens(lista)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const objeto = {
    ... lista, 
    itens: ["bala", "chocolate", "chiclete"]
}

listaItens(objeto)


// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoa1 ={
    nome: "Gabriela",
    idade: 17,
    profissão: "estudante"
}

const pessoa2 ={
    nome: "Bárbara",
    idade: 17,
    profissão: "estudante"
}

    
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

function dados(pessoa1){
   const lista = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissão, pessoa1.profissão.length]
    console.log(lista)
}
    dados(pessoa1)
    dados(pessoa2)

// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
const frutas ={
    nome: "morango",
    disponibilidade: true
}
const frutas1 ={
    nome: "uva",
    disponibilidade: false
}
const frutas2 ={
    nome: "banana",
    disponibilidade: true
}


//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
//     - 💡  Dica: Aqui você deve usar o método **push()**

function recebidos(frutas){
    carrinho.push(frutas)
}

recebidos(frutas)
recebidos(frutas1)
recebidos(frutas2)
        
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

console.log(carrinho)

// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function perguntas(){
    const nome = (prompt("Escreva seu nome:"));
    const idade = (prompt("Escreva sua idade:"));
    const profissão = (prompt("Escreva sua profissão:"))

    const respostas ={
        nome: nome,
        idade: idade,
        profissão: profissão

    }
    console.log(respostas)
    console.log(typeof respostas)
}

perguntas()


