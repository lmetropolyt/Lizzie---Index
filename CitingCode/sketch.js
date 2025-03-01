let angle;
let branchLength = 0; 
let maxBranchLength = 200; 
let growthSpeed = 1; 

function setup() {
  createCanvas(windowWidth, 630);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(0);


  angle = (mouseX / width) * 90;
  angle = min(angle, 90);

  translate(width / 2, height);

  stroke(0, 255, 255);
  line(0, 0, 0, 0, -branchLength);

  translate(0, -branchLength);

  branch(branchLength, 0);

  if (branchLength < maxBranchLength) { 
    branchLength += growthSpeed; 
  } 

  describe(
    'A tree drawn by recursively drawing branches, with angle determined by the user mouse position.'
  );
}

function branch(h, level) {
  // Set the hue based on the recursion level
  stroke(level * 25, 255, 255);

  // Each branch will be 2/3 the size of the previous one
  h *= 0.66;

  // Draw if our branch length > 2, otherwise stop the recursion
  if (h > 2) {
    // Draw the right branch
    // Save the current coordinate system
    push();

    // Rotate by angle
    rotate(angle);

    // Draw the branch
    line(0, 0, 0, -h);

    // Move to the end of the branch
    translate(0, -h);

    // Call branch() recursively
    branch(h, level + 1);

    // Restore the saved coordinate system
    pop();

    // Draw the left branch
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
  }
}