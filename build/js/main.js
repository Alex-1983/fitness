'use strict';

(function () {

  var tabs = document.querySelectorAll('.tabs__item');
  var cards = document.querySelectorAll('.cards');
  var activateTabClassName = 'tabs__item--active';
  var activateCardsClassName = 'cards--active';

  var onTabItemClick = function (evt) {
    evt.preventDefault();
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove(activateTabClassName);
    }

    for (var j = 0; j < tabs.length; j++) {
      if (tabs[j] === this) {
        tabs[j].classList.add(activateTabClassName);
        for (var h = 0; h < cards.length; h++) {
          cards[h].classList.remove(activateCardsClassName);
        }
        cards[j].classList.add(activateCardsClassName);
      }
    }
  };

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', onTabItemClick);
  }

})();
