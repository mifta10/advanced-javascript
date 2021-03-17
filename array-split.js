const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,6);

const remote = nums.splice(2,3, 77,88);
console.log(part);
console.log(remote);

console.log(nums);

const together = nums.join(" ");
console.log(together);