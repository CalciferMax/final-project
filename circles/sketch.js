var circles =[]
number = 3
score = 0;
health = 5;
game_over=0;

function preload() {
	soundFormats('mp3')
	mySound = loadSound('1.mp3')
	}


function setup() {
	createCanvas(400, 400);

  for(var i = 0; i < number; i++){
		var circle = {
			x:random(width),
			y:random(-20,0),
			v:random(0.1,0.3)*number,
			radius:random(5,10)
		};
		circles.push(circle);
	}
}


function draw() {
	background(220);

  if(game_over == 0){
		for (var i = 0; i < circles.length; i++) {
			var circle = circles[i];

			if (dist(mouseX, mouseY, circle.x, circle.y) < circle.radius) {
				if (mouseIsPressed) {
					circle.x = random(width),
					circle.y = random(-20,0);
					circle.v=random(0.1,0.3);
					score = score+1;

          if(score>number*5){
						number=number+1;
						var circle = {
						x:random(width),
						y:random(-20,0),
						v:random(0.1,0.3)*number,
						radius:random(5,10)
					};
					circles.push(circle);

					}
				}

			}

			ellipse(circle.x, circle.y, circle.radius*2);
			circle.y=circle.y+circle.v;

      if (circle.y > 505){
				circle.y = random(-20,0);
				circle.v=random(0.1,0.3)*number;
				health = health -1;
				if(health==0){
					game_over=1;
				}
			}
		}
	}else{
		textSize(32);
		text('Your Score:'+score, 10, 30);

	}


}
var circles =[]
number = 3
score = 0;
health = 5;
game_over=0;

function setup() {
	createCanvas(400, 400);
	for(var i=0;i<number;i++){
		var circle = {
			x:random(width),
			y:random(-20,0),
			v:random(0.1,0.3)*number,
			radius:random(5,10)
		};
		circles.push(circle);
	}
}

function draw() {
	background(220);
	if(game_over == 0){
		for (var i = 0; i < circles.length; i++) {
			var circle = circles[i];

			if (dist(mouseX, mouseY, circle.x, circle.y) < circle.radius) {
				if (mouseIsPressed) {
					mySound.play();
					circle.x = random(width),
					circle.y = random(-20,0);
					circle.v=random(0.1,0.3);
					score = score+1;

					if(score>number*5){
						number=number+1;
						var circle = {
						x:random(width),
						y:random(-20,0),
						v:random(0.1,0.3)*number,
						radius:random(5,10)
					};
					circles.push(circle);


					}
				}

			}

			ellipse(circle.x, circle.y, circle.radius*2);
			circle.y=circle.y+circle.v;
			if (circle.y > 405){
				circle.y = random(-20,0);
				circle.v=random(0.1,0.3)*number;
				health = health -1;
				if(health==0){
					game_over=1;
				}
			}
		}


		textSize(22);
		text('Score:'+score, 10, 30);
		textSize(22);
		text('Health:'+health, 300, 30);

	}else{
		textSize(32);
		text('Your Final Score:'+score, 10, 30);

	}


}
