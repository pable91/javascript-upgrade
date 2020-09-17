const form = document.querySelector(".app__form");
const space = document.querySelector(".app__space");
const input = document.getElementsByClassName("app__input");

const ul = document.querySelector("ul");

function delItem(e) {
  const list = ul.querySelectorAll("li");
  var i;
  for (i = 0; i < list.length; ++i) {
    if (list[i].value === e.target.value) {
      ul.removeChild(list[i]);
      ul.removeChild(e.target);
    }
  }
}

function AddIteminList(value) {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.justifyContent = "space-between";
  div.style.width = "400px";

  const span = document.createElement("span");
  span.innerText = value;

  const button = document.createElement("button");
  button.value = value;
  button.innerText = "X";
  button.addEventListener("click", delItem);

  div.appendChild(span);
  div.appendChild(button);

  const li = document.createElement("li");
  li.value = value;
  li.style.listStyle = "none";
  li.appendChild(div);

  ul.appendChild(li);
}

function keyupFunc(e) {
  if (e.code == "Enter") {
    if (input[0].value != "") {
      AddIteminList(input[0].value);
      input[0].value = "";
    }
  }
}

function init() {
  document.addEventListener("keyup", keyupFunc);
}

init();
