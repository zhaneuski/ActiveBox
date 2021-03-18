$(function () {

    /* Fixed header */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");

    $(window).on("scroll load resize", function () {

        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* Smooth scroll */

    $("[data-scroll]").on("click", function (evennt) {

        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;


        // console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 800);

        nav.removeClass("show");

    });



    /* Burger Menu */

    $("#navToggle").on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");

    })

    /* Reviews Slider / https://kenwheeler.github.io/slick/ */


    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500
    });




});