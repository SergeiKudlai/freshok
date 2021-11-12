$(function(){
  
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


