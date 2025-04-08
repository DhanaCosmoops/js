 // Named function
function add(a,b)
{
return a+b;
}
console.log(add(10,20));

//Ananomous function
let ananfunc = function(a,b)
{
console.log("Ananomous function: " + (a*b));
}
ananfunc(10,5);

//Arrow function

let arrowFunc = () =>{
    console.log("I am arrow function");
}
arrowFunc();

 //Arrow Fuction without curly braces

let arrFunc=(a,b) => console.log("Arrow Function: " + (a-b));
arrFunc(10,5);

// Higher order function

function function1()
{
    console.log("Higher order function");
}

function function2()
{
    console.log("Call back function");
}

function1(function2()) 

// Another example

function addition(callBack,a,b)
{
console.log("Add: " + (a+b));
callBack(100,50 )
}
function sub(num1,num2)
{
console.log("Sub: " + (num1-num2));
}

addition(sub,10,20)