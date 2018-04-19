// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1020;
canvas.height = 960;
var canvasX = canvas.width;
var canvasY = canvas.height;
document.body.appendChild(canvas);


// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "img/Map.png";
var bgX = bgImage.width;
var bgY = bgImage.height;

//ENTIRE BORDER

var leftBorderReady = false;
var leftBorderImage = new Image();
leftBorderImage.onload = function () {
	leftBorderReady = true;	
}
leftBorderImage.src = "img/leftTrees1020.png";

var rightBorderReady = false;
var rightBorderImage = new Image();
rightBorderImage.onload = function () {
	rightBorderReady = true;	
}
rightBorderImage.src = "img/rightTrees1020.png";

var upBorderReady = false;
var upBorderImage = new Image();
upBorderImage.onload = function () {
	upBorderReady = true;	
}
upBorderImage.src = "img/topTrees1020.png";

var downBorderReady = false;
var downBorderImage = new Image();
downBorderImage.onload = function () {
	downBorderReady = true;	
}
downBorderImage.src = "img/bottomTrees1020.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "img/avatarFaceDown.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "img/monster.png";

// Monster2 image
var monsterrReady = false;
var monsterrImage = new Image();
monsterrImage.onload = function () {
	monsterrReady = true;
};
monsterrImage.src = "img/monsterr.png";

var monsterr2Ready = false;
var monsterr2Image = new Image();
monsterr2Image.onload = function () {
	monsterr2Ready = true;
};
monsterr2Image.src = "img/monsterr2.png";

var monsterr3Ready = false;
var monsterr3Image = new Image();
monsterr3Image.onload = function () {
	monsterr3Ready = true;
};
monsterr3Image.src = "img/monsterr3.png";

// Sword image
var swordReady = false;
var swordImage = new Image();
swordImage.onload = function () {
	swordReady = true;
};
swordImage.src = "img/ironSword.png";

// Rock Barrier image
var rockReady = false;
var rockImage = new Image();
rockImage.onload = function () {
	rockReady = true;
}
rockImage.src = "img/rock_tall2.png";

var theBadGuys = [];
var spawnX, spawnY; 

// var TO_RADIANS = Math.PI/180; 
// function drawRotatedImage(image, x, y, angle)
// { 
//     // save the current co-ordinate system 
//     // before we screw with it
//     context.save(); 

//     // move to the middle of where we want to draw our image
//     context.translate(x, y);

//     // rotate around that point, converting our 
//     // angle from degrees to radians 
//     context.rotate(angle * TO_RADIANS);

//     // draw it up and to the left by half the width
//     // and height of the image 
//     context.drawImage(image, -(image.width/2), -(image.height/2));

//     // and restore the co-ords to how they were when we began
//     context.restore(); 
// }


// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var sword = {
	speed: 1024
}
var monster = {
	speed: 256
};
var monsterr = {
	speed: 256
};
var monsterr2 = {
	speed: 256
};
var monsterr3 = {
	speed: 256
};
var monstersCaught = 0;

var leftBorder = {};

var rightBorder = {};

var upBorder = {};

var downBorder = {};

// Handle keyboard controls
var keysDown = {};


// var monsterX = monster.x;
// var monsterY = monster.y;
// var monsterrX = monsterr.x;
// var monsterrY = monsterr.y;

// class Sword {
// 	constructor(image, width, height, monsterx, monstery, monsterrx, monsterry, speed) {
// 		this.height = height;
// 		this.width = width;
// 		this.image.src = "img/ironSword";
// 	}
// 	get collision() {
// 		return this.swordCollision();
// 	}
// 	swordPosition() {
// 		if (
// 		this.width <= (monsterX + 40)
// 		&& monsterX <= (this.width + 40)
// 		&& this.height <= (monsterY + 40)
// 		&& monsterY <= (this.height + 40)
// 	) {
		
// 		++monstersCaught;
// 		reset();

// 	}


// 	if (
// 		this.width <= (monsterrX + 40)
// 		&& monsterrX <= (this.width + 40)
// 		&& this.height <= (monsterrY + 40)
// 		&& monsterrY <= (this.height + 40)
// 	) {
// 		++monstersCaught;
// 		reset();
// 	}
// 		return this.image, this.width, this.height, this.monsterX, this.monsterY, this.monsterrX, this.monsterrY, this.speed
// 	}
// }

// // try const
// const swordHit = new Sword(image.x, swordImage.height, monster.x, monster.y, monsterr.x, monsterr.y, 1024);





// var randomNum = Math.Round(Math.random());

// var monsterMovement = function(modifier){
// 		for(i = 0; i <= randomNum; i++){
// 			for(j = 0; j <= randomNum; j++){
// 				monster.x = Math.Round(i * Math.random());
// 				monster.y = Math.Round(i * Math.random());
// 			}
// 		}
// 	}

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//TEST 
// function pushBadGuy() {
// 	if (Math.random() < 0.5) {
// 		spawnX = Math.random() < 0.5 ? -20 : 820;
// 		spawnY = Math.random() * 600;
// 	} else {
// 		spawnX = Math.random() * 800;
// 		spawnY = Math.random() < 0.5 ? -20 : 620;
// 	}
// 	theBadGuys.push( { 
// 		x: spawnX, y: spawnY, w: 10, h: 10, speed: Math.ceil(Math.random()* 3 )
// 	});
// }

