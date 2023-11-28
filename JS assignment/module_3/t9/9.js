'use strict';

document.querySelector('#start').addEventListener(
    'click',
    function() {
        const calculate = [
            { cal_type: '+', method: function(a, b) {return a+b}},
            { cal_type: '-', method: function(a, b) {return a-b}},
            { cal_type: '*', method: function(a, b) {return a*b}},
            { cal_type: '/', method: function(a, b) {return a/b}},

        ];

        const result = document.querySelector('#result');
        let calculation = document.querySelector('#calculation').value;
        for (let item of calculate) {
            if (calculation.includes(item.cal_type)) {
                const operator = item.cal_type;
                const method = item.method;
                const cal_array = calculation.split(operator);
                const num1 = parseInt(cal_array[0]);
                const num2 = parseInt(cal_array[1]);
                if (num2 == 0 & operator == '/') {
                    result.innerHTML = '"0" cannot be used as a divisor.';
                } else {
                    let num = method(num1, num2);
                    result.innerHTML = num;
                }
                break;
            }
        }

    }
)