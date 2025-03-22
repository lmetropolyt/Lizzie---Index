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

function preload() {
   bgImage = loadImage('rainbow.jpg'); // rainbow Fairy Background
   mysound = loadSound("mysound.mp3");
}

function setup(){
   createCanvas(windowWidth, windowHeight);

   btn = createButton("Activate Fairy Magic");
   btn.position(10,10);
   btn.mousePressed(function(){
       thursday = !thursday;
       if(thursday){
           btn.html("Kill all fairies");
           mysound.play();
       }else{
           btn.html("Activate Fairy Magic");
       }
   });

   for(var i = 0; i < numberOfShapes; i++){
       colours[i] = color( random(255), random(255), random(255));
       rotations[i] = random(PI/2);
       positions[i] = random(windowHeight);
       speed[i] = random(1, 7);
       if( random() > 0.4 ){
           shapes[i] = "rect";
       }else{
           if( random() > 0.5){
               shapes[i] = "circle";
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
   }
}

function confetti(){
   var interval = windowWidth / numberOfShapes;

   for(var i = 0; i < numberOfShapes; i++){
       fill( colours[i] );
       push();
       translate(i*interval, positions[i]);
       rotate( rotations[i] );
       if( shapes[i] === "rect" ){
           rect(0, 0, 5, 30);
       }
       if( shapes[i] === "circle"){
           circle(0,0,10);
       }
       if( shapes[i] === "emoji"){
           text("✨", 0, 0);
       }
       if( shapes[i] === "emoji"){
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

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
}