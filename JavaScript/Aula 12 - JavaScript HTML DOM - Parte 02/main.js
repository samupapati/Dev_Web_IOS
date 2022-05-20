//Método get     Element     By      Id 
//       pega    elemento    pelo    id

let titulo = document.getElementById('titulo');

//alterando o conteúdo do HTML
titulo.innerHTML = "Vai perder o PC galera do AWS";

//configurando o CSS do HTML
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#ccccc9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px'

//Método get element by class

let items = document.getElementsByClassName('item');

console.log(items);
console.log(items[1]);
items[1].textContent = 'fjifjdofjdffsdfsdfsd';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'red';
items[1].style.padding = '.5rem';

//Utilizando o FOR para percorrer a lista
for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'yellow';
    items[i].style.fontWeight = 'bold'
}

//Método getElementsByTagName

let li = document.getElementsByTagName('li');
console.log(li)

for(let j = 0; j < li.length; j+=2){
    li[j].style.backgroundColor = '#fcba03'
}

//Método getElementsByName

let nome = document.getElementsByName('fitem')

console.clear();
console.log(nome)

nome[0].textContent = 'Pose de quebrada';
nome[0].style.backgroundColor = 'gray';
nome[1].textContent = 'RECEBAA';
nome[1].style.backgroundColor = 'gray'

//Remover conteúdo

let item2 = document.getElementById('item2')

item2.remove()

//inserir um valor

let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextElementSibling);

//Alterar estilo da lista
let ul = document.getElementById('items')
ul.style.listStyle = 'decimal inside';
ul.style.padding = '.5rem';

