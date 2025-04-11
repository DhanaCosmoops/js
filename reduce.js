// normal method to reduce val in array

let arr = [10, 20, 30, 40, 50];

let totalVal = 0;

for (let i = 0; i < arr.length; i++) {
  totalVal += arr[i];
}
console.log(totalVal); // op:150

//reduce()

let arr1 = [10, 15, 20, 25, 30];
let reduceVal = arr1.reduce((acc, cElement, index, array) => {
  return acc + cElement;
}, 0);
console.log(reduceVal); //op:100

let emp = [
  { name: "virat", salary: 18000 },
  { name: "rohit", salary: 45000 },
  { name: "dhoni", salary: 7000 },
  { name: "kane", salary: 22000 },
  { name: "starc", salary: 56000 },
];
let reduceMethod = emp.reduce((acc, cEle) => {
  return acc + cEle.salary;
}, 0);
console.log(reduceMethod); // op; 148000
