$(document).ready(function() {
    /*        $('.postBody').find('li').each(rtlToltrFixer);
    $('.postBody').find('h1').each(rtlToltrFixer);
    $('.postBody').find('h2').each(rtlToltrFixer);
    $('.postBody').find('h3').each(rtlToltrFixer);*/


    //Change list li bullets according to posts' language
    var fixList = function changeListDirection() {
        if ($(".postBody ul").attr("dir") == "ltr") {
            var val = $(".fa-li").css("right");
            $(".fa-li").css("right", "auto");
            $(".fa-li").css("left", val);
            fixCounter++;
        } else if (typeof $(".postBody ul").attr("dir") == "undefined") {
            //do non
          //  counter++;
        } else {
            counter++;
        }
    }
    fixList();
    var fixCounter = 0;
    setInterval(function() {
        if (fixCounter == 0) {
            if ( !! $(".fa-li").css("right") != 0) {
                fixList();
                console.log("fixed the list");
            }
        }
    }, 1000);

    //END OF CHANGE LIST DIRECTION

    $('.postBody').find('li').each(rtlToltrListFixer);

    function rtlToltrListFixer() {
        var containNotLatin = false;
        var str = $(this).text();
        for (var i = 0; i < str.length; i++) {
            containNotLatin = containNotLatin || (str.charCodeAt(0) > 127); // basic latin end at 0x7F (127) 
        }
        console.log(containNotLatin);
        if (!containNotLatin) {
            $(this).children().css('right', '100px');
            $(this).children().css('left', '-2.14285714em');
            $(this).parent('ul').css('padding-left', '2.14285714em');

            /* ltr injector 
                  $(this).css('direction', 'ltr').css('text-align', 'right');*/
        } else {
            console.log('aviad eat my shit');
        }
    }


    /* li with icons */
    $(document).on('init.slides', function() {
        $('.loading-container').fadeOut(function() {
            $(this).remove();
        });
    });

    // REQUIRED FOR DROPDOWN HOVER for mobile and PC on POSTS PAGES
    $('.dropdown-toggle').dropdownHover();

    // REQUIRED FOR DROPDOWN HOVER for mobile on MAIN PAGE.
    $('.dropdown-toggle').dropdown();

    $('#slides').superslides({
        slide_easing: 'easeInOutCubic',
        play: 7000,
        slide_speed: 800,
        hashchange: true,
        pagination: false,
        scrollable: true
    });

    $('#slides').bind('animated.slides', function() {

        $(this).find('img').fadeTo(1000, 0.5, 'easeInOutQuad').delay(2000);


        console.log('EFFECT HAPPENING - ANIMATION FINISHED SHOULD START ANIMATE');
    });

    $('#slides').bind('animating.slides', function() {
        $(this).find('img').fadeTo(500, 1).delay(2000);
    });

    $('.postContent').find('ul').addClass('fa-ul').find('li').prepend('<i class="fa-li fa fa-check-square-o"></i>');
    $('.widget_archive').find('ul').addClass('fa-ul').find('li').find('a').prepend('<i class="fa-li fa fa-chevron-left"></i>');
    $('.tag').find('a').prepend('<i class="fa fa-tag"> </i> ');

    var post = $("#post");
    var recent = $("#recent");
    var owl = $('.owl-carousel');

    post.owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoplayTimeout: 3000,
        margin: 10,
        items: 1
    });

    recent.owlCarousel({
        rtl: true,
        /*nav:true,*/
        margin: 20,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });

    recent.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    var hammer = new Hammer(document.getElementById("slides"))

    hammer.on('swipeleft', function(ev) {
        $('#slides').superslides('animate', 'next');
    });

    hammer.on('swiperight', function(ev) {
        $('#slides').superslides('animate', 'prev');
    });



    /*    $('.navbar-collapse').mousewheel(function(event) {
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
          console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          console.log('You are using a mobile device!');
      $(".navbar-collapse").css("overflow","auto");
}
      
else
{
   console.log('You are not using a mobile device!');

    document.ontouchmove = function(e) {
    e.preventDefault();
  };

    $(".navbar-collapse").css("overflow","hidden");

}*/



});