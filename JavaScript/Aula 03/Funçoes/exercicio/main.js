//criando funcao simples
function alertCookie() {
    alert("Você quer um cookie?");
    console.log("Você quer um cookie?");
    return
};

//Criando arrow function 
const alertSucesso = () => {
    alert("Mensagem gerada com sucesso!");
    console.log("Mensagem gerada com sucesso!");
};

//Criando objeto notebook
const notebook = {
    nome: 'M15',
    modelo: 'Gamer',
    marca: 'Alienware',
    cor: 'Cinza escuro',
    valor: 11.700
};
//Exibindo o objeto notebook no console
console.log(notebook);

//Função que converte anos em dias

const ConverterAnosEmDias = (anos = 2022, dias = 365) => {
    return anos * dias; 
};
console.log(`2022 anos equivale a `,ConverterAnosEmDias(), `dias.`);



