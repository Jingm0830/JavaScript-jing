'use strict';

let nums = [];
while (true) {
  const number = parseInt(prompt('Enter a number'));
  if (nums.includes(number)) {
    break;
  } else {
    nums.push(number);
  }
}
nums.sort(function(a, b) {
  return a - b;
});
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);

}