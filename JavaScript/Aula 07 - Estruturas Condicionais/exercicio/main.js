colab = {
  colab1: {
    nome: "Alberto",
    salario: 1000,
    vinculo: "CLT",
    valorINSS: 0,
    colabora: 0,
  },
  colab2: {
    nome: "Carlos",
    salario: 1500,
    vinculo: "CLT",
    valorINSS: 0,
    colabora: 0,
  },
  colab3: {
    nome: "Pamela",
    salario: 2500,
    valorINSS: 0,
    vinculo: "PJ",
    colabora: 0,
  },
  colab4: {
    nome: "Murilo",
    salario: 4500,
    valorINSS: 0,
    vinculo: "CLT",
    colabora: 0,
  },
  colab5: {
    nome: "Ariane",
    salario: 1000,
    valorINSS: 6000,
    vinculo: "PJ",
    colabora: 0,
  },
};

nomes = [
    nome1 = [colab.colab1.nome],
    nome2 = [colab.colab2.nome],
    nome3 = [colab.colab3.nome],
    nome4 = [colab.colab4.nome],
    nome5 = [colab.colab5.nome],
]

salarios = [
    salario1 = [colab.colab1.salario],
    salario2 = [colab.colab2.salario],
    salario3 = [colab.colab3.salario],
    salario4 = [colab.colab4.salario],
    salario5 = [colab.colab5.salario],
]

vinculos = [
    vinculo1 = [colab.colab1.vinculo],
    vinculo2 = [colab.colab2.vinculo],
    vinculo3 = [colab.colab3.vinculo],
    vinculo4 = [colab.colab4.vinculo],
    vinculo5 = [colab.colab5.vinculo],
]

inss = [
  contribuicao1 = [0, 1212.01, 7.5/100],
  contribuicao2 = [1212.01, 2427.35, 9/100],
  contribuicao3 = [2427.36, 3641.03, 12/100],
  contribuicao4 = [3641.03, 7087.22, 14/100]
];

aliquotas = [
    aliquota1 = [contribuicao1[2]],
    aliquota2 = [contribuicao2[2]],
    aliquota3 = [contribuicao3[2]],
    aliquota4 = [contribuicao3[2]],
]

valoresMaiorQue = [
    valor1 = [contribuicao1[0]],
    valor2 = [contribuicao2[0]],
    valor3 = [contribuicao3[0]],
    valor4 = [contribuicao4[0]],
]

valoresMenorQue = [
    valor1 = [contribuicao1[1]],
    valor2 = [contribuicao2[1]],
    valor3 = [contribuicao3[1]],
    valor4 = [contribuicao4[1]],
]

valoresINSS = [
  valor1 = [colab.colab1.valorINSS],
  valor2 = [colab.colab2.valorINSS],
  valor3 = [colab.colab3.valorINSS],
  valor4 = [colab.colab4.valorINSS],
  valor5 = [colab.colab5.valorINSS],
]

colaboraINSS = [
  colabora1 = [colab.colab1.colabora],
  colabora2 = [colab.colab2.colabora],
  colabora3 = [colab.colab3.colabora],
  colabora4 = [colab.colab4.colabora],
  colabora5 = [colab.colab5.colabora],
]



for(c = 0; c < vinculos.length; c++){
    if(vinculos[c] == "CLT"){
        colaboraINSS[c] = true;
    } else{
        colaboraINSS[c] = false;
    };
}

for(d = 0; d < salarios.length; d++){
    if(salarios[d] >= valoresMaiorQue[d] && salarios[d] <= valoresMenorQue[d] ){
        valoresINSS[d] = salarios[d] * aliquotas[d];
    }
}

funcionarios = [
  funcionario1 = [nomes[0], vinculos[0], aliquotas[0], valoresINSS[0], colaboraINSS[0]],
  funcionario2 = [nomes[1], vinculos[1], aliquotas[1], valoresINSS[1], colaboraINSS[1]],
  funcionario3 = [nomes[2], vinculos[2], aliquotas[2], valoresINSS[2], colaboraINSS[2]],
  funcionario4 = [nomes[3], vinculos[3], aliquotas[3], valoresINSS[3], colaboraINSS[3]],
  funcionario5 = [nomes[4], vinculos[4], aliquotas[4], valoresINSS[4], colaboraINSS[4]],
];

for(f = 0; f < funcionarios.length; f++){
  if(colaboraINSS[f] == true){
    console.log(`O funcionário ${funcionarios[f][0]} que é ${funcionarios[f][1]} colabora com R$${funcionarios[f][3]},00 para o INSS`);
  } else{
  console.log(`O funcionário ${funcionarios[f][0]} que é ${funcionarios[f][1]} colabora com R$0 para o INSS`)
  }
}










