var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "black";
ctx.font = GAME_FONTS;

var charImage = new Image();
charImage.ready = false;
charImage.onload= setAssetReady;
charImage.src = PATH_CHAR;

function setAssetReady() {
	this.ready = true;
}

ctx.fillRect(0,0,stage.width, stage.height);
ctx.fillStyle = "#000";
ctx.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
var preloader = setInterval(preloading, TIME_PER_FRAME);
var gameloop, currX, currY;

function preloading()
{
	if (charImage.ready){
		clearInterval(preloader);
		gameloop = setInterval(update, TIME_PER_FRAME);
	}
}

var gameloop = setInterval(update, TIME_PER_FRAME);
var counter = 0;


function update()
{
	ctx.fillStyle = "grey";
	ctx.fillRect(0,0, stage.width, stage.height);

	ctx.drawImage(charImage, currX, currY, CHAR_WIDTH, CHAR_HEIGHT, CHAR_START_X, CHAR_START_Y, CHAR_WIDTH, CHAR_HEIGHT);

	currX += CHAR_WIDTH;
	if (currX >= SPRITE_WIDTH){
			currX = 0;
	}
}