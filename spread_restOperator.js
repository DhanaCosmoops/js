// spread-operator using array

let hobbies=["cricket","tennis","football","hockey"]
let hobbies1=["reading","travelling"]
let newArr=[...hobbies,...hobbies1]

let newArr1=[...newArr,"volleyball","basketball"]
console.log(newArr,newArr1);

//spread-operator using object

let empId={
    id:"IFS123",
    name:"Shobana",
    age:22,

}
let team={...empId,id:"UFS123", salary:25000,role:"Fullstack Developer"}
console.log(team);

//rest parameter or rest operator

// function restParam(arr)// op:1
// function restParam(...arr)// op:1,2,3,4,5,6
function restParam(a,b,...arr) // op: 1 2 [ 3, 4, 5, 6 ]
{
console.log(a,b,arr);
}
restParam(1,2,3,4,5,6)