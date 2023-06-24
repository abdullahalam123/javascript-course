// to create a new array/object without reference we use the shallow clone

// Array

// 1. spread ... operator
let arr = [1, 2, 3];
let arr2 = [...arr];
arr.push(5);
console.log(arr); //[1,2,3,5]
console.log(arr2); //[1,2,3]

// both arr and arr2 are different arrays in this case

//2. slice()
let arr3 = ["a", "b", "c"];
let arr4 = arr3.slice();
arr3.push(8);
console.log(arr3); // [ 'a', 'b', 'c', 8 ]
console.log(arr4); // [ 'a', 'b', 'c' ]

// Objects
//1. Spread operator
let person = {
  name: "John",
  age: 34,
};
let person2 = { ...person };
person.name = "Don";

console.log(person); // { name: 'Don', age: 34
console.log(person2); // { name: 'John', age: 34 }

// 2. Object.assign(target, source)
let person3 = Object.assign({}, person);
person.car = "yellow";

console.log(person); //{ name: 'Don', age: 34, car: 'yellow' }
console.log(person3); //{ name: 'Don', age: 34 }
