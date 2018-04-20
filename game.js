
document.body.style.zoom="70%"
// IMAGE VARIABLES FOR MOVEMENT
// speed = movement in pixels per second};
var hero = { speed: 256 };
var sword = { speed: 1024};
var monster = { speed: 256};
var monsterr = { speed: 256};
var monsterr2 = { speed: 1024};
var monsterr3 = { speed: 256};
var monstersCaught = 0;
var keysDown = {};
var level = 0;
// var monsterGo = 0;
// var monsterStart = false;
// var randomNumX = Math.Round((Math.random() * canvas.width) / canvas.width);
// var randomNumY = Math.Round((Math.random() * canvas.height) * 0.1);

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1020;
canvas.height = 960;
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

//LEFT BORDER
var leftBorderReady = false;
var leftBorderImage = new Image();
leftBorderImage.onload = function () {
	leftBorderReady = true;	
}
leftBorderImage.src = "img/leftTrees1020.png";

//RIGHT BORDER
var rightBorderReady = false;
var rightBorderImage = new Image();
rightBorderImage.onload = function () {
	rightBorderReady = true;	
}
rightBorderImage.src = "img/rightTrees1020.png";

//TOP BORDER
var upBorderReady = false;
var upBorderImage = new Image();
upBorderImage.onload = function () {
	upBorderReady = true;	
}
upBorderImage.src = "img/topTrees1020.png";

//BOTTOM BORDER
var downBorderReady = false;
var downBorderImage = new Image();
downBorderImage.onload = function () {
	downBorderReady = true;	
}
downBorderImage.src = "img/bottomTrees1020.png";

// HERO 
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "img/avatarFaceDown.png";

// MONSTER //STOCK IMAGE
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "img/monster.png";

// MONSTERR1
var monsterrReady = false;
var monsterrImage = new Image();
monsterrImage.onload = function () {
	monsterrReady = true;
};
monsterrImage.src = "img/monsterr.png";

//MONSTERR2
var monsterr2Ready = false;
var monsterr2Image = new Image();
monsterr2Image.onload = function () {
	monsterr2Ready = true;
};
monsterr2Image.src = "img/monsterr2.png";

//MONSTERR3
var monsterr3Ready = false;
var monsterr3Image = new Image();
monsterr3Image.onload = function () {
	monsterr3Ready = true;
};
monsterr3Image.src = "img/monsterr3.png";

// SWORD
var swordReady = false;
var swordImage = new Image();
swordImage.onload = function () {
	swordReady = true;
};
swordImage.src = "img/ironSword.png";

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


// RESETS GAME
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
};

// UPDATE GAME OBJECTS
var update = function (modifier) {

	// monsterGo + 1;
	
	// if(monsterGo = 0){
	// monster.x += 32 + (Math.random() * (canvas.width - 64));
	// monster.y += 32 + (Math.random() * (canvas.height - 64));

	// // Throw the monsterr somewhere on the screen randomly
	// monsterr.x += 32 + (Math.random() * (canvas.width - 64));
	// monsterr.y += 32 + (Math.random() * (canvas.height - 64));

	// // Throw the monsterr somewhere on the screen randomly
	// monsterr2.x += 32 + (Math.random() * (canvas.width - 64));
	// monsterr2.y += 32 + (Math.random() * (canvas.height - 64));

	// // Throw the monsterr somewhere on the screen randomly
	// monsterr3.x += 32 + (Math.random() * (canvas.width - 64));
	// monsterr3.y += 32 + (Math.random() * (canvas.height - 64));

	// }

	//HERO MOVEMENT MODIFIER
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
		sword.x = (hero.x + 44);
		sword.y = (hero.y - 32);
		monster.y = (monster.y + 8);
		monsterr.x = (monsterr.x + 6)

	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
		sword.x = (hero.x - 16);
		sword.y = (hero.y - 32);
		monster.y = (monster.y - 8);
		monsterr.y = (monsterr.y + 6);
		monsterr3.yx = (monsterr3.x + 6)
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
		sword.x = (hero.x - 16);
		sword.y = (hero.y - 32);
		monsterr.x = (monsterr.x + 6);
		monsterr2.x = (monsterr2.x + 6);
		monsterr3.y = (monsterr3.y + 6)
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
		sword.x = (hero.x + 44);
		sword.y = (hero.y - 32);
		monsterr.x = (monsterr.x - 6);
		monsterr2.y = (monsterr2.y + 6)
	}


	//SWORD MOVEMENT MODIFIER
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

	//PUSH HERO BACK IF TOUCHING BORDERS
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
	
	//ADD POINT AND RESET IF MONSTER CAUGHT
		if (
			sword.x <= (monster.x + 40)
			&& monster.x <= (sword.x + 40)
			&& sword.y <= (monster.y + 40)
			&& monster.y <= (sword.y + 40)
		) {
			++monstersCaught;
			reset();
		}
		//ADD POINT AND RESET IF MONSTERR CAUGHT
		if (
			sword.x <= (monsterr.x + 40)
			&& monsterr.x <= (sword.x + 40)
			&& sword.y <= (monsterr.y + 40)
			&& monsterr.y <= (sword.y + 40)
		) {
			++monstersCaught;
			reset();
		}
		//ADD POINT AND RESET IF MONSTERR2 CAUGHT
		if (
			sword.x <= (monsterr2.x + 40)
			&& monsterr2.x <= (sword.x + 40)
			&& sword.y <= (monsterr2.y + 40)
			&& monsterr2.y <= (sword.y + 40)
		) {
			++monstersCaught;
			reset();
		}
		//ADD POINT AND RESET IF MONSTERR3 CAUGHT
		if (
			sword.x <= (monsterr3.x + 40)
			&& monsterr3.x <= (sword.x + 40)
			&& sword.y <= (monsterr3.y + 40)
			&& monsterr3.y <= (sword.y + 40)
		) {
			++monstersCaught;
			reset();
		}

};

// DRAW OBJECTS
var render = function () {
	// monsterGo - 1;
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

	//MONSTERS CAUGHT
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "20px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);


	if(monstersCaught >= 10){
		level + 1;
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "20px Helvetica";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Level 1", 900, 32);
	}
};


//MAIN GAME LOOP.ORDER OF FUNCTIONS
var main = function () {
	//NOW = TIME AT START
	var now = Date.now();
	//DELTA = TIME AT START - TIME ELAPSED
	var delta = now - then;
	//CALLS MODIFIER FOR DEFINING X,Y POSITIONS
	update(delta / 1000);
	//CALL RENDER TO DRAW
	render();
	//RESETS CLOCK START CLOCK
	then = now;
	//REQUEST TO RUN MAIN AGAIN
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//THEN = TIME AT START
var then = Date.now();
//CALL RESET
reset();
//CALL MAIN
main();