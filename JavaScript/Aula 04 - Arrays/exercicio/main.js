const pessoas = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(`Numa festa haviam 4 pessoas: `, pessoas);


console.log(`Chegou amanda, saiu Xavier`);
pessoas.unshift('Amanda');
var saiu1 = pessoas.pop();
console.log(pessoas);


console.log(`Chegou Zuleica, saiu Amanda`);
pessoas.push('Zuleica');
saiu2 = pessoas.shift();
console.log(pessoas);


console.log(`Saiu Silva, chegou Silvana`);
delete pessoas[2];
pessoas[2] = "Silvana";
console.log(pessoas);

var pessoasString = pessoas.join(' / ');
console.log(`Ficaram 4 pessoas na festa: ${pessoasString}`);






var carros = ['Vectra', 'Lancer', 'Golf_GTI', 'Santa_Fé', 'Stilo'];
console.log(`lista de carros:`, carros);
//Adicionando corolla e hb20
carros.splice(7, 8, "Corolla", "HB20");
console.log(`Adicionado Corolla e HB20:`, carros);
//criando novo array com os elementos da variavel carros
carros2 = carros.slice(5);
console.log(carros2);

//transformando variavel carros em string
var carrosString = carros.join(' / ');
console.log(`Antes:`, carros);
console.log(`Depois:`, carrosString);


