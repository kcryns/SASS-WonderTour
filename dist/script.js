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


// const dropp = document.querySelectorAll(".fa-chevron-down");
// dropp.forEach((dropps) => {
//     dropps.addEventListener('click',()=>{
//         const el = dropps.parentElement.parentElement;
//         el.classList.toggle("open");
//         dropps.classList.toggle("open");
//         dropps.parentElement.parentElement.classList.toggle("active");
//     })
// })
const drop_down = document.querySelectorAll(".drop_down .li__head")
drop_down.forEach((dropd) => {
    dropd.addEventListener("click", () => {
     const content = dropd.nextElementSibling;
     const icon = dropd.querySelector("i");
     const head = dropd.parentElement;
     if (head.classList.contains("active")){
        content.classList.remove("open");
        icon.classList.remove("open");
        head.classList.remove("active");

     } else{
        yow();
        content.classList.toggle("open");
        icon.classList.toggle("open");
        head.classList.toggle("active");
     }
    });
});

const yow = () => {
    drop_down.forEach((dropd) => {
        // dropd.addEventListener("click", () => {
            // console.log(dropd.nextElementSibling)
            // dropd.nextElementSibling.classList.remove("open");
            // dropd.querySelector("i").classList.remove("open");
            // dropd.parentElement.classList.remove("active");
        // });
        
        // console.log(dropd)
        // const head = dropd.nextElementSibling;
        // console.log(head)
       
    });
    // console.log(drop_down);
}



var slider = tns({
        container: '.banner__banner',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        axis: "vertical",
        controls: false,
        nav: false,
        autoplayPosition: false,
        autoplayButton:false,
    });
    