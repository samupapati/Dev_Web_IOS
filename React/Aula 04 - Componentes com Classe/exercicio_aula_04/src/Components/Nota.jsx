
var aluno = [5, 8, 6, 9]



function calcularMedia(){
    var soma = 0
    for(var i = 0; i < aluno.length; i++){
        soma += aluno[i]
    }
    return soma = soma/aluno.length
}

export default calcularMedia