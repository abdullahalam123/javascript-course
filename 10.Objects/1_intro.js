// objects are an unordered collection of related data

// create an object
const person = {
  firstName: "John",
  age: 34,
  car: {
    model: 2018,
  },
};

// access
// we can access using dot notation and square brackets
console.log(person.car.model);
console.log(person["age"]);

// square brackets can be used to : dynamically access the data
const key = "age";
console.log(person[key]); // 34
console.log(person.key); // this will return undefines because it will look for the literal thing instead of the value

// Insert new value
person.cat = "Neko";
console.log(person);

// Update value
person.cat = "Hehe";
console.log(person);
