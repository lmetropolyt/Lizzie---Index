var data;
var index = 0;
var frameCounter = 0; // Counter to control the speed of word changes

function preload() {
    data = loadJSON('data.json'); // Load the JSON file
}

function setup() {
    createCanvas(600, 300);
    console.log(data);
}

function draw() {
    background('pink');

    // Display the current coffee word
    fill(0);
    textSize(16);
    text(`Coffee: ${data.coffee[index]}`, 20, 20);

    // Increment the frame counter
    frameCounter++;

    // Change the word every 60 frames (approximately 1 second at 60 FPS)
    if (frameCounter >= 60) {
        index++;
        index = index % data.coffee.length; // Loop back to the start of the array
        frameCounter = 0; // Reset the counter
    }
}