var alunos = {
    aluno1: {
        nome: 'Caio',
        sobrenome: 'Castro',
        idade: 22,
        numeroChamada: 1,
        turma: 'CyberSegurança',
        nota: [(9 + 6 + 6 + 7) / 4],
        endereco: ['Rua Almeida'],
        dataMatricula: '22/04/2022',
    },
    aluno2: {
        nome: 'Marina',
        sobrenome: 'Ruy Barbosa',
        idade: '23',
        numeroChamada: '15',
        turma: 'Redes',
        nota: [(7 + 8 + 9 + 6) / 4],
        endereco: ['Rua Frei Caneca'],
        dataMatricula: '15/05/2022',
    },
    aluno3: {
        nome: 'Ana',
        sobrenome: 'Maria Braga',
        idade: '25',
        numeroChamada: '2',
        turma: 'CyberSegurança',
        nota: [(6 + 6 + 7 + 5) / 4],
        endereco: ['Rua Dora'],
        dataMatricula: '23/04/2022',
    }
}

media = 7;

console.log(`A média da nota é ${media}`);

if (alunos.aluno1.nota >= media) {
    console.log(`O aluno(a) ${alunos.aluno1.nome} da turma de ${alunos.aluno1.turma}, que mora na ${alunos.aluno1.endereco}, teve a média de nota ${alunos.aluno1.nota}, portanto, foi aprovado(a).`);
}   else{
    console.log(`O aluno(a) ${alunos.aluno1.nome} obteve a média de nota ${alunos.aluno1.nota}, portanto, foi reprovado(a)`);
}

if (alunos.aluno2.nota >= media) {
    console.log(`O aluno(a) ${alunos.aluno2.nome} da turma de ${alunos.aluno2.turma}, que mora na ${alunos.aluno2.endereco}, teve a média de nota ${alunos.aluno2.nota}, portanto, foi aprovado(a).`);
}   else{
    console.log(`O aluno(a) ${alunos.aluno2.nome} obteve a média de nota ${alunos.aluno2.nota}, portanto, foi reprovado(a)`);
}

if (alunos.aluno3.nota >= media) {
    console.log(`O aluno(a) ${alunos.aluno3.nome} da turma de ${alunos.aluno3.turma}, que mora na ${alunos.aluno3.endereco}, teve a média de nota ${alunos.aluno3.nota}, portanto, foi aprovado(a).`);
}   else{
    console.log(`O aluno(a) ${alunos.aluno3.nome} obteve a média de nota ${alunos.aluno3.nota}, portanto, foi reprovado(a)`);
}










