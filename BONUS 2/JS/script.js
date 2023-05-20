"use strict";

let risposta, stile;
const lista = document.getElementById('lista');

for (let n = 1; n <= 100; n++){
        
    let primoResto  = n % 3;
    let secondoResto  = n % 5;
    risposta = '';

    if( primoResto === 0){
        risposta += 'Fizz';
    }
    if( secondoResto === 0){
        risposta += 'Buzz';
    }
    if( risposta === '' ){
        risposta = n;
    }

    const listItem = document.createElement('li');
    listItem.innerText = risposta;

    if( primoResto === 0 ){
        listItem.className += 'color1';
    }
    if( secondoResto === 0){
        listItem.className += 'color2';
    }
    if( listItem.className === 'color1color2' ){
        listItem.className = 'color3';
    }

    lista.append(listItem);

}