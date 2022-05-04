//Array unidimensional
var alunos = ['Barbara', 'Carlos', 'Fabio', 'Giovana'];
console.log(`Array unidimensional:\n `, alunos);

console.log(`\n`);

var infoAlunos = [
    alunos,
    notas = [7, 6, 8, 9],
    nascimento = ['22/04/1998', '15/06/2000', '26/02/1999', '05/01/2000'],
    turma = ['Programação', 'Redes', 'Designer', 'Cybersegurança']
]; 
console.log(`Array bidimensional:\n `, infoAlunos) 

console.log(`\n`);

//Definindo informações de cada aluno e guardando numa variável
var aluno0 = [
    alunos[0],
    notas[0],
    nascimento[0],
    turma[0]
];
aluno0 = aluno0.join(' - ');
console.log(aluno0);

var aluno1 = [
    alunos[1],
    notas[1],
    nascimento[1],
    turma[1]
];
aluno1 = aluno1.join(' - ');
console.log(aluno1);

var aluno2 = [
    alunos[2],
    notas[2],
    nascimento[2],
    turma[2]
];
aluno2 = aluno2.join(' - ');
console.log(aluno2);

var aluno3 = [
    alunos[3],
    notas[3],
    nascimento[3],
    turma[3]
];
aluno3 = aluno3.join(' - ');
console.log(aluno3);

