// Wilman Bonilla 
//Dec 4 2025
//Title: Crazy rocket



let stars = [];
let Loaded = false;
let LoadTime = 5000; // timer for it to start
let startTime;

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

  for (let i = 0; i < 100; i++) 
    
{
    stars.push(
{
      x: random(width),
      y: random(height),
      size: random(3, 5),
      speed: random(1.5, 1.8)});
  }
}

function draw() {
  background(10); // Deep space background
  
  // Moving stars
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

  // loading updating to simulate movement
  // I needed help with this i could not get the loading bar to stay at a certain distance.
  // I got it from https://editor.p5js.org/gpetrioli/sketches/SyibBz_ff
  // I also had help from a colleague 
 if (!Loaded) {
    let elapsedTime = millis() - startTime;
    loadingProgress = map(elapsedTime, 0, LoadTime, 0, 100);
    if (loadingProgress >= 100) {
      loadingProgress = 100;
      Loaded = true;
    }
    drawLScreen();
  } else {
  
    drawGameScreen();
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
  rect(barX, barY, barWidth, barHeight); // Outline

  fill(32, 242, 245);
  let currentWidth = map(loadingProgress, 0, 100, 0, barWidth);
  rect(barX, barY, currentWidth, barHeight); // Filled portion

  textSize(20);
    fill(32, 242, 245);
  text(floor(loadingProgress) + "% Loaded", width / 2, barY + barHeight + 30);
}

