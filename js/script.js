//Hamburger
document.body.querySelector(".hamburger").addEventListener("click", function(event){
    document.body.querySelector(".hamburger").classList.toggle("hamburger_active");
    document.body.querySelector(".header__list").classList.toggle("header__list_active");
})

//Slider
$(document).ready(function(){
    $('.reviews__items').slick({
        speed: 525,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrowleft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrowright.svg"></button>',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                prevArrow: '<button type="button" class="slick-prev" hidden=true><img src="img/icons/arrowleft.svg"></button>',
                nextArrow: '<button type="button" class="slick-next" hidden=true><img src="img/icons/arrowright.svg"></button>',
              }
            }
        ]
    });

    $(function(){
        $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });
});