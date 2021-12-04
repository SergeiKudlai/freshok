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
    





  $('.catalog__button').on('click', function () {
    $('.catalog__menu').fadeToggle();
    $('.catalog__button').toggleClass('catalog__button--active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.catalog__button').length) {
      $('.catalog__menu').hide();
      $('.catalog__button').removeClass('catalog__button--active');
    }
    e.stopPropagation();
  });

  $('.burger__button').on('click', function () {
    $('.sidebar').slideToggle();
    $('body').toggleClass('fixed');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.burger__button').length) {
      $('.sidebar').hide();
      $('body').removeClass('fixed');
    }
    e.stopPropagation();
  });

  $('.top__button').on('click', function () {
    $('.sidebar').slideToggle('none');
  });

  $('.user-menu__btn').on('click', function () {
    $('.header__bottom-form').fadeToggle();
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


  $('body').on('click', '.counter__click--minus, .counter__click--plus', function () {
    var $row = $(this).closest('.counter');
    var $input = $row.find('.counter__text');
    var step = $row.data('step');
    var val = parseFloat($input.val());
    if ($(this).hasClass('counter__click--minus')) {
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


  $('.button').on('click', function () {
    $('.categories__list').addClass('categories__list--active');
  });


  const headerTop = $('.header__top').offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > headerTop) {
      $('.header__top').addClass('header__top--scrol');
    } else {
      $('.header__top').removeClass('header__top--scrol');
    }
  });


  var header = $('.header__top'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass('header--fixed');
    } else {
      header.removeClass('header--fixed');
    }
    scrollPrev = scrolled;
  });

  $('.categories__button').on('click', function () {
    $('.categories__list').slideToggle();
  });

  $('.offer__button').on('click', function () {
    $('.offer__list').slideToggle();
  });


  $('.brand__button').on('click', function () {
    $('.brand__list').slideToggle();
  });

  $('.price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price__number--from').text(data.from);
      $('.price__number--to').text(data.to);
    },
    onChange: function (data) {
      $('.price__number--from').text(data.from);
      $('.price__number--to').text(data.to);
    },
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

});


