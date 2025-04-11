// indexOf

let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let newArr1 = arr.indexOf(40); // Op:3
console.log(newArr1);
let newArr2 = arr.indexOf(50, 2); // searching an elements from index 2
console.log(newArr2);
let newArr3 = arr.indexOf(40, -7); // Op: 3
console.log(newArr3);
let newArr4 = arr.indexOf(20, 2); // op: -1
console.log(newArr4);
// if the val r not found return (-1)

// lastIndexOf()

let last = arr.lastIndexOf(30); //op:2
console.log(last);

let last1 = arr.lastIndexOf(40);
console.log(last);
