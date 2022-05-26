var data = new Date();
var dia =  data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();
//var dataHojeArray = [dia, mes, ano];

idade = 0
aprovado1 = false
aprovado2 = false
aprovado3 = false

var form = document.querySelector('#form');
form.addEventListener('submit', segurarPagina);

var inputNome = document.querySelector('#inputNome');
var inputEmail = document.querySelector('#inputEmail');
var inputDataNascimento = document.querySelector('#inputData');
var modo = document.querySelector('#modo')
var cadastrados = document.querySelector('#cadastrados');
var lista = document.querySelector('#lista');

h2 = document.querySelector('h2')
excluir = document.querySelector('#excluir');
excluir.addEventListener('click', removerLista)

function segurarPagina(e){
    e.preventDefault();
    verificaNomeDataEmail();
    if(aprovado1 == true && aprovado2 == true && aprovado3 == true){
        calcularIdade();
        if(idade >= 18){
            pessoaCadastrada = document.createElement('li');
            pessoaCadastrada.innerHTML = `Nome: ${inputNome.value}, Idade: ${idade}, Email: ${inputEmail.value}, Modo: ${modo.value}`;
            lista.appendChild(pessoaCadastrada)
            info = document.createElement('p')
            info.innerHTML = 'Participante cadastrado com sucesso!';
            setTimeout(() => info.innerHTML = '', 3000) 
            form.insertBefore(info, document.querySelector('#incluir').nextElementSibling);
            excluir.style.display = 'block';
            h2.style.display = 'block';
            aprovado1 = false
            aprovado2 = false
            aprovado3 = false
        } else {
            alert('Pessoas menores de idade não podem ser cadastradas.')
        }
    }
}

function calcularIdade(){
    var convert = inputDataNascimento.value.toString()
    var nascimentoArray = convert.split('/')

    if(nascimentoArray[1] < mes){
        idade = ano - nascimentoArray[2]
    } else if(nascimentoArray[1] == mes && nascimentoArray[0] <= dia){
        idade = ano - nascimentoArray[2]
    } else{
        idade = ano - nascimentoArray[2] - 1
    }
}    

function verificaNomeDataEmail(){
    var dataPadrao = new RegExp(/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/);
    var emailPadrao = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);

    if(inputNome.value === ''){
        let errorNome = document.createElement('p');
        errorNome.innerHTML = 'Por favor, digite seu nome';
        form.appendChild(errorNome);
        setTimeout(() => errorNome.innerHTML = '', 3000) 
    } else{
        aprovado1 = true
    }
    if (!dataPadrao.test(inputDataNascimento.value)){
        let errorData = document.createElement('p');
        errorData.innerHTML = 'Por favor, digite a data no formato: dd/mm/aaaa';
        form.appendChild(errorData);
        setTimeout(() => errorData.innerHTML = '', 3000) 
    } else{
        aprovado2 = true
    }
    if (!emailPadrao.test(inputEmail.value)){
        let errorEmail = document.createElement('p');
        errorEmail.innerHTML = 'Por favor, digite o email no formato: email@dominio.com';
        form.appendChild(errorEmail);
        setTimeout(() => errorEmail.innerHTML = '', 3000) 
    } else{
        aprovado3 = true
    }
}

function removerLista(){
    numeroLista = window.prompt('Digite o número correspondente da lista que deseja excluir');
    var itens = lista.getElementsByTagName('li');
    lista.removeChild(itens[numeroLista - 1])
}
