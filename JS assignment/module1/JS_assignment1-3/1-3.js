'use strict';
const num1 = parseInt(prompt("Integer 1:"));
const num2 = parseInt(prompt("Integer 2:"));
const num3 = parseInt(prompt("Integer 3:"));


let sum = num1+num2+num3;
let product = num1*num2*num3;
let average =((num1+num2+num3)/3);


document.querySelector('#sum').innerHTML = 'The sum is:' +sum;
document.querySelector('#product').innerHTML = 'The product is:' +product;
document.querySelector('#average').innerHTML = 'The average is:' +average;

