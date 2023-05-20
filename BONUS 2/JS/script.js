"use strict";

let risposta, stile, primaScelta,secondaScelta;
const lista = document.getElementById('lista');
let primoNumero = document.getElementById('primoNumero');
let secondoNumero = document.getElementById('secondoNumero');


document.addEventListener('keyup', function quadrati(){
    lista.innerHTML = ''
    primaScelta = primoNumero.value;
    secondaScelta = secondoNumero.value;

    for (let n = 1; n <= 100; n++){
        
        let primoResto  = n % primaScelta;
        let secondoResto  = n % secondaScelta;
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
}
)

quadrati()