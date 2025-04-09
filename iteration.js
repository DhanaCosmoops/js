//  for loop using array
let arr=[10,20,30,40,50]
//console.log(arr[0]); 
let length=arr.length

for(let i=0;i<length /* i<=length-1 */;i++){
    console.log(arr[i]);
}

// for loop using string

let str="Javascript"
for(let i=0;i<str.length;i++)
{
    console.log(str[i]);
}

//for-of loop (array)

let array=[1000,2000,3000,4000,5000]

//Syntax: for(let (v_name) of object)

for(let val of array)
{
console.log(val);
}

//for-of loop (string)
 let string="Arulmozhi"
for(let strg of string)
{
    console.log(strg);
}

//for-of loop (function)

function* generator(){
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
let value = generator()
for(let sample of value )
{
    console.log(sample);
}

// for-of loop iterate (string,array,function) not object
// to iterate object use for-in loop

//for-in loop

let man={
    name:"Akash",
    age:25,
    hobbies:["Cricket", "Reading","Travelling"],
     familyDetails:{
        totalMembers:5,
        siblings:["a","b","c"]
     }, // nested method
     walk() // inside a obj no need to use function keyword
     {
        console.log("I am going to home");
     }
}

// console.log(man);

for(let key in man)
{
    // console.log(key);
    console.log(man[key]);
}

//for-in loop (array)

let a=[12,23,34,45,56]
for(let key in a) // key points the index
{
    console.log(a[key]);
}

//for-in loop (string)

let b="Shobana"
for(let key in b)
{
    console.log(b[key]);
}