const button = document.querySelector("button");
const rabbit = document.querySelector(".rabbit");
const rect = rabbit.getBoundingClientRect();

function init() {
  button.addEventListener("click", () => {
    //window.scrollTo({ left: 0, top: rect.y, behavior: "smooth" });
    rabbit.scrollIntoView({ behavior: "smooth" });
  });
}

init();
