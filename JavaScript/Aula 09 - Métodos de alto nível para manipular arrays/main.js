//Método forEach com Arrays
const frutas = ['Maça', 'Pera', 'Melancia'];
frutas.forEach(minhaFuncao);

function minhaFuncao(index,item){
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
};

//Com Arrow Function
const frutas2 = ['Maça', 'Pera', 'Melancia'];
frutas2.forEach((index,item) => {
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
});

//
const tarefas = [
    {
        id: 1,
        texto: "Aqui vai um texto",
    },
    {
        id: 2,
        texto: "Aqui vai dois texto",
    },
    {
        id: 3,
        texto: "Aqui vai tres texto",
    },
];

//Método map
const numeros = [16, 4, 9, 25];
const newArray = numeros.map(Math.sqrt);

console.log('Array Antigo');
console.log(numeros);
console.log('Novo Array');
console.log(newArray);

//Outro exemplo de map
const mapText = tarefas.map((valor) => {
    return valor.texto;
});
 console.log(mapText);

//Método filter()
const idade = [32, 15, 8, 98, 70];

let filtroIdade = idade.filter((idades) => {
    return idades >= 18 ;
});

console.log(filtroIdade);

//Método find()
const meuArray = [
    {
        nome: 'Diego',
        idade: 12, 
        altura: 120, 
        sexo: 'Masculino'
    },
    {
        nome: 'Jissara',
        idade: 15, 
        altura: 170, 
        sexo: 'Feminino'
    },
    {
        nome: 'Jheniffer',
        idade: 70, 
        altura: 180, 
        sexo: 'Feminino'
    }
];

console.log(
    meuArray.find((genero) => {
        return genero.sexo === 'Feminino';
    })
);

//Exercício em sala 


//Crie um Array de objetos com quatro objetos e cada objeto tera 4 propriedades e retorne todos os alunos que tirou nota maior que 6 e retorne o primeiro aluno que tirou nota 
//menor que 5

let alunos = [
    {
        nome: 'Carlos',
        idade: 20,
        curso: 'T.I',
        nota:  7
    },
    {
        nome: 'Marilda',
        idade: 28,
        curso: 'Redes',
        nota:  6
    },
    {
        nome: 'Gabriel',
        idade: 25,
        curso: 'Redes',
        nota:  4
    },
    {
        nome: 'Evelyn',
        idade: 23,
        curso: 'T.I',
        nota:  5
    },
]

let aprovados = alunos.filter((aprovado) => {
    return aprovado >= 6;
});
console.log(aprovados);


/*reprovado = alunos.find((nota2) => {
    return nota2 <= 6;
})
*/
