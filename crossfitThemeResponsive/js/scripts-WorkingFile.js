$(document).ready(function() {

    $(".signup").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        beforeShow: function() {
            $("body").css({
                'overflow-y': 'hidden'
            });
        },
        afterClose: function() {
            $("body").css({
                'overflow-y': 'visible'
            });
        }

        /*     closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {},
            overlay: {
                locked: 'false',
                css: {
                    'background': 'rgba(67, 67, 67, 0.85)'
                }
            }
        },*/

    });

    $('#signup').on('click', function() {
        submitWork();
        //$.colorbox({href: "/index.html"});
    });



    function setCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }
    if ($("#name").length > 0) {
        //decelerations...

        //GO GO CODE !
        var cookieVal = getCookie("partName");
        if (!cookieVal) {
            //COOKIE DOESNT EXIST
            //WE WILL WAIT FOR SUBMIT

        } else {
            //COOKIE EXISTS
            $('#name').val(cookieVal);
        }
    }

    //POLL DATA INJETION
    //insert the daily sched
    if ($("#poll").length > 0) {

        var d = new Date();
        var day = d.getDay() + 1;
        var hour = d.getHours() + 1;
        hour >= 22 ? insertSelectOptions((day == 7 ? 0 : day) + 1) : insertSelectOptions(day);
    }

    function insertSelectOptions(day) {
        switch (day) {
            case 1:
                {
                    appendSun();
                    break;
                }
            case 2:
                {
                    appendMon();
                    break;
                }
            case 3:
                {
                    appendTue();
                    break;
                }
            case 4:
                {
                    appendWed();
                    break;
                }
            case 5:
                {
                    appendThu();
                    break;
                }
            case 6:
                {
                    appendFri();
                    break;
                }
            case 7:
                {
                    appendSat();
                    break;
                }


        }
    }


    function appendSun() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("06:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("19:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod6")
                .text("20:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod7")
                .text("20:30 WOD"));
    }

    function appendMon() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("09:00 WOD - HALL A"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("16:30 TeenWOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("16:45 KidsWOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod7")
                .text("19:30 ENDURANCE"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod9")
                .text("20:30 WOD"));
    }

    function appendTue() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("06:00 WOD - HALL A"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:00 GYMNASTICS - HALL B"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("19:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod6")
                .text("20:00 GirlsWOD - HALL B"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod7")
                .text("20:30 WOD"));

    }

    function appendWed() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("09:00 WOD - HALL B"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("16:30 TeenWOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("18:30 ENDURANCE"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("19:00 WOD - HALL B"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod6")
                .text("19:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod7")
                .text("20:00 WOD - HALL B"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod8")
                .text("20:30 MOBILITY"));
    }

    function appendThu() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("06:00 WOD - HALL A"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("17:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("18:30 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("19:00 Weight Lifting - HALL B"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod5")
                .text("19:30 ENDURANCE"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod6")
                .text("20:00 RX CLUB - HALL B"));
    }

    function appendFri() {

        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("11:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("12:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("13:00 WOD"));

    }

    function appendSat() {
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod1")
                .text("10:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod2")
                .text("18:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod3")
                .text("19:00 WOD"));
        $('#poll')
            .append($("<option></option>")
                .attr("value", "wod4")
                .text("20:00 WOD"));

    }

    //DONE WITH THE OPTIONS INJECTIONS


    function submitWork() {
        //this part sends to the server the chosen option from the SELECT
        var selection = $('#poll').val();
        var rawSelect = $("#poll option:selected").text();
        var name = $('#name').val();
        if (name === "" || name == " ") {
            //no name given
            console.log("no input");
            $('#noInput').fadeIn("slow");
            setTimeout(function() {
                $('#noInput').fadeOut("slow");
            }, 10000);
        } else {

            $.ajax({
                //URL MIGHT NEED TO BE CHANGED !
                type: "GET",
                url: "../poll/pollHandler.php",
                data: {
                    selection: selection,
                    name: name,
                    rawSelect: rawSelect
                },
                datatype: "html",
                success: function(result) {
                    console.log(result);
                    //set cookie for the part's name
                    setCookie("partName", $('#name').val());
                    setCookie("partTime", rawSelect);

                },
                error: function(result) {
                    alert("something went wrong, please try again later.");
                    console.error(result);
                }


            });
        }

    }


    // icon injector
    $('.postContent').find('ul').addClass('fa-ul').find('li').prepend('<i class="fa-li fa fa-check-square-o"></i>');
    $('.widget_archive').find('ul').addClass('fa-ul').find('li').find('a').prepend('<i class="fa-li fa fa-chevron-left"></i>');
    $('.tag').find('a').prepend('<i class="fa fa-tag"> </i> ');

    //CHANGE LIST DIRECTION
    //iterate over ul elements and fix them if needed. (doesn't effect fa-li or fa-ul classes.)

    $(".postBody").find('ul').each(changeListDirection);

    //Change list li bullets according to posts' language
    function changeListDirection() {
        if ($(this).attr("dir") == "ltr") {
            var val = $(this).find("i").css("right");
            $(this).css('padding-left', '2.14285714em');
            $(this).find("i").css({
                right: "auto",
                left: val
            });
        } else if (typeof $(this).attr("dir") == "undefined") {
            //do nothing
        } else {
            //do nothing
        }
    }

    //END OF CHANGE LIST DIRECTION
    //Ori is the rtl ltr king thanks. 

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


    var hammer = new Hammer(document.getElementById("slides"));

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