'use strict';

var WIZARDS_AMOUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['red', 'black', 'green', 'yellow', 'purle', 'blue'];
var HEAD_COLORS = ['#015500', '#ba76f4', '#0a5191', '#17525b', '#c08a80', '#a12229', '#32b4b6', '#003908', '#e71f61'];
var HANDS_COLORS = ['#381100', '#3269ad', '#852fb0', '#69bf3e', '#683765', '#6ea272', '#f8f60c', '#0306e9', '#3f11ab', '#c4f257'];

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list'); // родитель, в который будем вставлять
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item'); // элемент, который будем копировать


var getRandomInd = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getWizardName = function (name, surname) {
  return name[getRandomInd(name)] + ' ' + surname[getRandomInd(surname)];
};

var getColor = function (color) {
  return color[getRandomInd(color)];
};

var getWizardParam = function () {
  return {
    name: getWizardName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getColor(COAT_COLORS),
    eyesColor: getColor(EYES_COLORS),
    headColor: getColor(HEAD_COLORS),
    handsColor: getColor(HANDS_COLORS)
  };
};

var createWizards = function (amount) {
  var wizardsArray = [];
  for (var i = 0; i < amount; i++) {
    wizardsArray.push(getWizardParam());
  }
  return wizardsArray;
};


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-head').style.fill = wizard.headColor;
  wizardElement.querySelector('.wizard-hands').style.fill = wizard.handsColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment(); // создаем корзину, которая соберем всех новых магов
var wizardsArray = createWizards(WIZARDS_AMOUNT); // создаем массив с магами

for (var i = 0; i < wizardsArray.length; i++) {
  fragment.appendChild(renderWizard(wizardsArray[i])); // в корзину добавляем магов по одному
}
similarListElement.appendChild(fragment); // вставляем разом всех магов из корзины

setupBlock.querySelector('.setup-similar').classList.remove('hidden');
