let employee = [
  { name: "Dhana", salary: 25000 },
  { name: "Shobana", salary: 35000 },
  { name: "Shahitya", salary: 20000 },
  { name: "Dhanya", salary: 10000 },
  { name: "Keerthana", salary: 8000 },
  { name: "Beula", salary: 15000 },
];
let filterData1 = employee
  .filter((val) => val.salary >= 15000)
  .fill({ id: 1, name: "Taruna" });

employee.filter((val) => console.log(val));
console.log(filterData1);

// chaining using filter()

let filterData = employee
  .filter((val) => val.salary >= 15000)
  .fill({ name: "taruna", age: 23 });

console.log(filterData);

// find() method (it returns a single value)

let findData = employee.find((val, index, array) => {
  // each callback use 3 params
  console.log(index);
  return val.salary > 10000;
});

console.log(findData); //op:{ name: 'Dhana', salary: 25000 }
