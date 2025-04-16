// Q6. Create a function that runs immediately and logs "Hi, I'm IIFE!"

(function () {
  console.log("Hi, I'm IIFE!");
})();

// using an arrow function

(() => {
  console.log("Hi, I'm IIFE!");
})();

/* Q7. Create a function that returns another function. 
The inner function should print a value from the outer function. */

function outerFunction() {
  let message = "Hello Everyone!!!";
  function innerFunction() {
    console.log(message);
  }
  return innerFunction;
}
let myFunc = outerFunction();
myFunc();

//Q8. Write a generator that gives 3 numbers: 1, 2, and 3 (one at a time using .next()).

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
let output = generator();
console.log(output.next().value, output.next().value, output.next().value);
