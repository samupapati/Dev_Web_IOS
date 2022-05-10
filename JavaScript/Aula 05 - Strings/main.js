//Trabalhando com strings
//Concatenar

let exemplo1 = 10;
let exemplo2 = 2;
let string1 = 'Aqui vai um texto';

console.log('o resultado da soma é: ' + (exemplo1 + exemplo2));
console.log("o resultado da soma é: " + (exemplo1 + exemplo2));
console.log(`o resultado da soma é: ${exemplo1 + exemplo2}`);
console.clear();

// Métodos de String

//Acessa uma string
let string2 = 'Aqui vai um texto';
console.log(string2.charAt(4));

//Tamanho da string
let string3 = 'Aqui vai um texto';
console.log(string3.length);

//Maiúsculas e minúsculas
let string4 = 'Aqui vai um texto';
console.log(string4.toUpperCase());
let string5 = 'AQUI VAI UM TEXTO';
console.log(string5.toLowerCase());

//Substring
let string6 = 'Mozilla';
console.log(string6.substring(0,2));

//Slipt
let string7 = 'A raposa é um animal esperto';
let string8 = string7.split(' ');
console.log(string8[5]);

//Substituir uma string dentro da string
let string9 = 'Aqui vai um texto';
let string10 = string9.replace('Aqui', 'Kauan');
console.log(string10);

//Remover espaços da string
let string11 = '              Aqui vai um texto ';
console.log(string11.trim())

//Métodos de buscar em strings
let string12 = 'Aqui vai um texto Aqui';
//string.indexOf()
console.log(string12.indexOf('Aqui'));
//string.lastIndexOf()
console.log(string12.lastIndexOf('Aqui'));
//string.search()
console.log(string12.search('Aqui'));
//string.startsWith()
console.log(string12.startsWith('A'));
console.log(string12.startsWith('Aqui'));
//strind.endsWith()
console.log(string12.endsWith('i'));
console.log(string12.endsWith('Aqui'));