var nome = "Samuel";
var altura = 1.80;
var peso = 65;

console.log("Calculo de IMC");

var calculo = peso/(altura*altura);

const texto = `${nome} possui altura ${altura}m e peso ${peso}, seu IMC é ${calculo}`;
console.log(texto);
