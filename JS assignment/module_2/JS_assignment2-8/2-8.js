'use strict'

let name = ['aa', 'ss', 'dd', 'ff'];
const names = contact(name);
document.querySelector('#target').innerHTML = names;

function contact(name) {
  let names = '';
  for (let i = 0; i < name.length; i++) {
    names = names + name[i];
  }
  return names;
}