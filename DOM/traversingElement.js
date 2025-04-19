// Parent
function traversingParent()
{


 let getParent = document.querySelector(".child1")
 console.log(getParent.parentElement);
 console.log(getParent.parentNode);


let getParent1 = document.querySelector("html")
console.log(getParent1.parentElement); // null
console.log(getParent1.parentNode);

}

// Node --> Element Node, text Node, attribute Node, document Node


