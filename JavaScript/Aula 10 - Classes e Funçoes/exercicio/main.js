date = new Date();
    dataArray = Array(3);
    dataArray[0] = date.getFullYear();
    dataArray[1] = date.getMonth() + 1;
    dataArray[2] = date.getDate();


class pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    };
    getIdade(idade){
        this.dataNascimentoArray = Array(3);
        this.dataNascimentoArray[0] = this.dataNascimento.getFullYear();
        this.dataNascimentoArray[1] = this.dataNascimento.getMonth() + 1;
        this.dataNascimentoArray[2] = this.dataNascimento.getDate() + 1;
        if (this.dataNascimentoArray[1] < dataArray[1]){
            idade = dataArray[0] - this.dataNascimentoArray[0] - 1;
            console.log(`${this.nome} tem ${idade} e já fez aniversário esse ano`)
        }
        else if(this.dataNascimentoArray[1] == dataArray[1] && this.dataNascimentoArray[2] <= dataArray[2]){
            idade = dataArray[0] - this.dataNascimentoArray[0] - 1;
            console.log(`${this.nome} tem ${idade} e já fez aniversário esse ano`)
        }
        else if(this.dataNascimentoArray[1] >= dataArray[1]){
            idade = dataArray[0] - this.dataNascimentoArray[0] - 1;
            console.log(`${this.nome} tem ${idade} e ainda não fez aniversário esse ano`)

        }
    };
};

pessoas = Array(10);

pessoas[0] = new pessoa('samuel', '2003-12-11');
pessoas[1] = new pessoa('barbara', '2002-08-27');
pessoas[2] = new pessoa('rodrigo', '2004-05-23');
pessoas[3] = new pessoa('leila', '1998-01-10');
pessoas[4] = new pessoa('amanda', '1996-03-13');
pessoas[5] = new pessoa('livia', '2001-04-06');
pessoas[6] = new pessoa('paulo', '2005-11-01');
pessoas[7] = new pessoa('carlos', '2000-10-25');
pessoas[8] = new pessoa('erica', '1999-07-28');
pessoas[9] = new pessoa('eduarda', '1997-04-12');

//pessoas[6].getIdade()


    for(i = 0; i < pessoas.length; i++){
        pessoas[i].getIdade()
    }



// pessoas.forEach(test => {
//     for(i = 0; i <= pessoas.lenght; i++){
//         pessoas[i].getIdade()
        
//     }
// });






























    // getIdade(data){
    //     var data = data.getFullYear() - this.data.getFullYear(); return data--;
    //     var data = data.getMonth() - this.data.getMonth(); return data--;
    //     var data = data.getDate() - this.data.getDate(); return data--;
    // };