const form = document.querySelector(".app__form");
const space = document.querySelector(".app__space");
const input = document.querySelector(".app__input");
const Addbutton = document.querySelector(".app__button");
const ul = document.querySelector("ul");

function AddIteminList(value) {
  const item = document.createElement("li");
  item.style.listStyle = "none";

  const itemDiv = document.createElement("div");
  itemDiv.style.display = "flex";
  itemDiv.style.justifyContent = "space-between";
  itemDiv.style.width = "400px";

  const span = document.createElement("span");
  span.innerText = value;

  const delbutton = document.createElement("button");
  delbutton.innerText = "X";

  itemDiv.appendChild(span);
  itemDiv.appendChild(delbutton);

  item.appendChild(itemDiv);
  ul.appendChild(item);

  item.scrollIntoView({ block: "center" });
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
  ul.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const tmp = e.target.parentNode;
      ul.removeChild(tmp.parentNode);
    }
  });
}

init();
