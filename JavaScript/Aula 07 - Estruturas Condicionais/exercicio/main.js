colab = {
    colab1: {
        nome: 'Alberto',
        salario: 5.000,
        vinculo: 'CLT'
    },
    colab2: {
        nome: 'Carlos',
        salario: 2000,
        vinculo: 'PJ'
    },
    colab3: {
        nome: 'Pamela',
        salario: 6000,
        vinculo: 'PJ'
    },
    colab4: {
        nome: 'Murilo',
        salario: 4500,
        vinculo: 'CLT'
    },
    colab5: {
        nome: 'Ariane',
        salario: 12500,
        vinculo: 'PJ'
    }
};



if(colab.colab1.salario <= 7087.22){
    aliquota = 14*100;
    porcentagem = colab.colab1.salario * aliquota;
    resultado = colab.colab1.salario * porcentagem;
    console.log(resultado);
}


