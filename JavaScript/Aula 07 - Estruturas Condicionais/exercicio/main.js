colab = {
  colab1: {
    nome: "Alberto",
    salario: 5000,
    vinculo: "CLT",
    recebe: undefined,
  },
  colab2: {
    nome: "Carlos",
    salario: 2000,
    vinculo: "PJ",
    recebe: undefined,
  },
  colab3: {
    nome: "Pamela",
    salario: 6000,
    vinculo: "PJ",
    recebe: undefined,
  },
  colab4: {
    nome: "Murilo",
    salario: 4500,
    vinculo: "CLT",
    recebe: undefined,
  },
  colab5: {
    nome: "Ariane",
    salario: 12500,
    vinculo: "PJ",
    recebe: undefined,
  },
};

inss = {
  contribuicao1: {
    salario: 1212.0,
    aliquota: 7.5 * 100,
  },
  contribuicao2: {
    salario: 2427.35,
    aliquota: 9 * 100,
  },
  contribuicao3: {
    salario: 3641.03,
    aliquota: 12 * 100,
  },
  contribuicao4: {
    salario: 7087.22,
    aliquota: 14 * 100,
  },
};

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


//
if(colab.colab1.recebe == true &&
   colab.colab1.salario <= inss.contribuicao1.salario ||
   colab.colab1.salario >= inss.contribuicao1.salario && colab.colab1.salario <= inss.contribuicao2.salario ||
   colab.colab1.salario >= inss.contribuicao2.salario && colab.colab1.salario <= inss.contribuicao3.salario ||
   colab.colab1.salario >= inss.contribuicao3.salario && colab.colab1.salario <= inss.contribuicao4.salario)
   {
  console.log('sim')
} else{
  console.log('nao')
}



/*if(colab.colab1.salario <= 7087.22){
    aliquota = 14*100;
    porcentagem = colab.colab1.salario * aliquota;
    resultado = colab.colab1.salario * porcentagem;
    console.log(resultado);
}*/
