// normal function

/* function normalFunc()
{
    console.log("Executed whenever I call");
}
normalFunc(); */

// self invoke function
/* basically an anonomous function (nameless function) */
/* 
(function (name,age){
    console.log("Self-Invoked Function: "+ name,age);
})("Dhana",22) */

// Closure function

function outerFunction()
{
    let message="Welcome to closure function";
    function innerFunction() {
     console.log(message);   
    }
    return innerFunction
}
let innerFunc = outerFunction();
innerFunc();