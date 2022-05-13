colab = {
  colab1: {
    nome: "Alberto",
    salario: 5000.00,
    vinculo: "CLT",
    recebe: undefined,
    aliquota: 0,
    valorColaborado: 0,
  },
  colab2: {
    nome: "Carlos",
    salario: 2000,
    vinculo: "PJ",
    recebe: undefined,
    aliquota: 0,
    valorColaborado: 0,
  },
  colab3: {
    nome: "Pamela",
    salario: 6000,
    vinculo: "PJ",
    recebe: undefined,
    aliquota: 0,
    valorColaborado: 0,
  },
  colab4: {
    nome: "Murilo",
    salario: 4500,
    vinculo: "CLT",
    recebe: undefined,
    aliquota: 0,
    valorColaborado: 0,
  },
  colab5: {
    nome: "Ariane",
    salario: 12500,
    vinculo: "PJ",
    recebe: undefined,
    aliquota: 0,
    valorColaborado: 0,
  },
};

inss = [
  contribuicao1 = [0, 1212.01, 7.5/100],
  contribuicao2 = [1212.01, 2427.35, 9/100],
  contribuicao3 = [2427.36, 3641.03, 12/100],
  contribuicao4 = [3641.03, 7087.22, 14/100]
];


//Verificando se é CLT ou PJ
if (colab.colab1.vinculo == "CLT") {
  colab.colab1.recebe = true;
} else {
  colab.colab1.recebe = false;
};
if (colab.colab2.vinculo == "CLT") {
  colab.colab2.recebe = true;
} else {
  colab.colab2.recebe = false;
};
if (colab.colab3.vinculo == "CLT") {
  colab.colab3.recebe = true;
} else {
  colab.colab3.recebe = false;
};
if (colab.colab4.vinculo == "CLT") {
  colab.colab4.recebe = true;
} else {
  colab.colab4.recebe = false;
};
if (colab.colab5.vinculo == "CLT") {
  colab.colab5.recebe = true;
} else {
  colab.colab5.recebe = false;
};


if(
  colab.colab1.salario >= contribuicao1[0] && colab.colab1.salario <= contribuicao1[1] ||
  colab.colab1.salario >= contribuicao2[0] && colab.colab1.salario <= contribuicao2[1] ||
  colab.colab1.salario >= contribuicao3[0] && colab.colab1.salario <= contribuicao3[1] ||
  colab.colab1.salario >= contribuicao4[0] && colab.colab1.salario <= contribuicao4[1])
  {
    if(colab.colab1.salario >= contribuicao1[0] && colab.colab1.salario <= contribuicao1[1]){
      colab.colab1.aliquota = contribuicao1[2]
      
    }
    if(colab.colab1.salario >= contribuicao2[0] && colab.colab1.salario <= contribuicao2[1]){
      colab.colab1.aliquota = contribuicao2[2]
    }
    if(colab.colab1.salario >= contribuicao3[0] && colab.colab1.salario <= contribuicao3[1]){
      colab.colab1.aliquota = contribuicao3[2]
    }
    if(colab.colab1.salario >= contribuicao4[0] && colab.colab1.salario <= contribuicao4[1]){
      colab.colab1.aliquota = contribuicao4[2]
      colab.colab1.valorColaborado = colab.colab1.salario*colab.colab1.aliquota
    }
} else{
  console.log('false');
}

console.log(colab.colab1.valorColaborado)