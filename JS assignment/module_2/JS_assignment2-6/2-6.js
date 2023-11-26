'use strict';
let nums = [];
while (true) {
  const num = rolls();
  if (num === 6) {
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
  return Math.floor(Math.random() * 6 + 1);
}