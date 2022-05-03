//Estrutura de uma função
/*
function NomeDaFuncao(valor1,valor2){
    return valor1 * valor2
}
*/

//Funções
function AddNums(num1 = 2, num2 = 5){
    return num1 + num2
};

const somaAddNums = (num1 = 2, num2 = 5) => {
    return num1 + num2
}

// console.log(AddNums);
let x = AddNums(10,11);
console.log(x);
console.clear();

//Criando Arrow Function
const hello = (primeiro = 2, segundo = 2) => {
    return primeiro * segundo
};

//Retornar o resultado da função
console.log(hello());

//Criando objetos
const aluno = {
    primeiroNome : 'Mateus',
    segundoNome : 'lost',
    idade : '19'
};
console.clear();

//Criando boas vindas
const boasVindas = () =>{
    alert('Bem vindo a nossa pagina otário')
    console.log('Bem vindo a nossa pagina otário')
};

//
function eventClick() {
    console.log('Você clicou aqui otário')
};