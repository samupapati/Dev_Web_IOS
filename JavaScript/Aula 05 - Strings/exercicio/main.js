console.log('Exercício da aula 05 - Strings');

console.log('\n');

leroLero = "Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar."

console.log('Primeira posição do índice:');
console.log(leroLero.charAt(0)); 

console.log('\n');

console.log('Tamanho da string:');
console.log(`O tamanho da string é ${leroLero.length}`);

console.log('\n');

console.log('Substituindo string por string:');
leroLero2 = leroLero.replace('Dr Stephen Strange', 'Feiticeira Escarlate');
console.log(leroLero2);

console.log('\n');

console.log('Transformando a string em subtring');
leroLero3 = leroLero.split(' ');
console.log(leroLero3);
console.log('Acessando o indice de posição 13:');
console.log(leroLero3[13]);

console.log('\n');

console.log('Transformando a string em maiúsculo:');
console.log(leroLero2.toUpperCase());
