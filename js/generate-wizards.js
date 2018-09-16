'use strict';

(function () {
  var getWizardName = function (name, surname) {
    return name[window.util.getRandomInd(name)] + ' ' + surname[window.util.getRandomInd(surname)];
  };

  var getColor = function (color) {
    return color[window.util.getRandomInd(color)];
  };

  var getWizardParam = function () {
    return {
      name: getWizardName(window.wizardParam.WIZARD_NAMES, window.wizardParam.WIZARD_SURNAMES),
      coatColor: getColor(window.wizardParam.COAT_COLORS),
      eyesColor: getColor(window.wizardParam.EYES_COLORS),
      headColor: getColor(window.wizardParam.HEAD_COLORS),
      handsColor: getColor(window.wizardParam.HANDS_COLORS)
    };
  };

  var createWizard = function (amount) {
    var wizardsArray = [];
    for (var i = 0; i < amount; i++) {
      wizardsArray.push(getWizardParam());
    }
    return wizardsArray;
  };

  window.generateWizards = {
    getWizardColor: getColor,
    createWizard: createWizard
  };

})();
