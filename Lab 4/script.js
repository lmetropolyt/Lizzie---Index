let beat;

function setup() {
  createCanvas(100, 100);

  background(200);

  // Style the text.
  textAlign(CENTER);
  textSize(16);

  // Display a message.
  text('Click to play', 50, 50);

  // Create a p5.MediaElement using createAudio().
  beat = createAudio('/assets/welcome.mp3');

  describe('The text "Click to play" written in black on a gray background. A beat plays when the user clicks the square.');
}

// Play the beat when the user presses the mouse.
function mousePressed() {
  beat.play();
}