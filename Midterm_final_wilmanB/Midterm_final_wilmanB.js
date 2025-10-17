// I am making a rocket that can move through the stars.
// Title: Rocket
//Date:sep 25, 2025


let fadeFlag = false;
let opacity = 0;
let fade = 1;
let galaxy;
let MotherX;
let MotherY;
let speed = 5;
let x, y, r, g, b;


//making the background a galaxy
function preload()
{
  galaxy = loadImage("Images/galaxy.jpg.png");
}



  function setup() 
{


  //the rocket will being at the bottom
  createCanvas(1604, 1003);
  imageMode (CENTER);
  textAlign(CENTER);
	textSize(90);
  background(255);
   MotherX = width / 2;
   MotherY = height - 50; 
}

function mousePressed()
{
  circlex = 0;
}


  function draw()
{

  //background
  background(0, 0, 0); 
  image(galaxy, width / 2, height / 2);

// moon
  fill(246, 13,  21);
  ellipse(250, 590, 655, 365);

  //crater
  fill(61, 76, 245);
  ellipse(100, 620, 95, 65);
  fill(65, 55);
  ellipse(105, 620, 80, 65);

  //crater
  fill(61, 76, 245);
  ellipse(10, 580, 65, 25);
  fill(65, 55);
  ellipse(20, 580, 45, 25);

  //crater
  fill(61, 76, 245);
  ellipse(80, 530, 65, 15);
  fill(65, 55);
  ellipse(85, 530, 55, 15);

  //crater
  fill(61, 76, 245);
  ellipse(30, 490, 95, 35);
  fill(65, 55);
  ellipse(42, 490, 70, 35);

  //crater
  fill(61, 76, 245);
  ellipse(115, 445, 45, 35);
  fill(65, 55);
  ellipse(118, 445, 40, 35);

  //crater
  fill(61, 76, 245);
  ellipse(315, 485, 95, 65);
  fill(65, 55);
  ellipse(318, 485, 85, 65);


  //crater 
  fill(61, 76, 245);
  ellipse(235, 419, 55, 20);
  fill(65, 55);
  ellipse(240, 419, 30, 20);

  //crater 
  fill(61, 76, 245);
  ellipse(235, 419, 55, 20);
  fill(65, 55);
  ellipse(245, 419, 45, 20);

  //crater 
  fill(61, 76, 245);
  ellipse(435, 645, 225, 180);
  fill(65, 55);
  ellipse(445, 645, 215, 180);

  //crater 
  fill(61, 76, 245);
  ellipse(255, 559, 75, 40);
  fill(65, 55);
  ellipse(260, 559, 65, 40);

//crater
  fill(61, 76, 245);
  ellipse(455, 472, 55, 40);
  fill(65, 55);
  ellipse(458, 472, 50, 40);


  //text

  fill(opacity, opacity * 3, opacity * 2);
	text("A Galaxy far far away", width / 2, height / 2 - 50);
	opacity = opacity + fade;
  if (opacity > 255 || opacity < 0) 
	{
		fade = -fade;
        //add the t or f here to look when fade is ture 

        fadeFlag = !fadeFlag;
	}

  drawMother();
  moveMother();
 
// Stars/ planets
  r = random(0, 455);
  g = 0;
  b = random(0, 655);
  x = random(0, 1604);
  y = random(0, 1003);
  noStroke();
  fill(r, g, b, 300);
  circle(x, y, 20);



}

  function drawMother() 
{

  // Body
  fill(13, 206, 224);
  rect(MotherX - 30, MotherY - 40, 50, 60);

  //top
  fill(113, 1, 230);
  triangle(MotherX - 40, MotherY - 40, MotherX + 30, MotherY - 40, MotherX, MotherY - 70);

  // wings
  fill(133, 1, 230); // Darker red
  triangle(MotherX - 10, MotherY + 30, MotherX - 50, MotherY + 50, MotherX - 30, MotherY);
  triangle(MotherX + 3, MotherY + 27, MotherX + 50, MotherY + 50, MotherX + 30, MotherY);
  //Fire as the roket flys through space
   if (keyIsDown(UP_ARROW)) 
  { 
    fill(255, 140, 0); 
    ellipse(MotherX, MotherY + 30, 20, 40);
  }
}

  function moveMother() 
{
  if (keyIsDown(LEFT_ARROW)) 
  {
    MotherX -= speed;
  } 
  else if (keyIsDown(RIGHT_ARROW)) 
  {
    MotherX+= speed;
  } 
  else if (keyIsDown(UP_ARROW)) 
  {
    MotherY -= speed;
  } 
  else if (keyIsDown(DOWN_ARROW)) 
  {
    MotherY += speed;
  }

  // Keep rocket in the Image
  MotherX = constrain(MotherX, 20, width - 20);
  MotherY = constrain(MotherY, 70, height - 20);
}
