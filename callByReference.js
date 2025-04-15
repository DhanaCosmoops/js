// call by reference

let obj1 = {
  name: "Shobana",
};

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = "one";

let obj2 = obj1;
obj1.name = "Vamika";
obj2.role = "UI/UX Designer";

console.log(obj1, obj2);
console.log(arr1, arr2);
