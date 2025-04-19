let snowflakes = []; // Array to store snowflakes

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    clear(); // Clear the canvas for transparency
    background(0, 0, 0, 0); // Transparent background

    // Create new snowflakes
    let t = frameCount / 60; // Time variable
    for (let i = 0; i < random(5); i++) {
        snowflakes.push(new Snowflake()); // Add a new snowflake
    }

    // Update and display snowflakes
    for (let flake of snowflakes) {
        flake.update(t); // Update snowflake position
        flake.display(); // Draw snowflake
    }

    // Remove snowflakes that have moved off the screen
    snowflakes = snowflakes.filter(flake => !flake.offScreen());
}

// Snowflake class
class Snowflake {
    constructor() {
        this.posX = random(width);
        this.posY = random(-50, 0);
        this.size = random(2, 5);
        this.speed = random(1, 3);
        this.angle = random(TWO_PI);
        this.dir = random([-1, 1]);
    }

    update(time) {
        this.angle += this.dir * 0.01; // Slight rotation
        this.posY += this.speed; // Move down
        this.posX += sin(this.angle) * 2; // Sway left and right
    }

    display() {
        fill(255, 255, 255, 200); // White with slight transparency
        ellipse(this.posX, this.posY, this.size);
    }

    offScreen() {
        return this.posY > height; // Check if the snowflake is off the screen
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}