// filter method filters out the array based on a certain criteria

const employees = [
  { name: "John", age: 34 },
  { name: "Joe", age: 30 },
  { name: "Joseph", age: 32 },
  { name: "Jack", age: 33 },
];

const employeesFiltered = employees.filter((employee) => employee.age > 31);
console.log(employeesFiltered);

const employeeName = employeesFiltered.map((employee) => employee.name);
console.log(employeeName);
