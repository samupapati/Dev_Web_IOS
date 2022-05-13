//Exibir valor de 1 até 10
let contador = 1;

while(contador <= 10){
    console.log(`O valor do contador é? ${contador}`);
    contador++
};

//Decremento
let contador2 = 10;

while(contador2 >= 1){
    console.log(`O valor do contador é? ${contador2}`);
    contador2--
}

//For
for(let profHelo2 = 1; profHelo2 <=5; profHelo2++){
    console.log('Olá Jackass');
}

//For - Começa com 10 termina com 0
for(let contador3 = 10; contador3 >= 1; contador3--){
    console.log(`O valor do contador é ${contador3}`);
}


//Laço while do matheus

let profHelo = 6;

while(profHelo <=5){
    console.log('bate palma');
    profHelo = profHelo + 1;
};

do{
    console.log('bate palma');
    console.log(profHelo);
    profHelo++;
} while(profHelo <=5);

//Laços de repetição e Array
const frutas = ['maca', 'laranja', 'pera', '10']
for(let j = 0; j < frutas.length; j+=2){
    console.log(`Nome: ${frutas[j]}`);
};

//Exercício em sala
//Crie um array chamado carros com 8 carros e percorra o array de 2 em 2 exibindo os carros do array
const carros = ['Camaro','Mustang','Vectra','GolfGTI','Corolla','LancerEvo','Subaru','Civic']
for(let p = 0; p < carros.length; p+=2){
    console.log(`carros${carros[p]}`);
};
