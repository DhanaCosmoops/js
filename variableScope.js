 // var-function scope(within the func we can access)

function outerFunc()
{
    if(true)
    {
        var functionVar="I am a Variable"
       // console.log(functionVar);
    }
    console.log(functionVar);
}
outerFunc()

// let-const (block scope)

function blockScope()
{
   // let functionLet="I am a let"
    if(true)
    {
        let functionLet="I am a let"
        console.log(functionLet);
        const functionConst= "I am a Const"
        console.log(functionConst);
    }
}
blockScope()

// var-global scope

var globalScopeVar = "I am accessible throughout the global context"
let globalScopeLet = " I am a let "
const globalScopeConst = "I am a const"

 console.log(window.globalScopeVar);
 console.log(window.globalScopeLet);
 console.log(window.globalScopeConst); 


var a=10;
let b=10;
const c=10;

function outerFunction()
{
    var a=20;
    let b=20;
    const c=20;

    function innerFunction()
    {
        var a=30;
        let b=30;
        const c=30;
        console.log(a+b+c);
    }
   innerFunction()
   console.log(a+b+c);
}
outerFunction()
console.log(a+b+c);
