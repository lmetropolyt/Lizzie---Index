var gradientImage;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create a gradient image using createImage()
    gradientImage = createImage(width, height); // Match the canvas size
    gradientImage.loadPixels();
    for (let x = 0; x < gradientImage.width; x++) {
        for (let y = 0; y < gradientImage.height; y++) {
            let a = map(y, 0, gradientImage.height, 0, 255); // Vertical gradient
            let c = color(255, 255, 255, a); // White gradient with transparency
            gradientImage.set(x, y, c); // Set pixel color
        }
    }
    gradientImage.updatePixels(); // Apply changes to the image
}

function draw() {
    // Rainbow background
    let gradientSpeed = frameCount % 400; // Animate the gradient
    background(lerpColor(color('red'), color('blue'), gradientSpeed / 400));

    // Overlay the gradient image
    image(gradientImage, 0, 0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    // Recreate the gradient image to match the new canvas size
    gradientImage = createImage(width, height);
    gradientImage.loadPixels();
    for (let x = 0; x < gradientImage.width; x++) {
        for (let y = 0; y < gradientImage.height; y++) {
            let a = map(y, 0, gradientImage.height, 0, 255); // Vertical gradient
            let c = color(255, 255, 255, a); // White gradient with transparency
            gradientImage.set(x, y, c); // Set pixel color
        }
    }
    gradientImage.updatePixels();
}