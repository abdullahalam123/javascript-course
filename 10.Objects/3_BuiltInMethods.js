//built in methods

const person = {
  name: "John",
  age: 23,
  occupation: "Software Developer",
};

// Object.keys() --> creates a new array containing only the keys
const keys = Object.keys(person);
console.log(keys);

// Object.values() --> creates a new array containing only the values
const values = Object.values(person);
console.log(values);

// Object.entries() --> creates a new nested array containing both the keys and values
const entries = Object.entries(person);
console.log(entries);

// Object.seal() -> returns a new object
// --> same as Object.freeze
// --> but it allows modifications to new object
const newPerson2 = Object.seal(person);
newPerson2.age = 50; // will work
newPerson2.cat = "Pebble"; // wont work
console.log(newPerson2);

// Object.freeze() -> returns a new object
// --> prevents any modifications to the object
// --> prevents any new properties being added or exisiting properties to be modified
const newPerson = Object.freeze(person);
newPerson.age = 23; // wont work
newPerson.cat = "Pebble"; // wont work
console.log(newPerson);
