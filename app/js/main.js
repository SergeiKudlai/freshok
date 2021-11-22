$(function () {

  $('.slider__box').slick({

    prevArrow: $('.arrow__button--left'), 

    nextArrow: $('.arrow__button--right'), 
     
  });

  var Mixer = mixitup('.goods__inner', {
    load: {
      filter: 'all'
    },
    animation: {
      animateResizeTargets: true
    }
  });


  var Mixerr = mixitup('.stock__inner', {
    load: {
      filter: 'all'
    },
    animation: {
      animateResizeTargets: true
    }
  });



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



});


