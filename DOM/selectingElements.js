console.log(document);

let heading = document.getElementsByTagName("h1");
console.log(heading);

let para1 = document.getElementsByClassName("para1")
console.log(para1)

let uniqPara = document.getElementById("unique-Para")
console.log(uniqPara)

let nameAttri=document.getElementsByName("Dhanalakshmi")
console.log(nameAttri)

// querySelector()
let selectOne = document.querySelector("h1")
console.log(selectOne)

// class

let selectTwo = document.querySelector(".para1")
console.log(selectTwo)

// id

let selectThree = document.querySelector("#unique-Para")
console.log(selectThree.innerHTML);

//querySelectorAll()

let selectFour = document.querySelectorAll("h1")
console.log(selectFour);

// class

let selectFive = document.querySelectorAll(".para1")
console.log(selectFive);

// id

let selectSix = document.querySelectorAll("#unique-Para")
console.log(selectSix)

// creating elements

let newElement = document.createElement("h2")
newElement.innerText="Hello World!!!"
console.log(newElement)
document.body.append(newElement)


 