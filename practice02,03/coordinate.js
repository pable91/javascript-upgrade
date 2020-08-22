const arr = document.querySelectorAll("div");

const b1 = document.querySelector(".button1");
const b2 = document.querySelector(".button2");
const b3 = document.querySelector(".button3");

const speical = document.querySelector(".speical");

function func(e) {
  let cx = e.clientX;
  let cy = e.clientY;

  let px = e.pageX;
  let py = e.pageY;

  for (let i = 0; i < arr.length; ++i) {
    let rect = arr[i].getBoundingClientRect();
    if (
      rect.left < cx &&
      cx < rect.right &&
      rect.top < cy &&
      cy < rect.bottom
    ) {
      console.log(arr[i].getBoundingClientRect());
      arr[i].style.backgroundColor = "red";
    } else {
      arr[i].style.backgroundColor = "aquamarine";
    }
  }
  console.log(`client : ${cx}, ${cy}`);
  console.log(`page : ${px}, ${py}`);
}

function ScrollbyY() {
  window.scrollBy(0, 100);
  // window.scrollTo(0, window.scrollY + 100);
}

function ScrolltoY() {
  window.scrollTo(0, 100);
}

function ScrolltoSpecial() {
  speical.scrollIntoView();
}

function init() {
  window.addEventListener("click", func);
  b1.addEventListener("click", ScrollbyY);
  b2.addEventListener("click", ScrolltoY);
  b3.addEventListener("click", ScrolltoSpecial);
}

init();
