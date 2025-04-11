// forEach()

let fruits = ["mango", "apple", "orange", "custard apple", "watermelon"];

fruits.forEach(printFruits);

function printFruits(currentElement, index, totalArray) {
  console.log(currentElement, index, totalArray);
}

// map

fruits.map(printFruits);

function printFruits(currentElement, index, totalArray) {
  console.log(currentElement, index, totalArray);
}

// map() method using anonomous function

fruits.map(function (currentEle, index, totalArr) {
  console.log(currentEle);
});

// forEach() doesn't return anything , map() returns a neww array

let newArr = fruits.forEach((cElement) => {
  console.log(cElement.toUpperCase());
  return cElement;
});
console.log(newArr);
/* op: MANGO
APPLE
ORANGE
CUSTARD APPLE
WATERMELON
undefined */

let newArr1 = fruits.map((cElement) => {
  return cElement;
});
console.log(newArr1); //op:[ 'mango', 'apple', 'orange', 'custard apple', 'watermelon' ] */

// passes a object in map()

let newarr = fruits.map((cElement, index) => {
  return { id: index + 1, fruits: cElement };
});
console.log(newarr);

// Chaining method using map()

let newArr3 = fruits
  .map((cEle) => cEle.toUpperCase())
  .sort()
  .fill("123");
console.log(newArr3); // it returns the value as Array

//op:[ '123', '123', '123', '123', '123' ]

//chaining method using forEach()
// chaining method is not possible for forEach()
// bcoz it does not returns anything

let arr = fruits
  .forEach((cEle) => cEle.toUpperCase())
  .sort()
  .fill("123");
console.log(arr);

// condition based stmt

let newArr2 = fruits.map((cEle) => {
  return cEle == "apple";
});
console.log(newArr2);

// we don't use variable in this eg bcoz it doesn't return value thats y we don't give
fruits.forEach((val) => console.log(val == "apple"));
