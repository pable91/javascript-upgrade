const c = document.querySelector(".container");

function func() {
  c.innerHTML = `
    window.screen : ${window.screen.width}, ${window.screen.height} <br/>
    window.outer : ${window.outerWidth}, ${window.outerHeight}<br/>
    window.inner : ${window.innerWidth}, ${window.innerHeight}<br/>
    documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
    `;
}

function init() {
  func();
  window.addEventListener("resize", func);
}

init();
