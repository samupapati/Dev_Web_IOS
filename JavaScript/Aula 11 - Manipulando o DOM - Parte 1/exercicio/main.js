document.title = 'Exercício Aula 11';

//Mensagem de boas vindas
window.alert('Olá, Seja Bem Vindo!');

//personalizando body
document.body.style.backgroundColor = "#f2fff9";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height =  "100vh";
document.body.style.width = "100%";
document.body.style.fontFamily = "arial";

//Adicionando section dentro do body
let section = document.createElement('section');
document.body.appendChild(section);
section.style.textAlign = "center";
section.style.backgroundColor = "#d1ded8";
section.style.width = "100%";
//Criando H1 e inserindo dentro do section
let h1Section = document.createElement('h1');
h1Section.innerHTML = 'Lorem ipsum';
section.appendChild(h1Section);
h1Section.style.marginTop = '0px';
h1Section.style.color = "#e8fff4"
//Criando p e inserindo dentro do section
let pSection = document.createElement('p');
pSection.innerHTML = 'Texto 1';
section.appendChild(pSection);
pSection.style.marginBottom = '0';

//adicionando article dentro do body
let article = document.createElement('article');
document.body.appendChild(article);
article.style.textAlign = "center";
article.style.backgroundColor = "#bbc9c3";
article.style.width = "100%";
//Criando H1 e inserindo dentro do article
let h1Article = document.createElement('h1');
h1Article.innerHTML = 'Lorem ipsum dolor';
article.appendChild(h1Article);
h1Article.style.marginTop = '0px';
h1Article.style.color = "#c2f0da"
//Criando p e inserindo dentro do article
let pArticle = document.createElement('p');
pArticle.innerHTML = 'Texto 2';
article.appendChild(pArticle);
pSection.style.marginBottom = '0';



