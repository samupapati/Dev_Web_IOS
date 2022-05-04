console.log(`Parte 1 do exercício:`);

var pessoas1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(`Numa festa haviam 4 pessoas:\n ${pessoas1}`);

var pessoas2 = pessoas1;
pessoas2.unshift("Amanda");
pessoas2.pop();
console.log(`Chegou amanda, saiu Xavier:\n ${pessoas2}`);

var pessoas3 = pessoas2;
pessoas3.push("Zuleica");
pessoas3.shift();
console.log(`Chegou Zuleica, saiu Amanda:\n ${pessoas3}`);

var pessoas4 = pessoas3;
delete pessoas4[2];
pessoas4[2] = "Silvana";
console.log(`Saiu Silva, chegou Silvana:\n ${pessoas4}`);

var pessoasString = pessoas4.join(' / ');
console.log(`Ficaram 4 pessoas na festa, sendo elas:\n ${pessoasString}`);


console.log(`\n\n\n`);


console.log(`Parte 2 do exercício:`);
var carros = ['Vectra', 'Lancer', 'Golf_GTI', 'Santa_Fé', 'Stilo'];
console.log(`lista de carros:\n ${carros}`);

//Adicionando corolla e hb20
var carros2 = carros;
carros2.splice(5, 6, "Corolla", "HB20");
console.log(`Adicionado Corolla e HB20: \n ${carros2}`);

//excluindo os 4 primeiros carros e criando uma nova variavel para receber os 3 carros restantes
var NovoArrayCarros = carros2
NovoArrayCarros = NovoArrayCarros.slice(4);
console.log(`Nova array criada com os últimos 3 carros:\n ${NovoArrayCarros}`);

//transformando variavel carros em string
var carrosString = NovoArrayCarros.join(' / ');
console.log(`Antes:\n`, carros);
console.log(`Depois:\n ${carrosString}`);