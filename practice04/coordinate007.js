const target = document.querySelector("img");
const t = target.getBoundingClientRect();

const coordinate = document.querySelector(".coordinate");

const up = document.querySelector(".up");
const left = document.querySelector(".left");

function renderLine(e) {
  up.style.left = e.clientX + "px";
  left.style.top = e.clientY + "px";
}

function renderCoordinate(e) {
  coordinate.style.position = "absolute";
  coordinate.style.left = e.clientX + 20 + "px";
  coordinate.style.top = e.clientY + 20 + "px";
  coordinate.style.color = "white";
  coordinate.innerText = `${e.clientX} : ${e.clientY} `;
}

function renderTarget(e) {
  target.style.left = e.clientX - t.width / 2 + "px";
  target.style.top = e.clientY - t.height / 2 + "px";
}

function targetMove(e) {
  renderTarget(e);
  renderLine(e);
  renderCoordinate(e);
}

function init() {
  window.addEventListener("mousemove", targetMove);
}

init();
