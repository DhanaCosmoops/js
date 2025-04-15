// Write a function using function keyword and call it before it’s declared. What happens?

test();
function test() {
  console.log("Welcome to Javascript ");
}

test1();
function test1() {
  var str = "Hello";
  console.log(str);
}

test3();
var test3 = function () {
  console.log("Hello everyone !!!"); // op: TypeError
};

test4();
let test4 = function () {
  console.log("Hello World"); // Reference error
};

// Create a function and store it in a variable using const. Try calling it before declaration. What do you see?

test5();
const test5 = function () {
  console.log("Heloo World"); // Reference error
};
