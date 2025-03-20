var input;
var button;
var words = [];

function setup() {
  let canvas = createCanvas(300, 300);
  canvas.parent('canvasContainer'); // Attach the canvas to the div with id "canvasContainer"
  
  input = select('#nameInput');
  button = select('#submitButton');
  button.mousePressed(addWord);
  
  background(100);
  noStroke();
  textSize(30);
  fill(255);
  text("Enter your fave word.", 20, 20);
}

function draw() {
  background(100);
  for (let i = 0; i < words.length; i++) {
    words[i].update();
    words[i].display();
  }
}

function addWord() {
  var name = input.value();
  for (var i = 0; i < 30; i++) {
    words.push(new Word(name, random(width), random(height)));
  }
}

class Word {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.ySpeed = random(1, 3);
    this.xSpeed = random(-1, 1);
  }

  update() {
    this.y += this.ySpeed;
    this.x += this.xSpeed;
    if (this.y > height) {
      this.y = 0;
    }
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
  }

  display() {
    fill(random(255), random(255), random(255));
    text(this.name, this.x, this.y);
  }
}