'use strict'

let nums = [8, 7, 6, 9, 2, 5];
const eves = even(nums);
console.log(nums);
console.log(eves);

function even(nums) {
  let eves = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      eves.push(nums[i]);
    }
  }
  return eves;
}