$(function () {

  $('.slider__box').slick({

    prevArrow: $('.slider__button--left'),

    nextArrow: $('.slider__button--right'),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });


  let goods = document.querySelector('[data-ref="goods"]');
  let stock = document.querySelector('[data-ref="stock"]');

  let config = {
    controls: {
      scope: 'Local'
    }
  };

  let mixer = mixitup(goods, config);
  let mixerTwo = mixitup(stock, config);


  $('.catalog__button').on('click', function () {
    $('.catalog__menu').fadeToggle();
    $('.catalog__button').toggleClass('catalog__button--active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest(".catalog__button").length) {
      $('.catalog__menu').hide();
      $('.catalog__button').removeClass('catalog__button--active');
    }
    e.stopPropagation();
  });

  $('.burger__button').on('click', function(){
    $('.sidebar').slideToggle();
  });

  $('.top__button').on('click', function(){
    $('.sidebar').slideToggle('none');
  });


  $('.user-menu__btn').on('click', function () {
    $('.header__bottom-form').toggleClass('header__bottom-form--active');
  });


  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.brands__list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      });

    } else {
      $('.brands__list').slick("unslick");
    }
  });

  $('body').on('click', '.counter__minus, .counter__plus', function () {
    var $row = $(this).closest('.counter');
    var $input = $row.find('.counter__text');
    var step = $row.data('step');
    var val = parseFloat($input.val());
    if ($(this).hasClass('counter__minus')) {
      val -= step;
    } else {
      val += step;
    }
    $input.val(val);
    $input.change();
    return false;
  });

  $('body').on('change', '.counter__text', function () {
    var $input = $(this);
    var $row = $input.closest('.counter');
    var step = $row.data('step');
    var min = parseInt($row.data('min'));
    var max = parseInt($row.data('max'));
    var val = parseFloat($input.val());
    if (isNaN(val)) {
      val = step;
    } else if (min && val < min) {
      val = min;
    } else if (max && val > max) {
      val = max;
    }
    $input.val(val);
  });

});


