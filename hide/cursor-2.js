// tempatkan di main.js

// ========--Cursor v2--===================
var cursor = document.querySelector(".cur1");
var cursorinner = document.querySelector(".cur2");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorinner.style.left = mouseX + "px";
  cursorinner.style.top = mouseY + "px";
});

function animateCursor() {
  const speed = 0.2; // Medium
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;
  cursor.style.transform = `translate3d(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%), 0)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

var textElements = document.querySelectorAll("h1, a"); // Text
textElements.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.style.zIndex = "1000";
    cursorinner.style.zIndex = "999";
  });
  item.addEventListener("mouseleave", () => {
    cursor.style.zIndex = "999";
    cursorinner.style.zIndex = "1000";
  });
});