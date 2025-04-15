let employee = {
  name: "Dhana",
  age: 22,
  add: function (a, b) {
    console.log(a + b);
    console.log(this.name);
  },
};
console.log(employee); // { name: 'Dhana', age: 22, add: [Function: add] }
console.log(employee.name);
employee.add(10, 20);

// using arrow func()

ename = "Akshaya";
let employee1 = {
  ename: "Shobana",
  eage: 22,
  add: (a, b) => {
    console.log(a + b);
    console.log(this.ename);
  },
};
employee1.add(40, 30);

// call

let person = {
  pFname: "Teena",
  pLname: "Dorcas",
};

let person1 = {
  id: "IFS473",
  introUrSelf: function (a, b) {
    console.log(this.pFname + " " + this.pLname + ":" + " " + (a + b));
    return a + b;
  },
};

person1.introUrSelf.call(person, 20, 10); // call
person1.introUrSelf.apply(person, [13, 10]); // apply
let newPerson = person1.introUrSelf.bind(person, 30, 10); // bind
console.log(newPerson());
