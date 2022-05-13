none = '';

function contador(){
    console.log('Tabuada com while:');
    a = 0
    while (a <= 10){
        b = 5
        console.log(`${b} x ${a} = ${b * a}`);
        a++
    };

    console.log('\n');

    console.log('Tabuada com do While:');
    c = 0
    do{
        d = 7
        console.log(`${d} x ${c} = ${d * c}`);
        c++
    } while(c <= 10);

    console.log('\n');
    
    console.log('Tabuada com for:');
    for(e = 0; e <= 10; e++){
        f = 9
        console.log(`${f} x ${e} = ${f * e}`);
    }
    return none;
};

console.log(contador());
