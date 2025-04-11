// sort()
let arr = [40, 10, 30, 20, 50];

// a-b (ascending) a>b (swapping)
let newArr = arr.sort((a, b) => {
  return a - b;
});
console.log(newArr);

// b-a (descending) b>a (swapping)
let newArr1 = arr.sort((a, b) => {
  return b - a;
});
console.log(newArr1);

// some()

let arr1 = [1, 11, 21, 30, 43];
let value = arr1.some((ele, ind, arr) => {
  return ele % 2 == 0;
});
console.log(value); // op: true

// every()

let arr2 = [1, 11, 21, 30, 43];
let values = arr2.every((ele, ind, arr) => {
  return ele % 2 == 0;
});
console.log(values); // op: false
