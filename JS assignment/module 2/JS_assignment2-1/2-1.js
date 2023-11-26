'use strict';

const numbers = [];
for (let i=0; i<5; i++) {
    numbers[i] = prompt('Enter your number: ');
}

for (let a=4; a>=0; a--) {
    console.log(numbers[a]);
}