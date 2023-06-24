// dont use when :
// use async code or if you wanna break the loop

let sum = 0;
const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  if (nums[i] == 4) break;
  console.log(i, nums[i]);
}

// console.log(sum);

// nums.forEach((num, i) => {
//   //   sum += num;
//   if(num === 2) break;
//   console.log(i, num);
// });

// console.log(sum);
