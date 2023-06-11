
let navbar = document.querySelector('.header .navbar');

document.querySelector("#menubtn").onclick = () =>{
    navbar.classList.add('active');

}

document.querySelector("#close-navbar").onclick = () =>{
    navbar.classList.remove('active');

}

var swiper = new Swiper('.home-slider', {
    pagination:{
        el: '.swiper-pagination',
        clickable:true,
    },
    loop : true,
    grapCursor:true,
});

var swiper = new Swiper('.course-slider', {
    spaceBetween:20,
    grapCursor:true,
    loop : true,
    
    pagination:{
        el: '.swiper-pagination',
        clickable:true,
    },
    breakpoints :{
        540: {
            slidesPerView : 1,
        },
        768: {
            slidesPerView : 2,
        },
        1024: {
            slidesPerView : 3,
        },

    },
});


