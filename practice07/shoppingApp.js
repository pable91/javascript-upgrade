const form = document.querySelector(".app__form");
const space = document.querySelector(".app__space");
const input = document.querySelector(".app__input");
const Addbutton = document.querySelector(".app__button");
const ul = document.querySelector("ul");

function AddIteminList(value) {
  const li = document.createElement("li");
  li.style.listStyle = "none";

  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.justifyContent = "space-between";
  div.style.width = "400px";

  const span = document.createElement("span");
  span.innerText = value;

  const delbutton = document.createElement("button");
  delbutton.value = value;
  delbutton.innerText = "X";
  delbutton.addEventListener("click", () => {
    ul.removeChild(li);
  });

  div.appendChild(span);
  div.appendChild(delbutton);

  li.appendChild(div);

  ul.appendChild(li);
}

function keyupFunc(e) {
  if (e.code == "Enter") {
    if (input.value != "") {
      AddIteminList(input.value);
      input.value = "";
    }
  }
}

function buttonFunc() {
  if (input.value != "") {
    AddIteminList(input.value);
    input.value = "";
    input.focus();
  }
}

function init() {
  document.addEventListener("keyup", keyupFunc);
  Addbutton.addEventListener("click", buttonFunc);
}

init();
