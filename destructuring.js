//destructring

let arr=[10,20,30,40,50]
let fval=arr[0]; // op:10

// destructuring using array
// let[a,b,c,d,e]=arr
//console.log(a,c,e); // op:10,30,50

let[a,,,,e]=arr
console.log(a,e);// op:10,50

// destructuring using rest operator

let val=[100,90,80,70,60,50,40,30,20,10]
let[a1,a2,a3,...a4]= val
console.log(a1,a2,a3,a4);  /* op:100 90 80 [
    70, 60, 50, 40,
    30, 20, 10] */
  
// Destructuring using nested array

let value=[100,200,300,[400,500,[600,700,800]]]
// let[v1,v2,v3,[v4,v5,[v6,v7,v8]]] = value
// console.log(v1,v2,[v4,v5,[v6,v7,v8]]); //op:100 200 [ 400, 500, [ 600, 700, 800 ] ]

let[v1,v2,v3,...v4] = value
console.log(v1,v2,v3,v4); //op: 100 200 300 [ [ 400, 500, [ 600, 700, 800 ] ] ]
 

