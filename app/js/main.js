$(function(){

    //Главный слайдер
    $('.main-slider').slick({
        dots:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        draggable:false,
        prevArrow: '.slider-arrow__prev',
        nextArrow: '.slider-arrow__next',
    })

    function activated(activeItem) {
        $(activeItem).click(function(){
            $(this).parent().children().removeClass("active");
            $(this).addClass("active");
        })
    }

    //Активация спииска иконок
    activated(".list-icon__elem");
    //Активация галереи
    activated(".gallery__card");

    //Добавление фона меню при прокрутке
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >=50 ) {
            $(".header-nav-wrap").addClass("scroll");
        }
        if ($(window).scrollTop() <50 ) {
            $(".header-nav-wrap").removeClass("scroll");
        }
    })

    //Управление видео
    $("#video-play").click(function() {
        document.querySelector("#video").play();
        $(".video-info-wrap").css("display","none");
    })
    $("#video").click(function() {
        document.querySelector("#video").pause();
        $(".video-info-wrap").css("display","");
    })
    
    //Адаптивное меню
    $(window).resize(function() {
        if($(document).width()<960) {
            $(".menu-icon").css("display", "block");
            $(".nav").addClass("nav-mini");
            $(".nav").css("display", "none");
        } else if($(".nav").hasClass("nav-mini")) {
            $(".menu-icon").css("display", "");
            $(".nav").removeClass("nav-mini");
            $(".nav").css("display", "");
        }
    });
    $(".menu-icon").click(function() {
        $(".nav-mini").slideToggle(200);
        $(".header-nav-wrap").addClass("scroll");
    })

    
    $(window).resize();
    $(window).scroll();
});