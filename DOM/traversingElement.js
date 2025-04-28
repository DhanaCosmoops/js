// Parent
function traversingParent() {
  let getParent = document.querySelector(".child1");
  console.log(getParent.parentElement);
  console.log(getParent.parentNode);

  let getParent1 = document.querySelector("html");
  console.log(getParent1.parentElement); // null
  console.log(getParent1.parentNode); // document
}

// Node --> Element Node, text Node, attribute Node, document Node

// child

function selectChild() {
  let getElementByClass = document.querySelector(".parent");
  console.log(getElementByClass);
  console.log(getElementByClass.childElementCount);
  console.log(getElementByClass.childNodes);
  console.log(getElementByClass.children);
  console.log(getElementByClass.firstChild); // javascript
  console.log(getElementByClass.firstElementChild); // div.child1
  console.log(getElementByClass.lastChild); // single Thread
  console.log(getElementByClass.lastElementChild); // div.child3
}
selectChild();

// Siblings

function selectSiblings() {
  let child1 = document.querySelector(".child1");
  console.log(child1); // div.child1
  console.log(child1.nextSibling); //  Dynamically typed
  console.log(child1.previousElementSibling); // null
  console.log(child1.previousSibling);
}

selectSiblings();
