'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;

var PADDING_TOP = 30;
var PADDING_LEFT = 20;
var PADDING_BOTTOM = 20;

var GAP = 50;
var BAR_WIDTH = 40;
var LINE_HEIGHT = 20;
var barHeight = 150 - LINE_HEIGHT * 2;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING_LEFT, CLOUD_Y + PADDING_TOP);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING_LEFT, CLOUD_Y + PADDING_TOP + LINE_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + (PADDING_LEFT + 10) + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - PADDING_BOTTOM);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (PADDING_LEFT + 10) + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - PADDING_BOTTOM - LINE_HEIGHT - (barHeight * times[i]) / maxTime - 10);
  }

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255,0,0)';
      ctx.globalAlpha = 1;
    } else {
      ctx.fillStyle = 'rgb(0,0,255)';
      ctx.globalAlpha = Math.random() * (1 - 0.2) + 0.2;
    };

    ctx.fillRect(CLOUD_X + (PADDING_LEFT + 10) + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - PADDING_BOTTOM - LINE_HEIGHT, BAR_WIDTH, - (barHeight * times[i]) / maxTime);
  }
};
