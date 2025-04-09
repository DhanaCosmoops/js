 // object 

 let user = {
    name:"Dhana",  //Properties
    age:22,
    eyeColor:"black",
    hairColor:"black",
    
    eat:function()   // Functions or methods
    {
        console.log("Heloo everyone!!!");
        return "How are you ?";

    }
}
 console.log(user);
 console.log(user.name,user.age);
 user.eat(); // doesn't print the return stmt
 // console.log(user.eat()); // o/p+undefined(bcoz function can be inside the console.log)
 let user1=user.eat();
 console.log(user1); 

 // Another example
  let vehicle={
    "name":"Audi",
    "price":400000,
    fuelType:"diesel",
    "seater Type":["one","two","three","four"]
  }
  // console.log(vehicle);
  console.log(vehicle.name);

  // using array literals
  console.log(vehicle["price"]);
 // console.log(vehicle[price]); // shows error bcoz we declared price as str without "" it shows errors
  console.log(vehicle["fuelType"]);
  console.log(vehicle["seater Type"]);
 // console.log(vehicle[seater Type]); // shows err bcoz "" is missed
 console.log(vehicle["seater Type"][0]); 

 //Short-hand property
 //Dynamic property

 let pname="aravind"
  let page=25

 let person={
    pname:pname,
    page:page
 }
  
  console.log(person.pname,page);

  // shorthand means if the property and  value is same use like this

  let person1={
    pname,         // shorthand property
    page
  }
  console.log(person1.pname,page);

  //dynamic property
// means: we have to assign the value as property
  let dynamicProp = "employeeID"
  let person2 = {
    [dynamicProp] :"IFS473",
    ['dynamicProp'] :"UFS473"
  }
  console.log(person2[dynamicProp]);
  console.log(person2.dynamicProp);
  console.log(person2);