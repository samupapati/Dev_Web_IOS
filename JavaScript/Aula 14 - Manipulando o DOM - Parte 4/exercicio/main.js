data = new Date()
dia =  data.getDate()
mes = data.getMonth()
ano = data.getFullYear()
dataHojeArray = [dia, mes, ano]

console.log(dataHojeArray)


var inputNome = document.getElementById('inputNome');
var inputDataNascimento = document.getElementById('InputData');
var inputEmail = document.getElementById('inputEmail');

var botaoIncluir = document.getElementById('incluir')
botaoIncluir.addEventListener('click', segurarPagina)


let padrao = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/.exec('20/10/2018'));

function segurarPagina(e){
    if (inputDataNascimento != padrao){
        alert('teste')
    }
    e.preventDefault()
    verificarIdade()
}

function verificarIdade(){
    data = new Date()
    dia =  data.getDate()
    mes = data.getMonth()
    ano = data.getFullYear()
    dataHojeArray = [dia, mes, ano]

    diaNascimento = inputDataNascimento.getDate();
    mesNascimento = inputDataNascimento.getMonth();
    anoNascimento = inputDataNascimento.getFullYear();
    
    dataNascimentoArray = [diaNascimento, mesNascimento, anoNascimento]

    if (dataNascimentoArray[1] < dataHojeArray[1]){ //verificando se o mes que a pessoa faz aniversário é menor que o mes atual
        console.log('teste')
    }
    /*else if(this.dataNascimentoArray[1] == dataArray[1] && this.dataNascimentoArray[2] <= dataArray[2]){ //verificando se a pessoa faz aniversário no mes atual E se ela fez aniversário em um dia que ja passou do mês atual
        idade = dataArray[0] - this.dataNascimentoArray[0]; //subtraindo o ano atual pelo nascimento para obter a idade da pessoa
    }
    else if(this.dataNascimentoArray[1] >= dataArray[1]){ //verificando se a pessoa faz aniversário depois do mes atual
        idade = dataArray[0] - this.dataNascimentoArray[0] -1; //subtraindo o ano atual pelo nascimento para obter a idade da pessoa, o -1 foi usado porque a pessoa ainda não fez aniversário, logo, ela permananece com a mesma idade
    };*/
}



console.log(verificarIdade())

test = inputDataNascimento

console.log(test)