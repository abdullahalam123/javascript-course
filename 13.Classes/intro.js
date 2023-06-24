// a class is a template for an object

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user = new Person("abdullah", 23);
console.log(user);

// the same can be done using functional programming
// const Animal = (name, age) => {
//   const createAnimal = {
//     name,
//     age,
//   };
//   return createAnimal;
// };

//Shorthand:
// Note : to return an object we must encloe it using () brackets
const Animal = (name, age) => ({ name, age });

const cat = Animal("Pebbles", 23);
console.log(cat);
