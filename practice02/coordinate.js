const arr = document.querySelectorAll("div");

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

function init() {
  window.addEventListener("click", func);
}

init();
