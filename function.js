let person={
    name:"Dhana",
    age:20
}



function printUserName( uName,uAge)
{
    //console.log("Hello Everyone!!!",person.name,person.age);
    if(uAge>20){
        console.log(`Hi ${uName} , your age is ${uAge}`);
    }
    
}
printUserName("Shahitya",23)
printUserName("Shobana",22)
printUserName("Deepika",21)
printUserName("Priyadharshini",20)

//Default parameter or default argument

function user(userName="Alia",userAge=25)
{
    console.log(`Hello ${userName}, Your age is ${userAge} right!!`);

}
user("Anu",20)
user("Bharath",22)
user("Pavithra")
user(undefined,26)
user( )

//Setting default values to Variable

let employeeId="IFS1234"
let newId=employeeId || "FSC1234"
console.log(newId);

//Return Type 

function rectangle(l,b)
{  
    return l*b;
}
let newVal=rectangle(5,5); // Another type
console.log(rectangle(10,5),newVal);


//Using conditional stmt inside function

function rect(l,b)
{
let condition=true
    if(condition)
    {
        return l*b;
    }
    else
    {
        return null;
    }

}
console.log(rect(10,4));


//Non-Return Type

function sample()
{
    console.log("Welcome!!!");
    //return 12;
}
let new1 = sample()
console.log(new1);  //op: undefined
