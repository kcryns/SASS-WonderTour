const toggle__burger = document.querySelector(".toggle__burger");
const navigation = document.querySelector(".navigation");
const toggle__dot = document.querySelector(".toggle__dot");
const time = document.querySelector(".time");
toggle__burger.addEventListener("click", () => {
toggle__burger.classList.toggle("open");
navigation.classList.toggle("open");
time.classList.remove("open");
toggle__dot.classList.remove("open");
});


toggle__dot.addEventListener("click", () => {
toggle__dot.classList.toggle("open");
time.classList.toggle("open");
navigation.classList.remove("open");
toggle__burger.classList.remove("open");
})