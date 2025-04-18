// Q9. Create an array of 3 fruits and print each fruit using a loop.

let arr = ["apple", "mango", "banana"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Q10. Create an object with name and age, and print both

let obj = {
  name: "Dhanalakshmi",
  age: 22,
};
console.log(obj);

// Q11. Use for, for-of, and for-in to loop over an array of numbers and print them.

// for loop

let arr1 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// for-of loop

let arr2 = [100, 200, 300, 400, 500];
for (let value of arr2) {
  console.log(value);
}

// for-in loop

let arr3 = [1000, 2000, 3000, 4000, 5000];
for (let key in arr3) {
  console.log(arr3[key]);
}

// Q12. Use the rest operator to take unlimited numbers in a function and return their sum.

function add(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(add(10, 20, 30, 40, 50));

// Q13. Use the spread operator to merge two arrays: [1,2] and [3,4].

let array1 = [1, 2];
let array2 = [3, 4];
let newArray = [...array1, ...array2];
console.log(newArray);

// Q14. Destructure an array [1, 2] into two variables.

let array = [1, 2];
let [a, b] = array;
console.log(a);
console.log(b);

// Q15. Destructure an object {name: "AK", age: 25} into separate variables.

let person = {
  name: "AK",
  age: 25,
};

let { name, age } = person;
console.log(name);
console.log(age);

let person1 = {
  name: "AK",
  age: 25,
};

let { name: pName, age: pAge } = person1;
console.log(pName);
console.log(pAge);

// Q16. Use .forEach() to print each number in an array.

let sample = [1, 2, 3, 4, 5];
sample.forEach(printNum);
function printNum(currentElement, index, totalArray) {
  console.log(currentElement);
}

// Q17. Use .map() to return a new array with each number doubled.

let sample1 = [9, 8, 7, 6, 5];
let mapExample = sample1.map(printResultMap);
function printResultMap(currentElement) {
  return currentElement * 2;
}
console.log(mapExample);

// Q18. Use .filter() to get only even numbers from an array.

let val = [4, 7, 12, 15, 17, 16, 20];
let result = val.filter((ans) => ans % 2 == 0);
console.log(result);

let numbers = [2, 3, 4, 5, 6, 7, 8];

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

// Q19. Use .find() to get the first number greater than 5 in an array.

let test = [2, 4, 5, 10, 12];
let findNum = test.find(res);
function res(val, index) {
  return val > 5;
}
console.log(findNum);

// using anonomous function

let tests = [2, 4, 5, 10, 12];

let findNums = test.find(function (val) {
  return val > 5;
});

console.log(findNums);
