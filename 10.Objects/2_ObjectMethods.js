// methods are functions associated with an object

const cat = {
  name: "neko",
  age: 2,
  meow: () => {
    console.log("Meow");
  },
};

console.log(cat.name);
cat.meow();
