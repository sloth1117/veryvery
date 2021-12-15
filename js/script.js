$(document).ready(function(){

  // new_list
  var swiper1 = new Swiper(".mySwiper_new", {
    slidesPerView: 1.2,
    spaceBetween: 20,
  });

  // mylist
  var swiper2 = new Swiper(".mySwiper_my", {
    slidesPerView: 2.1,
    spaceBetween: 15,
  });

  // category
  // var swiper3 = new Swiper(".mySwiper_cate", {
  //   slidesPerView: 2.5,
  //   grid: {
  //     rows: 2,
  //   },
  //   spaceBetween: 20,
  // });

  
  // video
  var swiper4 = new Swiper(".mySwiper_mv", {
    slidesPerView: 1.2,
    spaceBetween: 20,
  });

});