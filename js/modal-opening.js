'use strict';

(function () {
  var setupBlock = document.querySelector('.setup');
  var setupOpenElem = document.querySelector('.setup-open');
  var setupCloseElem = setupBlock.querySelector('.setup-close');

  setupOpenElem.addEventListener('click', function () { // при нажатии на элемент выполняется функция openPopup
    openPopup();
  });

  setupOpenElem.addEventListener('keydown', function (evt) { // при нажатии на кнопку enter выполняется функция OpenPopup
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupCloseElem.addEventListener('click', function () { // при нажатии на элемент выполняется функция closePopup
    closePopup();
  });

  setupCloseElem.addEventListener('keydown', function (evt) { // при нажатии на кнопку enter выполняется функция closePopup
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });


  var openPopup = function () { // обработчик открытия окна
    setupBlock.classList.remove('hidden'); // удаляем класс скрытия
    document.addEventListener('keydown', onPopupEscPress); // при нажатии на кнопку выполняется функция onPopupEscPress
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) { // если кнопка эскейпа, то выполняется функция closePopup
      closePopup();
    }
  };

  var closePopup = function () { // обработчик закрытия окна
    setupBlock.classList.add('hidden'); // добавляем класс скрытия
    document.removeEventListener('keydown', onPopupEscPress); // при нажатии на кнопку удаляется обработчик onPopupEscPress
  };

})();
