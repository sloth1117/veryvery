$(document).ready(function(){

  // nav
  $(".open").click(function(){
    $("nav").css({"left":"0"});
  });
  $(".menu_close").click(function(){
    $("nav").css({"left":"-100%"})
  });


  // schbox
  $(".search").click(function(){
    $(".schbox").stop().slideDown();
  });
  $(".sch_close").click(function(){
    $(".schbox").stop().slideUp();
  });


  // new_list
  var swiper1 = new Swiper(".mySwiper_new", {
    slidesPerView: 1.2,
    spaceBetween: 20,
  });

  //popular_list
  var swiper3 = new Swiper(".mySwiper_po", {
    spaceBetween: 10,
  });


  // mylist
  var swiper2 = new Swiper(".mySwiper_my", {
    slidesPerView: 2.1,
    spaceBetween: 15,
  });

  // pick
  var swiper5 = new Swiper(".mySwiper_pick", {
    pagination: {
      el: ".mySwiper_pick .swiper-pagination",
    },
  });
  
  // video
  var swiper4 = new Swiper(".mySwiper_mv", {
    slidesPerView: 1.2,
    spaceBetween: 20,
  });

  // go top
  $(".go_top").click(function(){
    event.preventDefault();
    $("html, body").animate({scrollTop:0},1000);
  });

});