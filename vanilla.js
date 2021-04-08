// Sticky menu animation
$(window).on("scroll", function() { 
  if($(window).scrollTop()) {
    $(".navigation").addClass("sticky-menu");
  } else {
    $(".navigation").removeClass("sticky-menu");
  }
});

//  side bar button 
$(".sidebar-button").click(function(){
    if($(".sidebar").hasClass("sidebar-active")){
        $(".sidebar").removeClass("sidebar-active")
    } else {
        $(".sidebar").addClass("sidebar-active")
    };
});


// sidebar close Button
$(".sidebar-close-button").click(function(){
      $(".sidebar").removeClass("sidebar-active")
});


gsap.fromTo(".navigation",{
  y: -400,
  delay: 2,
  duration: 1,
} ,{
  y: 0,
});

gsap.fromTo(".welcome-container",{
  opacity: 0,
} ,{
  delay: 1,
  opacity: 1,
});

gsap.fromTo("#btn-start",{
  opacity: 0,
} ,{
  delay: 2,
  opacity: 1
});

gsap.fromTo(".pw",{
  opacity: 0,
} ,{
  delay: 1.5,
  opacity: 1
});
