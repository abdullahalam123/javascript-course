// Primitive types (string, boolean, number..) are copied by value
let a = "apple";
let b = a;
a = "banana";
console.log(a); //banana
console.log(b); //apple

// Non primitive types (arrray, object) are copied by reference
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr1.push(5);
// both arr1 and arr2 are poiniting to the same object in memory
console.log(arr1); // [1,2,3,4,5]
console.log(arr2); // [1,2,3,4,5]

//arr1 and arr2 are the same object
console.log(arr1 === arr2); // true
