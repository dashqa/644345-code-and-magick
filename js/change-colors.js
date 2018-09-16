'use strict';

(function () {
  var coatInput = document.querySelector('input[name="coat-color"]');
  var eyesInput = document.querySelector('input[name="eyes-color"]');
  var fireballInput = document.querySelector('input[name="fireball-color"]');

  var changeColor = function (elem, colorsArray, inputElem) {
    var randomCol = window.generateWizards.getWizardColor(colorsArray);
    elem.style[elem.tagName === 'use' ? 'fill' : 'backgroundColor'] = randomCol;
    if (inputElem) {
      inputElem.setAttribute('value', randomCol);
    }
  };

  var wizardCoatElem = document.querySelector('.wizard-coat');
  wizardCoatElem.addEventListener('click', function () {
    changeColor(wizardCoatElem, window.wizardParam.COAT_COLORS, coatInput);
  });

  var wizardEyesElem = document.querySelector('.wizard-eyes');
  wizardEyesElem.addEventListener('click', function () {
    changeColor(wizardEyesElem, window.wizardParam.EYES_COLORS, eyesInput);
  });

  var wizardFireballElem = document.querySelector('.setup-fireball-wrap');
  wizardFireballElem.addEventListener('click', function () {
    changeColor(wizardFireballElem, window.wizardParam.FIREBALL_COLORS, fireballInput);
  });

  var wizardHeadElem = document.querySelector('.wizard-head');
  wizardHeadElem.addEventListener('click', function () {
    changeColor(wizardHeadElem, window.wizardParam.HEAD_COLORS);
  });

  var wizardHandsElem = document.querySelector('.wizard-hands');
  wizardHandsElem.addEventListener('click', function () {
    changeColor(wizardHandsElem, window.wizardParam.HANDS_COLORS);
  });

})();
