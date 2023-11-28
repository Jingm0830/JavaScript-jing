'use strict'

const p=document.querySelector('#trigger');
const img=document.querySelector('#target');

p.addEventListener('mouseover',
    function (event){
        img.src='img/picB.jpg';
    });

p.addEventListener('mouseout',
    function (event){
        img.src='img/picA.jpg';
    })