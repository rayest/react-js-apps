const canvas = document.getElementById("myCanvas");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let radius = 10;
let x = 50;
let y = 50;
let drawing = false;

// 鼠标按下
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

// 鼠标松开
canvas.addEventListener("mouseup", (e) => {
  drawing = false;
});

// 鼠标移动
canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    x = e.offsetX;
    y = e.offsetY;
    drawCircle(x, y, radius);
  }
});

// 鼠标click
canvas.addEventListener("click", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y, radius);
});

increaseButton.addEventListener("click", () => {
  if (radius > 50) {
    return;
  }
  radius += 5;
  updateSizeOnScreen();
});

decreaseButton.addEventListener("click", () => {
  if (radius < 10) {
    return;
  }
  radius -= 5;
  updateSizeOnScreen();
});

colorElement.addEventListener("change", (e) => {
  ctx.fillStyle = e.target.value;
});

function drawCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function updateSizeOnScreen() {
  sizeElement.innerText = radius;
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

clearElement.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
