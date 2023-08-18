const container = document.querySelector("#container");

function createDivs(num) {
  let sqrt = Math.sqrt(num);
  let size = 100 / Math.ceil(sqrt);
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.style.width = `${size}%`;
    div.style.height = `${size}%`;
    div.classList.add("square");
    container.append(div);
  }
}

/* function removeHoverEffect(divs) {
  divs.forEach((div) => {
    div.addEventListener("mouseout", function (e) {
      this.classList.remove("hover");
    });
  });
} */

function removeHoverEffect(divs) {
  divs.forEach((div) => {
    div.classList.remove("hover");
  });
}

function addHoverEffect(divs) {
  divs.forEach((div) => {
    div.addEventListener("mouseenter", function (e) {
      if (isMouseDown === true) this.classList.add("hover");
    });
  });
}

createDivs(900);

let squares = document.querySelectorAll(".square");

addHoverEffect(squares);

const button = document.querySelector(".button");
const eraseButton = document.querySelector(".button-erase");

button.addEventListener("click", () => {
  let number = +prompt("How many squares?");
  container.textContent = "";
  createDivs(number);
  let squares = document.querySelectorAll(".square");
  addHoverEffect(squares);
});

eraseButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  removeHoverEffect(squares);
});

document.addEventListener("mousedown", function () {
  isMouseDown = true;
});

document.addEventListener("mouseup", function () {
  isMouseDown = false;
});

container.addEventListener("dragstart", function (e) {
  e.preventDefault();
});
