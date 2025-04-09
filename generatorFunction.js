// generator function

function* generatorFunction()
{
    yield "First Value"
    yield "Second Value"
    yield "Third Value"
    return "Final value"
}
 
let generator=generatorFunction()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next().value);
console.log(generator.next());

function* url()
{
    yield "https:/"
    yield "www.w3schools.com"
    yield "homePage"
}
 let origin=url()
 console.log(origin.next().value);
 console.log(origin.next().value);
 console.log(origin.next().value);