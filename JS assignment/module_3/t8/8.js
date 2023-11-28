'use strict';

document.querySelector('#start').addEventListener(
    'click',
    function() {
        const calculate = {
            add: '+',
            sub: '-',
            multi: '*',
            div: '/',
        }

        const result = document.querySelector('#result');
        let num1 = parseFloat(document.querySelector('#num1').value);
        let num2 = parseFloat(document.querySelector('#num2').value);
        let operation = document.querySelector('#operation').value;
        if (num2 == 0 & operation == 'div') {
            result.innerHTML = '"0" cannot be used as a divisor.';
        } else {
            let operator = calculate[operation];
            let num = eval(`${num1} ${operator} ${num2}`);
            result.innerHTML = num;
        }
    }
)
