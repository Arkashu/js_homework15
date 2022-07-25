'use strict'
let num = +prompt('Введите любое число');
for (let i = 0; i < 1; i++) {
    if (num === 1 ||num ===0 || num < 0 || isNaN(num)) {
        console.log(false)
        break;
    } if (num % 2 === 0 && num > 2) {
        console.log(false)
        break;
    } if (num % 3 === 0 && num > 3) {
        console.log(false)
        break;
    } if (num % 5 === 0 && num > 5) console.log(false);
        console.log(true)
}
