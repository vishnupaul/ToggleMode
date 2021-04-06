const toggle = document.querySelector(".toggle-btn");
// console.log(toggle);
const body = document.querySelector(".main");
// console.log(body);
const ball = document.querySelector(".ball");
// console.log(ball);
toggle.addEventListener("click", function () {
  body.classList.toggle("bodyEffect");
  ball.classList.toggle("ballEffect");
});
