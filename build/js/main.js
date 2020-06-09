'use strict';

(function () {

  // scroll

  var anchorLinks = document.querySelectorAll('a[href^="#"]:not([href$="#"])');

  if (window.smoothscroll) {
    window.__forceSmoothScrollPolyfill__ = true;
    window.smoothscroll.polyfill();
  }

  var initScrollThrough = function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var currentSection = document.querySelector(evt.target.hash);

      if (currentSection) {
        currentSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  };

  var initAnchors = function (links) {
    for (var i = 0; i < links.length; i++) {
      initScrollThrough(links[i]);
    }
  };

  initAnchors(anchorLinks);

  // Tabs

  var PeriodSessions = {
    ONE_MONTH: '1 месяц',
    SIX_MONTH: '6 месяцев',
    TWELVE_MONTH: '12 месяцев'
  };

  var PriceSessions = {
    ONE_MONTH: [5000, 1700, 2700],
    SIX_MONTH: [27000, 9000, 14000],
    TWELVE_MONTH: [51000, 17000, 27000]
  };

  var NumberSessions = {
    ONE_MONTH: '12 занятий',
    SIX_MONTH: '72 занятия',
    TWELVE_MONTH: '144 занятия'
  };

  var tabs = document.querySelectorAll('.tabs__item');
  var numberSessions = document.querySelector('.cards__number');
  var costSessions = document.querySelectorAll('.cards__price');
  var costSessionsBig = document.querySelectorAll('.cards__price-big');
  var tabActive = document.querySelector('.tabs__item--active');
  var activeTabClassName = 'tabs__item--active';

  var fillNumberSessions = function (value) {
    numberSessions.textContent = value;
  };

  var fillPriceSessions = function (el, price) {
    for (var i = 0; i < tabs.length; i++) {
      el[i].textContent = price[i];
    }
  };

  var onTabClick = function (evt) {
    if (evt.target !== activeTabClassName) {
      tabActive.classList.remove(activeTabClassName);
      evt.target.classList.add(activeTabClassName);
      tabActive = evt.target;

      if (evt.target.textContent === PeriodSessions.ONE_MONTH) {
        fillNumberSessions(NumberSessions.ONE_MONTH);
        fillPriceSessions(costSessions, PriceSessions.ONE_MONTH);
        fillPriceSessions(costSessionsBig, PriceSessions.ONE_MONTH);
      }

      if (evt.target.textContent === PeriodSessions.SIX_MONTH) {
        fillNumberSessions(NumberSessions.SIX_MONTH);
        fillPriceSessions(costSessions, PriceSessions.SIX_MONTH);
        fillPriceSessions(costSessionsBig, PriceSessions.SIX_MONTH);
      }

      if (evt.target.textContent === PeriodSessions.TWELVE_MONTH) {
        fillNumberSessions(NumberSessions.TWELVE_MONTH);
        fillPriceSessions(costSessions, PriceSessions.TWELVE_MONTH);
        fillPriceSessions(costSessionsBig, PriceSessions.TWELVE_MONTH);
      }
    }
  };

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', onTabClick);
  }

  // Slider coach

  var coach = document.querySelector('.coach');
  var coachSlider = coach.querySelector('.swiper-container');
  var coachBtnPrevious = coach.querySelector('.toggles__btn--prev');
  var coachBtnNext = coach.querySelector('.toggles__btn--next');

  window.coachSwipper = new window.Swiper(coachSlider, {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,

    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: coachBtnPrevious,
      prevEl: coachBtnNext
    },

  });

  // Slider reviews

  var reviews = document.querySelector('.reviews');
  var reviewsSlider = reviews.querySelector('.swiper-container');
  var reviewsBtnPrevious = reviews.querySelector('.toggles__btn--prev');
  var reviewsBtnNext = reviews.querySelector('.toggles__btn--next');

  window.reviewsSwipper = new window.Swiper(reviewsSlider, {
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: reviewsBtnPrevious,
      prevEl: reviewsBtnNext
    },

  });

  // Phone-mask

  var createMask = window.IMask;
  var inputPhone = document.getElementById("phone");

  if (inputPhone) {
    createMask(
        inputPhone, {
          mask: '+{7} (000) 000-00-00'
        }
    );
  }


})();
