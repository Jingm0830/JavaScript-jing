'use strict'

let name=[];
let number=6;

for (let i=0; i<number; i++){
    name.push(prompt('Enter the name of dog No.${i+1}'))
}
name.sort().reverse()

const ul=document.querySelector('#dog');
for(let i=0; i<name.length; i++){
    const li=document.createElement('li');
    li.innerText=name[i];
    ul.appendChild()
}