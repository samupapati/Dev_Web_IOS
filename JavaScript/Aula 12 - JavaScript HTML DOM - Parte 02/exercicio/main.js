//Personalizando o body
document.body.style.backgroundColor = '#BFBFBF'
document.body.style.width = '100%';
document.body.style.padding = '0'; 
document.body.style.margin = '0'; 
document.body.style.textAlign = 'center'; 
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column'
document.body.style.justifyContent= 'center';
document.body.style.alignItems= 'center';


//============================================================================================================


//Configurando os botões

//criando uma variável para receber os botoes com a tag B_12
let botoes = document.getElementsByClassName('B_12');
//Personalizando os botoes
Array.from(botoes).forEach((percorrerBotoes) => { //array.from(botoes): transforma a variavel botoes em array.
    percorrerBotoes.innerHTML = 'Clique aqui';
    percorrerBotoes.style.border = '5px solid #D9BC66';
    percorrerBotoes.style.padding = '.5rem';
    percorrerBotoes.style.backgroundColor = '#BFBFBF';
    percorrerBotoes.style.margin = '.7rem';
    percorrerBotoes.style.borderRadius = '5px';
    percorrerBotoes.style.fontFamily = 'calibri';
    percorrerBotoes.style.textTransform = 'uppercase';
})

//criando variavel para receber os botoes pelo ID
let botao1 = document.getElementById('B_01');
let botao2 = document.getElementById('B_02');
let botao3 = document.getElementById('B_03');

//Configurando para quando o botão ser clicado chamar a função e desabilitar após clicado uma vez
botao1.addEventListener('click', mostrarUmbrellaAcademy)
botao1.addEventListener('click', function(){ //função para desabilitar o botão após o usuário clicar
    this.disabled = true; //desabilita o botao
}) //Depois do usuário clicar o botão é desabilitado para não ficar clicando várias vezes

botao2.addEventListener('click', receberNomeUsuario);
botao2.addEventListener('click', function(){
    this.disabled = true;
})

botao3.addEventListener('click', tabuadaNumeroInformado);
//botão 3 não tem restrição de cliques

//============================================================================================================

//Criando as funções
function mostrarUmbrellaAcademy(){
    let imgUA = document.createElement('img'); //criando tag img
    imgUA.src = 'imgs/UA.jpg'; //buscando imagem
    imgUA.style.width = '60%'; 
    document.body.insertBefore(imgUA, botao1.nextElementSibling); //inserindo a imagem depois do botao1
    document.body.style.backgroundColor = '#262525';
}

function receberNomeUsuario(){
    nomeUsuario = window.prompt('Por favor, digite seu nome'); //perguntando ao usuário seu nome e guardando na variável nomeUsuario
    paragrafo = document.createElement('p'); //criando tag p
    paragrafo.innerHTML = `Olá ${nomeUsuario}, Seja bem vindo(a) à nossa academia.`; //inserindo conteúdo na tag p
    paragrafo.style.color = 'white';
    paragrafo.style.fontFamily = 'calibri';
    paragrafo.style.fontWeight = 'bold';
    document.body.insertBefore(paragrafo, botao2.nextElementSibling); //inserindo tag p depois do botao 2
}

function tabuadaNumeroInformado(){
    let numeroInformado = window.prompt('Por favor, digite um número'); //perguntando ao usuário para digitar um número e guardando na variável numeroInformado
    if (isNaN(numeroInformado)){ //verificando se o usuário digitou outra coisa diferente de números
        window.alert('É PARA DIGITAR NÚMEROS, SABE LER NÃO?!!') //avisando o usuário
    } else{
        let tituloTabuada = document.createElement('h3'); //criando h3
        tituloTabuada.innerHTML = `A tabuada do número ${numeroInformado} é:`; //inserindo conteúdo no h3
        tituloTabuada.style.color = 'white';
        tituloTabuada.style.fontFamily = 'calibri';
        document.body.insertBefore(tituloTabuada, botao3.nextElementSibling); // inserindo h3 depois do botao3
        for(let i = 0; i <= 10; i++){ // loop para fazer a tabuada
            let paragrafo2 = document.createElement('p'); //criando tag p 2
            paragrafo2.innerHTML = `${numeroInformado} x ${i} = ${numeroInformado * i}`; //inserindo conteúdo na tag p   
            paragrafo2.style.color = 'white';
            paragrafo2.style.fontFamily = 'calibri';
            paragrafo2.style.fontWeight = 'bold';
            document.body.insertBefore(paragrafo2, tituloTabuada.nextElementSibling); //inserindo tag p depois do titulo h3
        }
    }
}

//============================================================================================================