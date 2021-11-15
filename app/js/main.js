$(function () {

  $('.slider-box').slick({
    
    prevArrow: '<svg class="slick-left" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/><path d="M21.0382 31.0149L37.0515 45.6079C37.577 46.1307 38.4292 46.1307 38.9546 45.6079C39.4801 45.0851 39.4801 44.2369 38.9546 43.7141L23.9069 30L38.9533 16.2859C39.4788 15.7631 39.4788 14.9148 38.9533 14.3921C38.4278 13.8693 37.5756 13.8693 37.0502 14.3921L21.0369 28.9851C20.7568 29.2637 20.6367 29.6332 20.6554 29.9986C20.638 30.3654 20.7581 30.7348 21.0382 31.0149Z" fill="#505050"/></svg>',

    nextArrow:'<svg class="slick-right" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/><path d="M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill="#505050"/></svg>'
 
  });

});



// фиксация бургер меню + активные класы
//$('.header__burger').on('click', function () {
//
//  $('.header__list').toggleClass('header__list--active');
//  $('.header__burger').toggleClass('header__burger--active');
//  $('body').toggleClass('fixed');
//
//});
//
//$('header__list').on('click', //function () {
//  $('body').removeClass('fixed');
//  $('.header__list').removeClass('header__list--active');
//  $('.header__burger').removeClass('header__burger--active');
//});
//           css для фиксированной шапки
//.fixed {
//  //позицианируем чтобы исчез скролл
//  position: fixed;
//  //что бы верстка не складывалась по ширине
//  width: 100%;
//}
//
//
//var Mixer = mixitup('.work__items', {
//  load: {
//      filter: 'all'
//  },
//  animation: {
//      animateResizeTargets: true
//  }
//});
//
//$('.statistics__info').slick({
//  arrows: false,
//  dots: true,
//});


// при определённом брейкпоинте открывает слайдер
//$(window).on('load resize', function() {
//  if ($(window).width() < 576) {
//    $('#slick:not(.slick-initialized)').slick({
//      dots: true,
//      arrows:false,
//      slidesToShow: 2,
//      slidesToScroll: 1
//    });
//    
//  } else {
//    $("#slick.slick-initialized").slick("unslick");
//  }
//});



//                             плавный скрол
//$(".header__list a").on("click", function (e) {
//  //отменяем стандартную обработку нажатия по ссылке
//  e.preventDefault();
//  //забираем идентификатор блока с атрибута href
//  var id = $(this).attr('href'),
//    //узнаем высоту от начала страницы до блока на который ссылается якорь
//    top = $(id).offset().top;
//  //анимируем переход на расстояние - top за 1500 мс
//  $('body,html').animate({ scrollTop: top }, 1500);
//});


//           липкий хедер + фон + активный модификатор
//const headerTop = $('.header__top').offset().top;
//        
//  $(window).scroll(function(){
//          if( $(window).scrollTop() > headerTop ) {
//                  $('.header__top').css({position: 'fixed', top: '0' , width: '100%', 
//                  'background-color': ' rgba(35, 82, 222, 0.5)', 'z-index' : '999'});
//                  $('.header').addClass('header--padding');
//          } else {
//                  $('.header__top').css({position: 'static', 'background-color': 'transparent'});
//                  $('.header').removeClass('header--padding');
//          }
//  });




//   при скроле вниз пропадает  липкий хедер , вверх появляется
//var header = $('#header'),
//scrollPrev = 0;
//
//$(window).scroll(function () {
//var scrolled = $(window).scrollTop();
//
//if (scrolled > 100 && scrolled > scrollPrev) {
//  header.addClass('header-out');
//} else {
//  header.removeClass('header-out');
//}
//scrollPrev = scrolled;
//});


