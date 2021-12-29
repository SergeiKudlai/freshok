$(function () {

  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    $('.content-tabs__item').removeClass('content-tabs__item--active');
    $($(this).attr('href')).addClass('content-tabs__item--active');
  });

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

  $('.interesting__inner').slick({
    prevArrow: $('.interesting__btn--prev'),

    nextArrow: $('.interesting__btn--next'),

    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true, 

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true,
          arrows: false
        }
      },
    ]
  });

  $('.slider-gallery').slick({

    prevArrow: $('.product__slider-button--prev'),

    nextArrow: $('.product__slider-button--next'),

    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      },
    ]
  });



  $('.raiting__stars, .tabs-reviews__raiting, .grade__raiting').rateYo({
    starWidth: '16px',
    spacing: '6px',
    normalFill: 'var(--star-color)',
    ratedFill: 'var(--star-active)',

    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16426C0.0780973 5.99454 0.224753 5.87085 0.401315 5.84523L5.36139 5.12445L7.57966 0.629872C7.6586 0.469872 7.82157 0.368591 7.99997 0.368591C8.17841 0.368591 8.34135 0.469872 8.42032 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.4369 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64472C0.0138168 6.52022 -0.0322151 6.33394 0.0229731 6.16426Z"/></svg>'
  });

  $('.filter__button').on('click', function () {
    $('.filter__button').removeClass('filter__button--icon--active');
    $(this).addClass('filter__button--icon--active');
  });


  $('.filter__button--menu').on('click', function () {
    $('.products-card').addClass('products-card--list');
    $('.catalog-products .products').addClass('products-card--list');
    $('.prices').addClass('prices--list');
  });

  $('.filter__button--icon ').on('click', function () {
    $('.products-card').removeClass('products-card--list');
    $('.catalog-products .products').removeClass('products-card--list');
    $('.prices').removeClass('prices--list');
  });


  $('.filter__select').styler();

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

  const burgerBtn = $('.burger__button'),
    burgerMenu = $('.sidebar');

  burgerBtn.on('click', function () {
    $('body').addClass('bg-gray fixed');
    $('.header').addClass('bg-gray');
    burgerMenu.slideToggle();
  });

  $('.sidebar a, .sidebar button').on('click', function () {
    if ($('body').hasClass('bg-gray fixed') && $('header').hasClass('bg-gray')) {
      $('body').removeClass('bg-gray fixed');
      $('.header').removeClass('bg-gray');
    };
    burgerMenu.slideUp();
  });

  $(document).on('click', function (e) {
    if (!burgerBtn.is(e.target) && !burgerMenu.is(e.target) && !burgerMenu.has(e.target).length === 0) {
      burgerMenu.slideUp();
      if ($('body').hasClass('bg-gray fixed') && $('header').hasClass('bg-gray')) {
        $('body').removeClass('bg-gray fixed');
        $('.header').removeClass('bg-gray');
      };
    };
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.burger__button').length) {
      if ($('body').hasClass('bg-gray fixed') && $('header').hasClass('bg-gray')) {
        $('body').removeClass('bg-gray fixed');
        $('.header').removeClass('bg-gray');
      };
      burgerMenu.slideUp();
    }
  });


  $('.user-menu__btn').on('click', function () {
    $('.header__bottom-form').fadeToggle();
  });

  $('.filter__button-categories').on('click', function () {
    $('.suggestions ').addClass('suggestions--active');
    $('body').addClass('fixed__menu');
  });

  $('.suggestions__close').on('click', function () {
    $('.suggestions ').removeClass('suggestions--active');
    $('body').removeClass('fixed__menu');
  });

  $('.brands__list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
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


  let config = {
    controls: {
      scope: 'Local'
    }
  };

  let goods = document.querySelector('[data-ref="goods"]');
  if (goods) {
    let mixer = mixitup(goods, config);
  }

  let stock = document.querySelector('[data-ref="stock"]');
  if (stock) {
    let mixerTwo = mixitup(stock, config);
  }


  function DynamicAdapt(type) {
    this.type = type;
  }
  
  DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");
  
    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    }
  
    this.arraySort(this.оbjects);
  
    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    });
  
    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];
  
      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
        return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    }
  };
  
  DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        if (оbject.element.classList.contains(this.daClassname)) {
          this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
      }
    }
  };
  
  // Функция перемещения
  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
    }
    if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
  }
  
  // Функция возврата
  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
      parent.insertAdjacentElement('beforeend', element);
    }
  }
  
  // Функция получения индекса внутри родителя
  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  };
  
  // Функция сортировки массива по breakpoint и place 
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "max") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
  
          if (a.place === "first" || b.place === "last") {
            return -1;
          }
  
          if (a.place === "last" || b.place === "first") {
            return 1;
          }
  
          return a.place - b.place;
        }
  
        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
  
          if (a.place === "first" || b.place === "last") {
            return 1;
          }
  
          if (a.place === "last" || b.place === "first") {
            return -1;
          }
  
          return b.place - a.place;
        }
  
        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };
  
  const da = new DynamicAdapt("max");
  da.init();
});


