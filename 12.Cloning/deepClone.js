// shallow cloning only removes the outer object reference

let person = {
  name: "John",
  car: {
    brand: "BMW",
  },
};
let person2 = { ...person };

person.car.brand = "Mercedes";

// here changing the person car name also changes the person2 car name
// this is because the inner object 'car' reference was not removed
console.log(person);
console.log(person2);

// To create a deep copy we use
// JSON.stringify --> converts an object to a string
// and JSON.parse --> converts an string to an object
person3 = JSON.parse(JSON.stringify(person));

// now even if we change person car then person3 car will remain same
person.car.brand = "Lambo";
console.log(person);
console.log(person3);
