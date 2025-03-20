let badFairy, goodFairy, currentFairy, tulipBackground;
let fairyWidth = 400;
let fairyAspectRatio = 1;

function preload() {
  badFairy = loadImage('badfairy.png');
  goodFairy = loadImage('goodfairy.png');
  tulipBackground = loadImage('Tulip.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentFairy = badFairy;
  fairyAspectRatio = badFairy.width / badFairy.height;
}

function draw() {
  image(tulipBackground, 0, 0, width, height);
  let fairyHeight = fairyWidth / fairyAspectRatio;
  image(currentFairy, (width - fairyWidth) / 2, (height - fairyHeight) / 2, fairyWidth, fairyHeight);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    currentFairy = goodFairy;
  } else if (keyCode === RIGHT_ARROW) {
    currentFairy = badFairy;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}