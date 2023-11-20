'user strict'

const year = prompt("Enter a year:");

function leap(Y){
    if(Y % 100 === 0){
        if(Y % 400 === 0){
            i = " is a leap year!"
        }else {
            i = " is not a leap year!"
        }
    }else if (Y % 4 === 0){
        i = " is a leap year!"
    }else {
        i = " is not a leap year!"
    } return i;
}
let result = leap(year);
document.querySelector('#Year').innerHTML=year + result;