$(document).ready(function () {

    $('.example').square1({
        // options here
    });

    $('.example').square1({

        // or 'contain'
        fill_mode: 'cover',

        // CSS background-position property
        scale_from: 'center center'

    });

    $('.example').square1({

        lazy_load: true

    });

    $('.example').square1({

        // use slide transition
        animation: 'slide'

        // in milliseconds
        slide_duration: 4000,
        transition_time: 500

    });

    $('.example').square1({

        keyboard: true,
        gestures: true

    });

    $('.example').square1({

        auto_start: true,
        start_delay: 0,
        pause_on_hover: false

    });

    $('.example').square1({

        theme: 'light'

    });

    $('.example').square1({

        // 'inside', 'outside', 'hover', 'none'
        prev_next_nav: 'inside',
        dots_nav: 'inside',
        caption: 'outside'

    });

    $('.example').square1({

        width: '',
        height: '',
        background: 'none'

    });

    $('.example').square1({

        onLoad: function () { },
        onPlay: function () { },
        onStop: function () { },
        onChange: function () { }

    });






    // play
    $('.example').square1('play');

    // stop
    $('.example').square1('stop');

    // goto the next slide
    $('.example').square1('next');

    // goto a specific slide
    $('.example').square1(2);



    function siteInit() {
        navDropDowns()
    }


    siteInit();

    $(".LogOutBubbleUl a img").attr("src", "http://i1366.photobucket.com/albums/r770/csmhowitzer/powerButtonLight_zpsd491955b.png");

    if ($(document).width() <= 1100) {
        $(".LogOutBubbleUl li > span").css("display", "none");
        $(".LogOutBubble").css("width", "50px");
    }

    $(".LogOutBubbleUl a").hover(function () {
        $(".LogOutBubbleUl a img").attr("src", "http://i1366.photobucket.com/albums/r770/csmhowitzer/powerButtonDark_zps2dde8bb4.png");
    }, function () {
        $(".LogOutBubbleUl a img").attr("src", "http://i1366.photobucket.com/albums/r770/csmhowitzer/powerButtonLight_zpsd491955b.png");
    });

    $(".LogOutBubbleUl a").mousedown(function () {
        $(".LogOutBubbleUl a img").attr("src", "http://i1366.photobucket.com/albums/r770/csmhowitzer/powerButtonActiveV3_zpsb06cfe5e.png");
    });


    function navDropDowns() {
        $("#main-nav > li").hover(
            function () {
                var ww = $(window).width();
                if (ww > 640) $(this).find(".nav-list").show();
            },
            function () {
                $(this).find(".nav-list").hide();
            }
        );
        $('.nav-title').click(function () {
            var ww = $(window).width();
            if (ww > 640) {
                $(this).next().toggle();
                return false;
            }
        });
    }
    // slider
    $('.example').jdSlider();

    $('.example').jdSlider({

        // enable/disable the carousel
        isUse: true,

        // wrapper element
        wrap: null,

        // default CSS selectors
        slide: '.slide-area',
        prev: '.prev',
        next: '.next',
        indicate: '.indicate-area',
        auto: '.auto',
        playClass: 'play',
        pauseClass: 'pause',
        noSliderClass: 'slider--none',
        willFocusClass: 'will-focus',
        unusedClass: 'hidden',

        // how many slides to display at a time
        slideShow: 1,

        // how many slides to scroll at a time
        // slideTo<a href="">Scroll</a>: 1,

        // start slide
        slideStart: 1,

        // margin property
        margin: null,

        // animation speed
        speed: 500,

        // easing
        timingFunction: 'ease',
        easing: 'swing',

        // autoplay interval
        interval: 4000,

        // touch throttle
        touchDistance: 20,

        // resistance ratio
        resistanceRatio: .5,

        // is overflow
        isOverflow: false,

        // shows indicator
        isIndicate: true,

        // is autoplay
        isAuto: false,

        // is infinite loop
        isLoop: false,

        // false: use fade animation instead
        isSliding: true,

        // pause on hover
        isCursor: true,

        // enable touch event
        isTouch: true,

        // enable drag event
        isDrag: true,

        // enable swipe resistance
        isResistance: true,

        // auto playback
        isCustomAuto: false,

        // auto playback
        autoState: 'auto',

        // custom indicator
        indicateList: function (i) {
            return '<a href="#">' + i + '</a>';
        },

        // progress function
        progress: function () { }

    });

    $('.example').jdSlider({

        responsive: [
            {
                viewSize: 768, // breakpoint(0~768)
                settings: {
                    // options here
                }
            }, {
                viewSize: 1024, // break point (769~1024)
                settings: {
                    // options here
                }
            }
        ]
    });


});
