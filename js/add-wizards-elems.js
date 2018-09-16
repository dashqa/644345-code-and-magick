'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;

  var setupBlock = document.querySelector('.setup');
  setupBlock.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list'); // родитель, в который будем вставлять магов
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item'); // элемент, который будем копировать
  var fragment = document.createDocumentFragment(); // создаем корзину, которая соберем всех новых магов

  window.addWizardsElems = function () {
    var renderWizard = function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
      wizardElement.querySelector('.wizard-head').style.fill = wizard.headColor;
      wizardElement.querySelector('.wizard-hands').style.fill = wizard.handsColor;
      return wizardElement;
    };

    var wizardsArray = window.generateWizards.createWizard(WIZARDS_AMOUNT); // создаем массив с магами
    for (var i = 0; i < wizardsArray.length; i++) {
      fragment.appendChild(renderWizard(wizardsArray[i])); // в корзину добавляем магов по одному
      similarListElement.appendChild(fragment); // вставляем разом всех магов из корзины
    }
  }();
})();
