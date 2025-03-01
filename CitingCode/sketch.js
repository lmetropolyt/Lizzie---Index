//This code was learned from p5 Recursive Tree tutorial unless otherwise marked. The parts of the code i added was the growth action

let angle;
let branchLength = 0; 
let maxBranchLength = 200; // modified to change height the tree would 
let growthSpeed = 1; 

function setup() {
  createCanvas(windowWidth, 600); //Changed to fit any screen
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(0);


  angle = (mouseX / width) * 90;
  angle = min(angle, 90);

  translate(width / 2, height);

  stroke(0, 255, 255);
  line(0, 0, 0, 0, -branchLength); //Slightly modified for growth 

  translate(0, -branchLength);

  branch(branchLength, 0);

  if (branchLength < maxBranchLength) { // Added to create growth
    branchLength += growthSpeed; //Added as well
  } 

  describe(
    'A tree drawn by recursively drawing branches, with angle determined by the user mouse position.'
  );
}

function branch(h, level) {
  stroke(level * 25, 255, 255);


  h *= 0.66;


  if (h > 2) {
    push();
    rotate(angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
  }
}