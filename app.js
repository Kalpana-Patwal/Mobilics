// var swiper = new Swiper(".mySwiperr", {
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     slidesPerView:1,
//     spaceBetween: 10,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         }
//     }
// });

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



$(document).ready(function(){
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background","#222");
            $(".navbar").css("box-shadow","rgba(0,0,0,0.1)0px 4px 12px");

        }
        else{
            $(".navbar").css("background","transparent");
            $(".navabr").css("box-shadow","none");
        }

    })
});


var navbarHeight=$(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref=$(this).attr("href");
    $("html,body").animate({
        scrollTop:$(targetHref).offset().top-navbarHeight
    },1000)
    e.preventDefault();
});


const mobile=document.querySelector("menu-toggle");
const mobileLink=document.querySelector(".navbar-menu");
mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLinl.classLit.toggle("active");
})

mobileLink.addEventListener("click",function(){
    const menuBars=document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList,remove("active");
    }
})



/*
 $(".myswiper").slick({
slidesToShow:3,
infinite:false,
slidesToScroll:1,
autoplay:true,
autoSpeed:2000

 });*/