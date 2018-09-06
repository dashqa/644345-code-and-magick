'use strict';

var WIZARDS_AMOUNT = 4;
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['red', 'black', 'green', 'yellow', 'purle', 'blue'];

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

var getWizard = function () {
  var wizard = [];
  return wizard = {
    name: getWizardName(WIZARD_NAME, WIZARD_SURNAME),
    coatColor: getColor(COAT_COLOR),
    eyesColor: getColor(EYES_COLOR)
  };
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true); // клонируем темплейтный элемент
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // задаем текст лейбла
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor; // задаем цвет плаща
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor; // задаем цвет глаз
  return wizardElement;
};

var fragment = document.createDocumentFragment(); // создаем корзину, которая соберем всех новых магов
for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  fragment.appendChild(renderWizard(getWizard())); // в корзину добавляем магов по одному
};
similarListElement.appendChild(fragment); // вставляем разом всех магов из корзины

setupBlock.querySelector('.setup-similar').classList.remove('hidden');
