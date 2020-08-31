const target = document.querySelector("img");
const t = target.getBoundingClientRect();

const coordinate = document.querySelector(".coordinate");

const up = document.querySelector(".up");
const left = document.querySelector(".left");

function renderLine(e) {
  up.style.transform = `translateX(${e.clientX}px)`;
  left.style.transform = `translateY(${e.clientY}px)`;
}

function renderCoordinate(e) {
  const x = e.clientX + 20;
  const y = e.clientY + 20;

  coordinate.style.position = "absolute";
  coordinate.style.transform = `translate(${x}px, ${y}px)`;
  coordinate.style.color = "white";
  coordinate.innerText = `${e.clientX} : ${e.clientY} `;
}

function renderTarget(e) {
  const x = e.clientX - t.width / 2;
  const y = e.clientY - t.height / 2;
  target.style.transform = `translate(${x}px, ${y}px)`;
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
