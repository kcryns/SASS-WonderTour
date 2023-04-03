const btop =document.querySelector(".backtotop") ;
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if(window.pageYOffset >=200){
    btop.classList.add("show")
  }
  else{
    btop.classList.remove("show")
  }
})


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
            dropd.nextElementSibling.classList.toggle("open");
            dropd.querySelector("i").classList.toggle("open");
            dropd.parentElement.classList.toggle("active");
        }); 
    });


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

    var slider = tns({
          container: '.blog__card',
          items: 1,
          slideBy: 'page',
          autoplay: false,
          axis: "horizontal",
          controls: false,
          nav: true,
          autoplayPosition: false,
          autoplayButton:false,
          responsive:{
            970:{
                items:2,
                autoplay: true,
            }
          }
      });

      var slider = tns({
            container: '.gallery__imgs',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            axis: "horizontal",
            nav: true,
            autoplayPosition: false,
            autoplayButton:false,
            responsive:{
              970:{
                  nav: false,
                  items:6,
                  slideBy: 1,
                  autoplay: true,
                  controls: true,
                  controlsText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                  
              }
            }
        });
    
const starnav = document.querySelectorAll(".star__nav__link");
const starcontent = document.querySelectorAll(".page__content");
starnav.forEach((star) => {
  star.addEventListener("click", () => {
      removeActiveStar();
      star.classList.add("active");
      const activeContent= document.querySelector(`#${star.id}-content`);
      removeActiveContent();
      activeContent.classList.add("active");
})

});

function removeActiveStar(){
  starnav.forEach((star) => {
    star.classList.remove("active");
  })
}
function removeActiveContent(){
  starcontent.forEach((star) => {
    star.classList.remove("active");
  })
}