// function badGuysMove(){
// 	theBadGuys.forEach( function(i, j){
// 		if (i.x > monster.x) {i.x -= i.speed;}
// 		if (i.x < monsterr.x) {i.x += i.speed;}
// 		if (i.y > monsterr2.y) {i.y -= i.speed;}
// 		if (i.y < monsterr3.y) {i.y += i.speed;}
// 	});
// }

// function badGuysDraw(){
// 	theBadGuys.forEach( function(i, j) {
// 		c.beginPath();
// 		c.fillStyle="blue";
// 		c.strokeStyle="red";
// 		c.rect(i.x, i.y, i.w, i.h);
// 		c.lineWidth=1;
// 		c.stroke();
// 		c.fill();
// 	});
// }


	//TEST

// Reset the game when the player catches a monster
var reset = function () {

	hero.x = (canvas.width / 2) - 32;
	hero.y = (canvas.height / 2 + 32) + 100;


	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));

	// Throw the monsterr somewhere on the screen randomly
	monsterr.x = 32 + (Math.random() * (canvas.width - 64));
	monsterr.y = 32 + (Math.random() * (canvas.height - 64));

	// Throw the monsterr somewhere on the screen randomly
	monsterr2.x = 32 + (Math.random() * (canvas.width - 64));
	monsterr2.y = 32 + (Math.random() * (canvas.height - 64));

	// Throw the monsterr somewhere on the screen randomly
	monsterr3.x = 32 + (Math.random() * (canvas.width - 64));
	monsterr3.y = 32 + (Math.random() * (canvas.height - 64));

	// POSITION ROCK BARRIER
};

// Update game objects
var update = function (modifier) {

	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
		sword.x = (hero.x + 44);
		sword.y = (hero.y - 32);
		monster.y = (monster.y + 8)
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
		sword.x = (hero.x - 16);
		sword.y = (hero.y - 32);
		monster.y = (monster.y - 8)
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
		sword.x = (hero.x - 16);
		sword.y = (hero.y - 32);
		monsterr.x = (monsterr.x + 6)
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
		sword.x = (hero.x + 44);
		sword.y = (hero.y - 32);
		monsterr.x = (monsterr.x - 6)
	}


	if (87 in keysDown) { //Player holding w
		sword.y -= sword.speed * modifier;
	}
	if (68 in keysDown) { //Player holding d right
		sword.x += sword.speed * modifier;
	}
	if (83 in keysDown) { //Player holding s
		sword.y += sword.speed * modifier;
	}
	if (65 in keysDown) { //Player holding a left
		sword.x -= sword.speed * modifier;
	}
	if (32 in keysDown) { //Player holding space
		
	}

	// TOUCHING BORDER?
	if ((hero.x + 32) >= (canvas.width / 2) + 478){
		hero.x = hero.x - 32;
	}
	if ((hero.x + 32) <= (canvas.width / 2) - 478){
		hero.x = hero.x + 32;
	}
	if ((hero.y - 32) >= canvas.height - (canvas.height + 30)){
		hero.y = hero.y - 64;
	}
	if ((hero.y + 128) <= (canvas.height) - 30){
		hero.y = hero.y + 64;
	}



	// Are they touching?
	if (
		sword.x <= (monster.x + 40)
		&& monster.x <= (sword.x + 40)
		&& sword.y <= (monster.y + 40)
		&& monster.y <= (sword.y + 40)
	) {
		
		++monstersCaught;
		reset();

	}


	if (
		sword.x <= (monsterr.x + 40)
		&& monsterr.x <= (sword.x + 40)
		&& sword.y <= (monsterr.y + 40)
		&& monsterr.y <= (sword.y + 40)
	) {
		++monstersCaught;
		reset();
	}
	//left border

	
	// while(
	// 	hero.y <= 
	// &&  rockTopBorder.y <= (hero.y + 32)
	// ) {
	// 	hero.y = hero.y + 32;
	// }

	
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (swordReady) {
		ctx.drawImage(swordImage, sword.x, sword.y);
	
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
		
	}

	if (monsterrReady) {
		ctx.drawImage(monsterrImage, monsterr.x, monsterr.y);
		
	}
	if (monsterr2Ready) {
		ctx.drawImage(monsterr2Image, monsterr2.x, monsterr2.y);
		
	}
	if (monsterr3Ready) {
		ctx.drawImage(monsterr3Image, monsterr3.x, monsterr3.y);
		
	}
	if(upBorderReady) {
		ctx.drawImage(upBorderImage, 0, 0);
	}
	if(downBorderReady) {
		ctx.drawImage(downBorderImage, 0, 930);
	}
	if(leftBorderReady) {
		ctx.drawImage(leftBorderImage, 0, 0);
	}
	if(rightBorderReady) {
		ctx.drawImage(rightBorderImage, 988, 0);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "20px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
};

// The main game loop
var main = function () {
	//NOW = TIME AT START
	var now = Date.now();
	//DELTA = TIME AT START - TIME ELAPSED
	var delta = now - then;
	//CALLS MODIFIER FOR MOVEMENT
	update(delta / 1000);
	// swordHit();
	// update(delta / 1000);

	// playerMove();		
	// playerDraw();


	//CALL RENDER TO DRAW
	render();
	//RESETS CLOCK(loops for constant animation)
	then = now;
	// Request to do this again ASAP(loop for constant animation)
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
//THEN = TIME AT START
var then = Date.now();
reset();
main();