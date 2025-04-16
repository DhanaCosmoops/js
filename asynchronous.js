// synchronous function

function f1() {
  console.log("First");
}
function f2() {
  console.log("Second");
}
function f3() {
  console.log("Third");
}
f1();
f3();

// Asynchronous function

function func1() {
  console.log("React");
}
function func2() {
  console.log("Node");
}
function func3() {
  console.log("Angular");
}
func1();
setTimeout(func2, 2000); // Asynchronous function
func3();
