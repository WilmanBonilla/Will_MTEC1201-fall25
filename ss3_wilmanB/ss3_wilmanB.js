// I am making a rocket that can move through the stars.
// Title: Rocket
//Date:sep 25, 2025





let MotherX;
let MotherY;
let speed = 8;
let x, y, r, g, b;


  function setup() 
{
  //the rocket will being at the bottom
  createCanvas(900, 900);
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
  
  drawMother();
  moveMother();

// Stars/ planets
  r = random(0, 455);
  g = 0;
  b = random(0, 655);
  x = random(0, 900);
  y = random(0, 900);
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
  triangle(MotherX - 35, MotherY - 40, MotherX + 30, MotherY - 40, MotherX, MotherY - 70);

  // wings
  fill(133, 1, 230); // Darker red
  triangle(MotherX - 10, MotherY + 30, MotherX - 50, MotherY + 50, MotherX - 30, MotherY);
  triangle(MotherX + 3, MotherY + 30, MotherX + 50, MotherY + 50, MotherX + 30, MotherY);
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
