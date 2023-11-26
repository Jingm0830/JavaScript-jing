'use strict'

const maxsides = parseInt(prompt('Enter the max of the dice: '));
let nums = [];
while (true) {
  const num = rolls();
  if (num === maxsides) {
    nums.push(num);
    break;
  } else {
    nums.push(num);
  }
}
const ul = document.querySelector('#target');
for (let i = 0; i < nums.length; i++) {
  const li = document.createElement('li');
  li.innerText = nums[i];
  ul.appendChild(li);
}

function rolls() {
  return Math.floor(Math.random() * maxsides + 1);
}
