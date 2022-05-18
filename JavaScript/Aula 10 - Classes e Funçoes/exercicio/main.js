class pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome;
        this.data = new Date(dataNascimento);
    };
    getIdade(data){
        let data = data.getFullYear() - this.data.getFullYear
        let data = data.getFullYear()
        let data = data.getFullYear()
    };
};

pessoas = Array(10);

pessoas[0] = new pessoa('samuel', '2003-12-11');
pessoas[1] = new pessoa('barbara', '2002-08-27');
pessoas[2] = new pessoa('rodrigo', '2004-05-21');
pessoas[3] = new pessoa('leila', '1998-01-10');
pessoas[4] = new pessoa('amanda', '1996-03-13');
pessoas[5] = new pessoa('livia', '2001-04-06');
pessoas[6] = new pessoa('paulo', '2005-11-01');
pessoas[7] = new pessoa('carlos', '2000-10-25');
pessoas[8] = new pessoa('erica', '1999-07-28');
pessoas[9] = new pessoa('eduarda', '1997-04-12');

console.log(pessoa.getIdade);
