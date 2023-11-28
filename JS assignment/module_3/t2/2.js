'use strict'

const li1 = document.createElement('li')
li1.innerHTML = 'First item';
document.querySelector('#target').appendChild(li1);

const li2 = document.createElement('li')
li2.innerHTML = 'Second item';
li2.setAttribute('class','my-item');
document.querySelector('#target').appendChild(li2);

const li3 = document.createElement('li')
li3.innerHTML = 'Third item';
document.querySelector('#target').appendChild(li3);