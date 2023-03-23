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
});


const dropp = document.querySelectorAll(".fa-chevron-down");
dropp.forEach((dropps) => {
    dropps.addEventListener('click',()=>{
        const el = dropps.parentElement.parentElement;
        el.classList.toggle("open");
        dropps.classList.toggle("open");
        dropps.parentElement.parentElement.classList.toggle("active");
    })
})
// const drop_down = document.querySelectorAll(".navigation .drop_down")
// drop_down.forEach((dropd) => {
//     dropd.addEventListener("click", () => {
//         dropd.nextElementSibling.classList.toggle("open");
//         dropd.querySelector("i").classList.toggle("open");
//     });
// });