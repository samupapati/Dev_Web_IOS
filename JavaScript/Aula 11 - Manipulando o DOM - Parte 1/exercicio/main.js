document.title = 'Exercício Aula 11';

//Mensagem de boas vindas
window.alert('Olá, Seja Bem Vindo!');



//Adicionando section dentro do body
let section = document.createElement('section');
document.body.appendChild(section);
//Criando H1 e inserindo dentro do section
let h1Section = document.createElement('h1');
h1Section.innerHTML = 'Lorem';
section.appendChild(h1Section);
//Criando p e inserindo dentro do section
let pSection = document.createElement('p');
pSection.innerHTML = 'Texto 1';
section.appendChild(pSection);

//adicionando article dentro do body
let article = document.createElement('article');
document.body.appendChild(article);
//Criando H1 e inserindo dentro do article
let h1Article = document.createElement('h1');
h1Article.innerHTML = 'Lorem 2';
article.appendChild(h1Article);
//Criando p e inserindo dentro do article
let pArticle = document.createElement('p');
pArticle.innerHTML = 'Texto 2';
article.appendChild(pArticle);


