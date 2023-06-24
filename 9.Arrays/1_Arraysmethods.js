const names = ["apple", "chrome", "banana", "burger"];

// push -- pushes an element to the end of the array -- returns a number
names.push("kiwi");
console.log(names);

// pop -- deletes an element from the end of the array -- returns the element deleted
names.pop();
console.log(names);

// shift() -- deletes an element from the start of the array -- returns the element deleted
names.shift();
console.log(names);

// unsfhift() -- adds an element to the start of the array -- returns a number
names.unshift("mango");
console.log(names);
