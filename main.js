let body = document.getElementById("by");
let header = document.getElementById("he");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");

function btn1() {
  by.style.color = "white";
  by.style.backgroundColor = "black";
  he.style.color = "white";
  he.style.backgroundColor = "black";
}

function btn2() {
  by.style.color = "black";
  by.style.backgroundColor = "white";
  he.style.color = "black";
  he.style.backgroundColor = "whitesmoke";
  btn2.style.color = "black";
  btn1.style.color = "black";
}
