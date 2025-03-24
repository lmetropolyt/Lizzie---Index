var shapes = []; // circles and rectangles
var positions = []; // only the y changes 
var speed = []; // doesn't change
var colours = []; // doesn't change 
var rotations = []; // doesn't change

var numberOfShapes = 300;

var btn; 
var thursday = false;
var mysound;
var bgImage; // Variable to hold the background image
let particles = [];

function preload() {
   bgImage = loadImage('rainbow.jpg'); // rainbow Fairy Background
   mysound = loadSound("welcome.mp3");
}

function setup(){
   createCanvas(windowWidth, windowHeight);
   colorMode(HSB, 360, 100, 100); // Set color mode to HSB

   btn = createButton("START THE FAIRY PARTY!!!");
   btn.position(windowWidth / 2 - btn.width / 2, windowHeight / 2 - btn.height / 2); // Center the button
   btn.style('position', 'absolute'); // Use absolute positioning
   btn.style('left', '50%'); // Center horizontally
   btn.style('top', '50%'); // Center vertically
   btn.style('transform', 'translate(-50%, -50%)'); // Adjust for the button's size
   btn.mousePressed(function(){
       thursday = !thursday;
       if(thursday){
           btn.html("STOP THE PARTY");
           mysound.play();
       }else{
           btn.html("START THE FAIRY PARTY!!!");
           mysound.stop();
       }
   });

   for(var i = 0; i < numberOfShapes; i++){
       colours[i] = color(random(360), 100, 100); // Random hue, full saturation and brightness
       rotations[i] = random(PI/2);
       positions[i] = random(windowHeight);
       speed[i] = random(1, 7);
       if(random() > 0.4){
           shapes[i] = "rect";
       }else{
           if(random() > 0.5){
               shapes[i] = "star";
           }else{
               shapes[i] = "emoji";
           }
       }
   }
   noStroke();
   rectMode(CENTER);
   textSize(20);
}

function draw(){
   image(bgImage, 0, 0, width, height); // Draw the background image
   if(thursday === true){
       confetti();
       for (let i = 0; i < 5; i++) {
           let p = new Particle();
           particles.push(p);
       }
       for (let i = particles.length - 1; i >= 0; i--) {
           particles[i].update();
           particles[i].show();
           if (particles[i].finished()) {
               particles.splice(i, 1);
           }
       }
   }
}

function confetti(){
   var interval = windowWidth / numberOfShapes;

   for(var i = 0; i < numberOfShapes; i++){
       colours[i] = color((frameCount + i * 10) % 360, 100, 100); // Update hue over time
       fill(colours[i]);
       push();
       translate(i * interval, positions[i]);
       rotate(rotations[i]);
       if(shapes[i] === "rect"){
           rect(0, 0, 5, 30);
       }
       if(shapes[i] === "star"){
           drawStar(0, 0, 5, 10, 5); // Draw a star
       }
       if(shapes[i] === "emoji"){
           text("🌈", 0, 0);
       }
       if(shapes[i] === "emoji"){
           text("🌷", 20, 30);
       }
       pop();
   }

   for(var i = 0; i < numberOfShapes; i++){
       positions[i] += speed[i];
       if(positions[i] > height){
           positions[i] = -50;
       }
   }
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = height;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
        this.color = color(60, 30, 100); // particle system colour
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
        ellipse(this.x, this.y, 16);
    }
}

function drawStar(x, y, radius1, radius2, npoints) {
   let angle = TWO_PI / npoints;
   let halfAngle = angle / 2.0;
   beginShape();
   for (let a = 0; a < TWO_PI; a += angle) {
       let sx = x + cos(a) * radius2;
       let sy = y + sin(a) * radius2;
       vertex(sx, sy);
       sx = x + cos(a + halfAngle) * radius1;
       sy = y + sin(a + halfAngle) * radius1;
       vertex(sx, sy);
   }
   endShape(CLOSE);
}

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
   btn.position(windowWidth / 2 - btn.width / 2, windowHeight / 2 - btn.height / 2); 
}