// concat

let arr=[10,20,30,40]
let arr1=[50,60,70,80]
let arr2= arr.concat(arr1)

let arrNew=arr.concat(100,200)
console.log(arrNew);
// op:[ 10, 20, 30, 40, 100, 200 ]

console.log(arr2); 

/* op: [
    10, 20, 30, 40,
    50, 60, 70, 80
  ] */

  // clone
let newArr1=[].concat(arr)
console.log(newArr1); //op:[ 10, 20, 30, 40 ]


// slice method

 let array=[1,2,3,4,5]
 let sliceArray=array.slice()
 let sliceArray1=array.slice(0,3)

 array[0]=11
 console.log(array, sliceArray, sliceArray1);
 /* 

 op:[ 11, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ] [ 1, 2, 3, 4, 5 ] */

 // Flat array (remove nested array)

 let flatArray=[10,20,30,[40,50],[60,70,80]]
 let flatArray1=flatArray.flat(Infinity)
 console.log(flatArray1);

 // fill()

 let arrFill = [10,20,30,40,50]
 arrFill.fill(101,0,2)
 arrFill.fill(102,2,4)
 arrFill.fill(103,4,6)
 console.log(arrFill);