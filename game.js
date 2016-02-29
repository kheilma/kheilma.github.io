function show() {
        document.getElementById("myDiv").style.display="block";
        setTimeout("hide()", 2410);
      }
    function include(filename)
    {
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';

    head.appendChild(script)
    }
      function hide() {
        document.getElementById("myDiv").style.display="none";
        //include("goobs.js");
        game();
      }
      

      function game() {
       var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1366;
canvas.height = 768;
//ctx.canvas.width = document.body.clientWidth; 
//document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "img/bground.jpg";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  heroReady = true;
};
heroImage.src = "img/spaceship.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true;
};
//monsterImage.src = "img/monster.png";

// Game objects
var hero = {
  speed: 300 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

var minerImage = new Image();
minerImage.src = "img/Miner.png";

// Handle keyboard controls
var keysDown = {};



addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
  hero.x = canvas.width / 2 - 100;
  hero.y = canvas.height / 2.2 + 70;

  // Throw the monster somewhere on the screen randomly
  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
  if (38 in keysDown) { // Player holding up
   // hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) { // Player holding down
    //hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier;
    if (hero.x < -80){
    	hero.x = -80;
    }
  }
  if (39 in keysDown) { // Player holding right
    hero.x += hero.speed * modifier;
    if (hero.x > 1150) {
    	window.location.href = "www.kyleheilman.com/main";
    }
  }
  if(32 in keysDown) { //Holding space
    ctx.drawImage(minerImage, hero.x - 40, hero.y - 200);
    
  	if(hero.x > 400 && hero.x < 500) {
  		//hero.x = 800;
  	}
  	if(hero.x < 830 && hero.x > 740) {
      ctx.fillText("Go right for ffdssdfsdsdsdfsdsdf", 600, 750);
  		//hero.x = 750;
  	}
  	if (hero.x < 220 && hero.x > 60) {
  		//hero.x = 1150;
  	}
  	
  }

  // Are they touching?
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught;
    //reset();
  }
};

// Draw everything
var render = function () {
  if (bgReady) {

    ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height, 0, 0, canvas.width, canvas.height);
    
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }

  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  // Score
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillText("Press 'Space' to select", 600, 700);
  ctx.fillText("R - Resume, S - Social, P - Projects", 530, 725);
  ctx.fillText("Go right for full website", 600, 750);
};

// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;
  render();
  update(delta / 1000);
  //render();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
      }
      show();