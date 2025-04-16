// deep copy using primitive datatypes

let a = 20;
let b = a;
b = 10;
console.log(a, b);

// deep copy using non-primitive datatypes

let obj1 = {
  name: "Dhanalakshmi",
  age: 22,
};

let obj2 = { ...obj1 };
obj2.name = "Teena Dorcas";

console.log(obj1, obj2);

// shallow copy

let person1 = {
  name: "Swathi",
  role: "Youtuber",
  hobbies: {
    cricket: "t20 Player",
    football: "60 minutes",
  },
};

let person2 = { ...person1, hobbies: { ...person1.hobbies } };
person1.role = "Content Creator";
person2.name = " Ramya";
person2.hobbies.cricket = "test player";
person1.hobbies.cricket = "ODI Player";

console.log(person1, person2);

// convert obj to str
let person3 = JSON.stringify(person1);
console.log(person3);

// convert str to obj

let newObj = JSON.parse(person3);
console.log(newObj);

// Array - shallow Copy

let arr1 = [1, 2, 3, [4, 5]];
let arr2 = [...arr1];
arr1[0] = "one";
arr2[1] = "two";
console.log(arr1, arr2);

// Array - Deep Copy

let array1 = [1, 2, 3, [4, 5]];
let array2 = [...array1];
let array3 = JSON.parse(JSON.stringify(array1));
array1[0] = "One";
array2[1] = "Two";
array1[3] = "Four"; // op: [ 'One', 2, 3, 'Four' ] [ 1, 'Two', 3, [ 4, 5 ] ]
// This completely replaces the nested array [4, 5] with the string "Four".
array3[3][1] = "Five";
console.log(array1, array2);
console.log(array3);
