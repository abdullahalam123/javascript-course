// iterates through the array and reduces it to a singular value
// it takes in two values:
// 1. a callback function(accumulator, currentValue)
// 2. initial accumulator value

let sum = 0;
const prices = [1, 2, 3, 4];

const total = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);

// acc -> 0 currentValue -> 1 
// acc -> 1 currentValue -> 2
// acc -> 3 currentValue -> 3
// acc -> 6 currentValue -> 4
// acc -> 10 currentValue -> out of bounds