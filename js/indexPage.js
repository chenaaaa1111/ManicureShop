$(document).ready(function() {
  var mySwiper = new Swiper ('.swiperBanner', {
    direction: 'horizontal',
    autoplay:true,
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.pageBanner',
    },
  });

  // var swiperChain = new Swiper('.swiperChain', {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     pagination: {
  //       el: '.pageChain',
  //       clickable: true,
  //     },
  //   });
});
