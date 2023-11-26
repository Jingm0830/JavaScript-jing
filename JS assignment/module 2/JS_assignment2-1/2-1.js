'use strict';

const numbers = [];
for (let i=0; i<5; i++) {
    numbers[i] = prompt('Enter your number: ');
}

for (let j=4; j>=0; j--) {
    console.log(numbers[j]);
}