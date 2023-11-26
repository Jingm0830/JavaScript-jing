'use strict'

let num=[];
while(true){
    const number = parseInt(prompt('Enter a number and 0 means exit.'));
    if(number === 0){
        break
    }else{
        num.push(number);
    }
}
num.sort(function(a,b){
    return b-a;
})
for (let i=0; i<num.length; i++)
console.log(num[i])