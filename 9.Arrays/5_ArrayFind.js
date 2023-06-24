// filter method returns the first value that mataches a certain condition

const states = ["Assam", "Delhi", "Kerela", "Mumbai"];

const value = states.find((state) => state.startsWith("D"));

console.log(value);
