$(document).ready(function(){function e(e,t){var n=new Date;n.setTime(n.getTime()+1*24*60*60*1e3);document.cookie=e+"="+t+";expires="+n.toUTCString()}function t(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}function o(e){switch(e){case 1:{u();break};case 2:{a();break};case 3:{f();break};case 4:{l();break};case 5:{c();break};case 6:{h();break};case 7:{p();break}}}function u(){$("#poll").append($("<option></option>").attr("value","wod1").text("06:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod2").text("17:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod3").text("18:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod4").text("19:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod5").text("19:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod6").text("20:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod7").text("20:30 WOD"))}function a(){$("#poll").append($("<option></option>").attr("value","wod1").text("09:00 WOD - HALL A"));$("#poll").append($("<option></option>").attr("value","wod2").text("16:30 TeenWOD"));$("#poll").append($("<option></option>").attr("value","wod3").text("16:45 KidsWOD"));$("#poll").append($("<option></option>").attr("value","wod4").text("17:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod5").text("18:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod6").text("19:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod7").text("19:30 ENDURANCE"));$("#poll").append($("<option></option>").attr("value","wod8").text("20:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod9").text("20:30 WOD"))}function f(){$("#poll").append($("<option></option>").attr("value","wod1").text("06:00 WOD - HALL A"));$("#poll").append($("<option></option>").attr("value","wod2").text("17:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod3").text("18:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod4").text("19:00 GYMNASTICS - HALL B"));$("#poll").append($("<option></option>").attr("value","wod5").text("19:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod6").text("20:00 GirlsWOD - HALL B"));$("#poll").append($("<option></option>").attr("value","wod7").text("20:30 WOD"))}function l(){$("#poll").append($("<option></option>").attr("value","wod1").text("09:00 WOD - HALL B"));$("#poll").append($("<option></option>").attr("value","wod2").text("16:30 TeenWOD"));$("#poll").append($("<option></option>").attr("value","wod3").text("17:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod4").text("18:30 ENDURANCE"));$("#poll").append($("<option></option>").attr("value","wod5").text("19:00 WOD - HALL B"));$("#poll").append($("<option></option>").attr("value","wod6").text("19:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod7").text("20:00 WOD - HALL B"));$("#poll").append($("<option></option>").attr("value","wod8").text("20:30 MOBILITY"))}function c(){$("#poll").append($("<option></option>").attr("value","wod1").text("06:00 WOD - HALL A"));$("#poll").append($("<option></option>").attr("value","wod2").text("17:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod3").text("18:30 WOD"));$("#poll").append($("<option></option>").attr("value","wod4").text("19:00 Weight Lifting - HALL B"));$("#poll").append($("<option></option>").attr("value","wod5").text("19:30 ENDURANCE"));$("#poll").append($("<option></option>").attr("value","wod6").text("20:00 RX CLUB - HALL B"))}function h(){$("#poll").append($("<option></option>").attr("value","wod2").text("11:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod3").text("12:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod4").text("13:00 WOD"))}function p(){$("#poll").append($("<option></option>").attr("value","wod1").text("10:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod2").text("18:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod3").text("19:00 WOD"));$("#poll").append($("<option></option>").attr("value","wod4").text("20:00 WOD"))}function d(){var t=$("#poll").val();var n=$("#poll option:selected").text();var r=$("#name").val();if(r===""||r==" "){console.log("no input");$("#noInput").fadeIn("slow");setTimeout(function(){$("#noInput").fadeOut("slow")},1e4)}else{$.ajax({type:"GET",url:"../poll/pollHandler.php",data:{selection:t,name:r,rawSelect:n},datatype:"html",success:function(t){console.log(t);e("partName",$("#name").val());e("partTime",n)},error:function(e){alert("something went wrong, please try again later.");console.error(e)}})}}function v(){if($(this).attr("dir")=="ltr"){var e=$(this).find("i").css("right");$(this).css("padding-left","2.14285714em");$(this).find("i").css({right:"auto",left:e})}else if(typeof $(this).attr("dir")=="undefined"){}else{}}$(".signup").fancybox({maxWidth:800,maxHeight:600,fitToView:false,width:"70%",height:"70%",autoSize:false,closeClick:false,openEffect:"none",closeEffect:"none",beforeShow:function(){$("body").css({"overflow-y":"hidden"})},afterClose:function(){$("body").css({"overflow-y":"visible"})}});$("#signup").on("click",function(){d()});if($("#name").length>0){var n=t("partName");if(!n){}else{$("#name").val(n)}}if($("#poll").length>0){var r=new Date;var i=r.getDay()+1;var s=r.getHours()+1;s>=22?o((i==7?0:i)+1):o(i)}$(".postContent").find("ul").addClass("fa-ul").find("li").prepend('<i class="fa-li fa fa-check-square-o"></i>');$(".widget_archive").find("ul").addClass("fa-ul").find("li").find("a").prepend('<i class="fa-li fa fa-chevron-left"></i>');$(".tag").find("a").prepend('<i class="fa fa-tag"> </i> ');$(".postBody").find("ul").each(v);$(document).on("init.slides",function(){$(".loading-container").fadeOut(function(){$(this).remove()})});$(".dropdown-toggle").dropdownHover();$(".dropdown-toggle").dropdown();$("#slides").superslides({slide_easing:"easeInOutCubic",play:7e3,slide_speed:800,hashchange:true,pagination:false,scrollable:true});$("#slides").bind("animated.slides",function(){$(this).find("img").fadeTo(1e3,.5,"easeInOutQuad").delay(2e3);console.log("EFFECT HAPPENING - ANIMATION FINISHED SHOULD START ANIMATE")});$("#slides").bind("animating.slides",function(){$(this).find("img").fadeTo(500,1).delay(2e3)});var m=$("#post");var g=$("#recent");var y=$(".owl-carousel");m.owlCarousel({loop:true,nav:false,autoplay:true,animateOut:"fadeOut",mouseDrag:false,touchDrag:false,pullDrag:false,autoplayTimeout:3e3,margin:10,items:1});g.owlCarousel({rtl:true,margin:20,items:3,responsiveClass:true,responsive:{0:{items:1},480:{items:2},768:{items:3}}});g.on("mousewheel",".owl-stage",function(e){if(e.deltaY>0){y.trigger("next.owl")}else{y.trigger("prev.owl")}e.preventDefault()});var b=new Hammer(document.getElementById("slides"));b.on("swipeleft",function(e){$("#slides").superslides("animate","next")});b.on("swiperight",function(e){$("#slides").superslides("animate","prev")})})
