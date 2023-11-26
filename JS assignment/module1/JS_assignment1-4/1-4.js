'use strict'

const name = prompt("Enter your name:")
function distribution(){
    n = Math.random()*4
    if (n<1){
        r="Gryffindor";
    }else if (n<2){
        r="Slytherin"
    }else if (n<3){
        r="Hufflepuff"
    }else {
        r="Ravenclaw"
    } return r;
}
let room = distribution();
document.querySelector('#Name').innerHTML=name + ", you are " + room + "!"