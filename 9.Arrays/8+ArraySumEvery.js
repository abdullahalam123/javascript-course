// some checks if one element satisfies the condition
// every checks if every element satisfies the condition

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.every((ele) => ele > 3)); // false
console.log(arr.some((ele) => ele > 3)); // true
