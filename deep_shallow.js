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
person1.hobbies.cricket = "ODI Player";

console.log(person1, person2);

// convert obj to str
let person3 = JSON.stringify(person1);
console.log(person3);
