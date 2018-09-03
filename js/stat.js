'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 25;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP * 1.5);


  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var positionX = CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i; // координаты по Х

    ctx.fillText(Math.round(times[i]), positionX, (BAR_HEIGHT * times[i]) / maxTime + 65);
    ctx.fillText(players[i], positionX, CLOUD_HEIGHT - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + getRandomInt(1, 256) + ')';
    }
    ctx.fillRect(positionX, CLOUD_HEIGHT - GAP - BAR_HEIGHT - GAP * 1.5, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
