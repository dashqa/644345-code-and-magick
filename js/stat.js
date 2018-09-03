'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 15;
var TEXT_GAP = 35;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var NAME_Y = CLOUD_HEIGHT;
var FONT_COLOR = '#000';
var FONT_FAMILY = '16px PT Mono';

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color || FONT_COLOR;
  ctx.font = font || FONT_FAMILY;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', CLOUD_X + GAP, TEXT_GAP);
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP, TEXT_GAP * 1.5);


  var maxTime = getMaxElement(times);
  var scale = MAX_BAR_HEIGHT / maxTime;
  for (var i = 0; i < players.length; i++) {
    var positionX = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i; // координаты по Х
    var barHeight = scale * times[i]; // высота столба с учетом результата
    var barPositionY = NAME_Y - GAP * 1.5 - barHeight; // координата столбца по Y

    renderText(ctx, Math.round(times[i]), positionX, barPositionY - GAP);
    renderText(ctx, players[i], positionX, NAME_Y);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + getRandomInt(1, 256) + ')';
    }
    ctx.fillRect(positionX, barPositionY, BAR_WIDTH, barHeight);
  }
};
