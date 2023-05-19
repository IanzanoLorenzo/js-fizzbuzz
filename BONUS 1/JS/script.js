"use strict";

let risposta;
const lista = document.getElementById('lista')

for (let n = 1; n <= 100; n++){
        
    let resto3  = n % 3;
    let resto5  = n % 5;
    risposta = ''

    if( resto3 === 0){
        risposta += 'Fizz'
    }
    if( resto5 === 0){
        risposta += 'Buzz'
    }
    if( resto3 !== 0 && resto5 !== 0 ){
        risposta = n
    }

    const listItem = document.createElement('li');
    listItem.innerText = risposta;
    lista.append(listItem);

}