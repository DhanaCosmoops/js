//Variable declaration hoisting

// Before code execution - declaration will come at top
// var a
//let b
// const c
// sample()
//sample1()
//sample2()

// Actual declaration starts
console.log(a);

var a=10;

console.log(a);


let b=20;
console.log(b);

//console.log(c);
const c=30;
console.log(c);

//Function declaration

sample()
function sample()
{
    console.log("Hello everyone!!"); //o/p:Hello everyone!!
}

 sample1()
let sample1 = function()
{
    console.log("How are you guys?");// o/p:Reference error
} 

sample2()
var sample2=function()
{
    console.log("I'm Fine");// o/p:Type error
}

