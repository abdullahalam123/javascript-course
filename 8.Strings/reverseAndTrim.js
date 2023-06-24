// reverse a string
// normally reverse function does not exist in a string
// so we need to convert it into an array first -- using split()

const phrase = "apple";

const reversed = phrase.split("").reverse().join("");

console.log(typeof reversed);


