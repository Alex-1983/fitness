'use strict';

(function () {

  // Табы
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
  var activateTabClassName = 'tabs__item--active';


  var fillNumberSessions = function (value) {
    numberSessions.textContent = value;
  };

  var fillPriceSessions = function (el, price) {
    for (var i = 0; i < tabs.length; i++) {
      el[i].textContent = price[i];
    }
  };

  var onTabClick = function () {
    for (var i = 0; i < tabs.length; i++) {
      var tab = tabs[i];
      var tabContent = tab.textContent;

      tab.classList.remove(activateTabClassName);

      if (tab === this) {
        tab.classList.add(activateTabClassName);

        if (tabContent === PeriodSessions.ONE_MONTH) {
          fillNumberSessions(NumberSessions.ONE_MONTH);
          fillPriceSessions(costSessions, PriceSessions.ONE_MONTH);
          fillPriceSessions(costSessionsBig, PriceSessions.ONE_MONTH);
        }

        if (tabContent === PeriodSessions.SIX_MONTH) {
          fillNumberSessions(NumberSessions.SIX_MONTH);
          fillPriceSessions(costSessions, PriceSessions.SIX_MONTH);
          fillPriceSessions(costSessionsBig, PriceSessions.SIX_MONTH);
        }

        if (tabContent === PeriodSessions.TWELVE_MONTH) {
          fillNumberSessions(NumberSessions.TWELVE_MONTH);
          fillPriceSessions(costSessions, PriceSessions.TWELVE_MONTH);
          fillPriceSessions(costSessionsBig, PriceSessions.TWELVE_MONTH);
        }
      }
    }
  };

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', onTabClick);
  }

})();
