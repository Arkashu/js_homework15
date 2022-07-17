'use strict'
let num = +prompt('Введите любое число');
for (;;) {
    if (num < 0 || isNaN(num) ||num % 2 === 0 && num !== 2 || num % 3 === 0 && num !== 3
        || num % 5 === 0 && num !== 5 || num % 7 === 0 && num !==7){
        console.log(false)
    } else {
        console.log(true)
    }
    break;
}