/*Popup*/
$(document).ready(function(){

  /*Popup*/
	$('.header-contacts__button').on("click", function(){
		$('.overlay').show();
	});

	$('.popup-close').on("click", function(){
		$('.overlay').hide();
	});

  $(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.overlay').hide();
    }
  });

  /*Всплывающее меню*/
  $('.header-nav-button').on("click", function(){
    $('.header-nav').toggleClass('header-nav_active'),
    $('.header-nav-button').toggleClass('header-nav-button_active')
  });

  $('.header-nav-button_active').on("click", function(){
    $('.header-nav_active').removeClass('header-nav_active'),
    $('.header-nav-button_active').removeClass('header-nav-button_active')
  });

  $('.header-nav-menu__item').on("click", function(){
    $('.header-nav_active').removeClass('header-nav_active'),
    $('.header-nav-button_active').removeClass('header-nav-button_active')
  });

});

// Отправка заявки 
$(document).ready(function() {
  $('#main-form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.main_form.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "GET",
      url: "../mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $('.thankyou-overlay').fadeIn();
      $(this).find('input').val('');
      $('#main-form').trigger('reset');
      ym(52828900, 'reachGoal', 'sendForm');
      return true;
    });
    return false;
  });

  $('#popup-form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.popup_form.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "GET",
      url: "../mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $('.thankyou-overlay').fadeIn();
      $(this).find('input').val('');
      $('#main-form').trigger('reset');
      ym(52828900, 'reachGoal', 'sendForm');
      return true;
    });
    return false;
  });

  $('#offer-form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.offer_form.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "GET",
      url: "../mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $('.thankyou-overlay').fadeIn();
      $(this).find('input').val('');
      $('#main-form').trigger('reset');
      ym(52828900, 'reachGoal', 'sendForm');
      return true;
    });
    return false;
  });
});

// Закрыть попап «спасибо»
$('.thankyou-popup__close').click(function() { // по клику на крестик
  $('.thankyou-overlay').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.thankyou-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.thankyou-overlay').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
  $('[name="phone"]').mask("+7(999) 999-9999");
});


/*Инициализация WOW*/
new WOW().init();

/*Инициализация slick slider*/
$(document).ready(function(){
  
  /*Главный слайдер*/
  $('.main-img-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    asNavFor: '.main-text-slider, .bg-slider'
  });
  $('.main-text-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    asNavFor: '.main-img-slider, .bg-slider',
  });
  $('.bg-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    asNavFor: '.main-img-slider, .main-text-slider',
  });

  /*Слайдер производство*/
  $('.production-slider-for').slick({
    slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	asNavFor: '.production-slider-nav'
  });
  $('.production-slider-nav').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	asNavFor: '.production-slider-for',
  	arrows: true,
    dots: false,
  	prevArrow: '<div class="slider-arrow slider-arrow_left slider-arrow_production"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_right slider-arrow_production"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
    ]
	});

  /*Слайдер отзывы*/
  $('.feedback-slider').slick({
    lazyLoad: 'ondemand',
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	infinite: true,
  	arrows: true,
    dots: false,
    prevArrow: '<div class="slider-arrow slider-arrow_left slider-arrow_feedback slider-arrow_feedback-left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_right slider-arrow_feedback slider-arrow_feedback-right"></div>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        }
      },
  	]
  });
  
});


/*Яндекс Карты*/
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 17,
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Проспект Октября, 46',
            balloonContent: 'Проспект Октября, 46'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/contacts/map-mark.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-16, -32]

        });

    myMap.geoObjects
        .add(myPlacemark);
    myMap.behaviors
        .disable('scrollZoom');

});