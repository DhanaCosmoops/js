function manipulateElements() {
  // let newListElement = document.createElement("li")
  // console.log(newListElement);

  // newListElement.innerText = "Item-4"
  // newListElement.innerHTML = "<a> Link </a> Item-5"
  // newListElement.textContent = "<a> Link </a> Item-5"

  // getting values from inputs

  let newListElement = document.createElement("li");
  let input = document.querySelector("input");
  newListElement.innerText = input.value;
  // console.log(newListElement);

  let orderList = document.querySelector("ol");

  // orderList.append("Text Node", newListElement)

  orderList.insertBefore(newListElement, orderList.children[0]);
  /* orderList.replaceChild(newListElement,orderList.children[0])
  orderList.removeChild(orderList.children[1])
  orderList.remove()  */
  // orderList.prepend( "Text Node" , newListElement)
  orderList.appendChild(newListElement);
  newListElement.style.color = "Yellow";
}
