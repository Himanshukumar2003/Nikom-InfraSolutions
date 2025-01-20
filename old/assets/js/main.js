

$(".depatments-slider").slick({
    dots: !1,
    infinite: !0,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 3e3,
    arrows: !0,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/img/arrow-left.svg' alt='prev arrow'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='assets/img/arrow-right.svg' alt='next arrow'>",
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
