// Uncurrying example

function add(a,b,c)
{
    console.log(a+b+c);
}
add(10,20,30)

// Currying example

function addition(a)
{
    return function(b)
    {
        return function(c)
        {
            console.log(a+b+c);
        }
    }
}
addition(5)(10)(20);

// or else

let curry1=addition(100)
let curry2=curry1(200)
curry2(300);