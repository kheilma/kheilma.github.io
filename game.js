var stage = document.getElementById("gamecanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;

var ctx = stage.getContext("2d");
ctx.fillStyle = "black";
ctx.font = GAME_FONTS;

var gameloop = setInterval(update, TIME_PER_FRAME);
var counter = 0;


function update()
{
	counter++;

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, stage.width, stage.height);

	ctx.fillStyle = "white";
	ctx.fillText("Time is: "counter, COUNTER_X, COUNTER_Y);
}