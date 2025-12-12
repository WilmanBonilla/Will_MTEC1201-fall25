//Wilman bonilla 
//12/11/2025
// Title: Crazy rocket


let stars = [];
let Loaded = false;
let LoadTime = 5000; 
let startTime;
let loadingProgress = 0;
let MotherX; 
let MotherY; 
let speed = 7; 
let enemies = [];
const ENEMY_COUNT = 5;
let score = 0;
let gameState = 'loading'; 


//using perload to make the loading screen

function preload()
{
// I got millis from:  https://p5js.org/reference/p5/millis/
//I am making it so bar tracks overtime like a timer.
  startTime = millis(); //
}
// making the STARZ
function setup() 
{
  createCanvas(1600, 1600); 

 
  MotherX = width / 2;
  MotherY = height - 50;

  for (let i = 0; i < 100; i++)     
{
    stars.push(
{
      x: random(width),
      y: random(height),
      size: random(3, 5),
      speed: random(1.5, 1.8)});
  }
  
 
  for (let i = 0; i < ENEMY_COUNT; i++) {
      spawnEnemy();
  }
}

function draw() {
  background(10); 
  for (let i = 0; i < stars.length; i++) {
    fill(255);
    noStroke();
    ellipse(stars[i].x, stars[i].y, stars[i].size, stars[i].size);
    stars[i].x -= stars[i].speed;
    if (stars[i].x < 0) {
      stars[i].x = width;
      stars[i].y = random(height);
    }
  }

  // State Machine for screens
 if (gameState === 'loading') {
    let elapsedTime = millis() - startTime;
    loadingProgress = map(elapsedTime, 0, LoadTime, 0, 100);
    if (loadingProgress >= 100) {
      loadingProgress = 100;
      Loaded = true;
      gameState = 'playing'; 
    }
    drawLScreen();
  } else if (gameState === 'playing'){
    drawGameScreen();
  } else if (gameState === 'gameOver') {
    drawGameOverScreen();
  }
}

function drawLScreen() 
{
  //First text
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(133, 7, 245);
  text("BILLY NEEDS YOU GO HELP HIM", width / 2, height / 2 - 50);

  // Draw loading bar
  //adding local variable
  let barWidth = 400;
  let barHeight = 20;
  let barX = (width - barWidth) / 2;
  let barY = height / 2 + 20;

  noFill();
  stroke(255);
  rect(barX, barY, barWidth, barHeight);

  fill(32, 242, 245);
  let currentWidth = map(loadingProgress, 0, 100, 0, barWidth);
  rect(barX, barY, currentWidth, barHeight);

  textSize(20);
    fill(32, 242, 245);
  text(floor(loadingProgress) + "% Loaded", width / 2, barY + barHeight + 30);
}

function drawGameScreen() {
    moveMother();
    drawMother();
for (let i = 0; i < enemies.length; i++) 
{
    fill(150, 150, 150);
    ellipse(enemies[i].x, enemies[i].y, enemies[i].size, enemies[i].size);
   enemies[i].y += enemies[i].speed;
 // If the enemies goes off the screen it reset it 
 if (enemies[i].y > height) {
  enemies.splice(i, 1);
  spawnEnemy(); 
  score += 10; }
//i dont fullly understand this but i will later on 
let shipCenterX = MotherX - 30 + 25;
 let shipCenterY = MotherY - 40 + 30; 
  let distance = dist(shipCenterX, shipCenterY, enemies[i].x, enemies[i].y);
  if (distance < enemies[i].size / 2 + 30) { 
   gameState = 'gameOver'; 
  }
  }
  //The score
    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text('Score: ' + score, 10, 10);
}

function spawnEnemy() {
    let size = random(20, 40);
  enemies.push({
   x: random(width),
   y: random(-100, -50), 
   size: size,
  speed: random(3, 6)
    });
}
//making the game over screen 
function drawGameOverScreen() {
    background(108,108,252); 
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255);
    text('GAME OVER', width / 2, height / 2 - 40);
    textSize(32);
    text('Final Score: ' + score, width / 2, height / 2 + 10);
    textSize(20);
    text('Press SPACE to Restart', width / 2, height / 2 + 60);
}

function keyPressed() {
    if (gameState === 'gameOver' && keyCode === 32) 
{
  score = 0;
 enemies = [];
  for (let i = 0; i < ENEMY_COUNT; i++) {
  spawnEnemy();
 }
   MotherX = width / 2;
  MotherY = height - 50;
 gameState = 'playing';
    }
}


//THe player
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
