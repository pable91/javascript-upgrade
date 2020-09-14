const form = document.querySelector(".app__form");
const space = document.querySelector(".app__space");
const input = document.getElementsByClassName("app__input");

const ul = document.querySelector("ul");

function delItem(e) {
  const list = ul.querySelectorAll("li");
  var i;
  for (i = 0; i < list.length; ++i) {
    if (list[i].innerText == e.target.value) {
      ul.removeChild(list[i]);
      ul.removeChild(e.target);
    }
  }
}

function AddIteminList(value) {
  const li = document.createElement("li");
  li.innerText = value;
  li.style.listStyle = "none";
  li.style.display = "inline-block";
  li.style.width = "400px";

  const button = document.createElement("button");
  button.value = value;
  button.innerText = "X";
  button.addEventListener("click", delItem);

  ul.appendChild(li);
  ul.appendChild(button);
}

function keyupFunc(e) {
  if (e.code == "Enter") {
    AddIteminList(input[0].value);
    input[0].value = "";
  }
}

function init() {
  document.addEventListener("keyup", keyupFunc);
}

init();
