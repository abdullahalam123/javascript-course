// its the same as for each but it creates a new array
const items = [
  { name: "apple", price: 2 },
  { name: "banana", price: 3 },
  { name: "mango", price: 6 },
  { name: "guava", price: 8 },
];

const names = items.map((item) => {
  return item.name;
});

console.log(names);
