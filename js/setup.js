'use strict';

var WIZARDS_AMOUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['red', 'black', 'green', 'yellow', 'purle', 'blue'];
var HEAD_COLORS = ['#015500', '#ba76f4', '#0a5191', '#17525b', '#c08a80', '#a12229', '#32b4b6', '#003908', '#e71f61'];
var HANDS_COLORS = ['#381100', '#3269ad', '#852fb0', '#69bf3e', '#683765', '#6ea272', '#f8f60c', '#0306e9', '#3f11ab', '#c4f257'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupBlock = document.querySelector('.setup');

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

// открытие/закрытие модального окна

var setupOpenElem = document.querySelector('.setup-open');
var setupCloseElem = setupBlock.querySelector('.setup-close');


var userNameInput = setupBlock.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

setupOpenElem.addEventListener('click', function () { // при нажатии на элемент выполняется функция openPopup
  openPopup();
});

setupOpenElem.addEventListener('keydown', function (evt) { // при нажатии на кнопку enter выполняется функция OpenPopup
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupCloseElem.addEventListener('click', function () { // при нажатии на элемент выполняется функция closePopup
  closePopup();
});

setupCloseElem.addEventListener('keydown', function (evt) { // при нажатии на кнопку enter выполняется функция closePopup
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


var openPopup = function () { // обработчик открытия окна
  setupBlock.classList.remove('hidden'); // удаляем класс скрытия
  document.addEventListener('keydown', onPopupEscPress); // при нажатии на кнопку выполняется функция onPopupEscPress
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) { // если кнопка эскейпа, то выполняется функция closePopup
    closePopup();
  }
};

var closePopup = function () { // обработчик закрытия окна
  setupBlock.classList.add('hidden'); // добавляем класс скрытия
  document.removeEventListener('keydown', onPopupEscPress); // при нажатии на кнопку удаляется обработчик onPopupEscPress
};


var coatInput = document.querySelector('input[name="coat-color"]');
var eyesInput = document.querySelector('input[name="eyes-color"]');
var fireballInput = document.querySelector('input[name="fireball-color"]');

var changeColor = function (elem, colorsArray, inputElem) {
  var randomCol = getColor(colorsArray);
  var assignmentColor = (elem.tagName === ('use') ? elem.style.fill = randomCol : elem.style.backgroundColor = randomCol);
  if (inputElem) {
    var settingAttr = inputElem.setAttribute('value', randomCol);
  }
  return [assignmentColor, settingAttr];
};

var wizardCoatElem = document.querySelector('.wizard-coat');
wizardCoatElem.addEventListener('click', function () {
  changeColor(wizardCoatElem, COAT_COLORS, coatInput);

});

var wizardEyesElem = document.querySelector('.wizard-eyes');
wizardEyesElem.addEventListener('click', function () {
  changeColor(wizardEyesElem, EYES_COLORS, eyesInput);
});

var wizardFireballElem = document.querySelector('.setup-fireball-wrap');
wizardFireballElem.addEventListener('click', function () {
  changeColor(wizardFireballElem, FIREBALL_COLORS, fireballInput);
});

var wizardHeadElem = document.querySelector('.wizard-head');
wizardHeadElem.addEventListener('click', function () {
  changeColor(wizardHeadElem, HEAD_COLORS);
});

var wizardHandsElem = document.querySelector('.wizard-hands');
wizardHandsElem.addEventListener('click', function () {
  changeColor(wizardHandsElem, HANDS_COLORS);
});
