// hoisting means all the variable declaration and function declaration are hoisted or moved to the top by JS

// here the variable is hoisted to the top
// console.log(age);
// var age = 23;

// var age; //variable declaration is hoisted to the top
// console.log(age); //console.log
// age = 23; //the variable is assigned a value

// this will also work because the function declaration is hoisted to the top
hoisted();

function hoisted() {
  console.log(hello);
  var hello = "Abdullah";
}
