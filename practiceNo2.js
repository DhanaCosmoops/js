// Q3. Write a function that takes another function as a parameter and calls it.

// Higher-order function that takes another function as a parameter

function mul(callback, a, b) {
  console.log(a * b);
  callback(10, 2);
}
function div(num1, num2) {
  console.log(num1 / num2);
}
mul(div, 10, 5);

// Q4. Write a function that adds two numbers. Pass this function into another function that prints the result.

function addNum(a, b) {
  return a + b;
}
function result(func, num1, num2) {
  const add = func(num1, num2);
  console.log(add);
}
result(addNum, 10, 20);
