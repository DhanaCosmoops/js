let person = {
  name: "swathi",
  age: 24,
  location: "chennai",
};

// console.log(person)

// Object.create
let newObj = Object.create(person);
console.log(newObj); // {} (we can't seen)

// newObj.__proto__ (we can see the prototype with the help of this method)
console.log(newObj.__proto__); // { name: 'swathi', age: 24, location: 'chennai' }

newObj.phoneNo = 9876543210;
console.log(newObj);
console.log(Object.getPrototypeOf(newObj));

// Object.assign

let person1 = {
  id: "IFS473",
  name: "Alia",
};
Object.assign(person1, { role: "Designer" });
console.log(person1);

let person2 = {
  id: "UFS456",
  name: "Ranbir",
};
let newObj1 = Object.assign(person2, { salary: 35000 });
console.log(newObj1);

// Object.entries

let emp = {
  name: "Ganesh",
  role: "Developer",
};
let multiArr = Object.entries(emp);
console.log(multiArr);

// Object.fromEntries

let normalObj = Object.fromEntries(multiArr);
console.log(normalObj);

// Object.keys

let onlyKeys = Object.keys(normalObj);
console.log(onlyKeys);

// Object.values

let onlyValues = Object.values(normalObj);
console.log(onlyValues);

// Object.freeze
// (normal)

let newObj2 = {
  id: "18",
};
console.log(newObj2); // { id: '18' }

newObj2.name = "Raha";
console.log(newObj2); // { id: '18', name: 'Raha' }

// (freeze method)

let newObj3 = {
  id: 101,
};
Object.freeze(newObj3);
newObj3.name = "Amirtha";
console.log(newObj3); // { id: 101 }

// Object.isFrozen

console.log(Object.isFrozen(newObj3)); // true
console.log(Object.isFrozen(newObj2)); // false
