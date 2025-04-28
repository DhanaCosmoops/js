let button1 = document.getElementById("listener");
let button2 = document.getElementById("handler");

button1.addEventListener("click", function () {
  console.log("First Listener");
});

button1.addEventListener("click", function () {
  console.log("Second Listener");
});

button1.addEventListener("click", function () {
  console.log("Third Listener");
});

button2.onclick = function () {
  console.log("First Handler");
};

button2.onclick = function () {
  console.log("Second Handler");
};

/* function firstHandler()
{
    console.log("First Handler");
}
function secondHandler()
{
    console.log("Second Handler");
} */

let image = document.querySelector("img");
let para = document.querySelector("p");

image.addEventListener("mouseover", function () {
  image.src = "img1.jpg";
  para.innerText = "I'm a Flower";
});

image.addEventListener("mouseout", function () {
  image.src = "img2.jpg";
  para.innerText = "I'm a Doll";
});
