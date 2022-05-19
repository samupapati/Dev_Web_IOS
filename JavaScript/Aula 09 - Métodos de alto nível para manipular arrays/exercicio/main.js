none = '';

console.log('Exercício da aula 09');
console.log('\n');

console.log('====================');
console.log('Exercício 1');
console.log('\n');
console.log('Verificando se é par ou impar:');

numeros = [17, 43, 8, 4, 97, 56, 29];
paresImpares = numeros.forEach((parOuImpar) => {
    if (parOuImpar % 2 == 0){
        console.log(`${parOuImpar} é par`);
    };
    if (parOuImpar % 2 == 1){
        console.log(`${parOuImpar} é impar`);
    };
});

console.log('\n');

console.log('Verificando quais números são menores que 18:');
menor18 = numeros.forEach((m18) => {
    if(m18 <= 18){
        console.log(`${m18} é menor que 18`);
    };
});
console.log('====================');

console.log('\n');

console.log('====================');
console.log('Exercício 2')

console.log('\n');

alunos = [
    {nome: 'Ana', idade: 17, nota: 8, ano: '2ºB'},
    {nome: 'Paulo', idade: 16, nota: 6, ano: '2ºC'},
    {nome: 'Veronica', idade: 16, nota: 9, ano: '2ºC'},
    {nome: 'Marta', idade: 15, nota: 5, ano: '3ºC'},
    {nome: 'Gabriel', idade: 19, nota: 6, ano: '3ºC'},
    {nome: 'Maria', idade: 14, nota: 4, ano: '1ºF'},
];

console.log('Retornando apenas nome e ano dos alunos:');
filtrarAlunos = alunos.forEach((filtrar) => {
    console.log(`O aluno ${filtrar.nome} está no ${filtrar.ano}`)
});

console.log('\n')

console.log('Retornando apenas os alunos do segundo ano:');
filtrarAno = alunos.filter((Filtrar) => {
    if(Filtrar.ano == '2ºC' || Filtrar.ano == '2ºB'){
        console.log(Filtrar)
    }
});

console.log('\n')

console.log('Fazendo a média dos alunos e retornando se ficaram acima da média:');
media = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota + alunos[4].nota + alunos[5].nota) / 6
if(media >= 7){
    console.log('Os alunos ficaram acima da média')
}
else{
    console.log('Os alunos ficaram abaixo da média')
}

