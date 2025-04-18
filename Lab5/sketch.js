var data;
var index = 0; // Current fairy index
var img; // To store the loaded image

function preload() {
    data = loadJSON('data.json'); // Load the JSON file
    loadFairyImage(); // Load the first fairy's image
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    // Get the current fairy
    let currentFairy = data.FairyName[index];

    // Set the background to the fairy's associated color
    background(currentFairy.color);

    // Draw the fairy's profile card
    fill(255);
    rectMode(CENTER);
    rect(width / 2, height / 2, 300, 200, 20); // Rounded rectangle for the card

    // Display the fairy's name
    fill(0);
    textSize(24);
    textAlign(CENTER, TOP);
    text(currentFairy.name, width / 2, height / 2 - 80);

    // Display the fairy's habitat
    textSize(16);
    text(`Habitat: ${currentFairy.habitat}`, width / 2, height / 2 - 40);

    // Display the fairy's image (if available)
    if (img) {
        imageMode(CENTER);
        image(img, width / 2, height / 2 + 40, 100, 100); // Display the fairy's image
    } else {
        console.log("No image available for:", currentFairy.name);
    }

    // Display instructions to navigate
    fill(0);
    textSize(12);
    text("Press LEFT or RIGHT to navigate between fairies", width / 2, height - 20);
}

function keyPressed() {
    // Navigate between fairies
    if (keyCode === RIGHT_ARROW) {
        index = (index + 1) % data.FairyName.length; // Move to the next fairy
        loadFairyImage(); // Load the new fairy's image
    } else if (keyCode === LEFT_ARROW) {
        index = (index - 1 + data.FairyName.length) % data.FairyName.length; // Move to the previous fairy
        loadFairyImage(); // Load the new fairy's image
    }
}

function loadFairyImage() {
    // Load the current fairy's image
    let currentFairy = data.FairyName[index];
    if (currentFairy.image) {
        img = loadImage(currentFairy.image, () => {
            console.log("Image loaded successfully:", currentFairy.image);
        }, () => {
            console.error("Failed to load image:", currentFairy.image);
        });
    } else {
        img = null;
    }
}