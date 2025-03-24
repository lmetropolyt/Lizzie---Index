function setup() {
    createCanvas(100, 100);
  
    background(200);
  
    let img = createImg(
      'https://p5js.org//assets/img/asterisk-01.png',
      'The p5.js magenta asterisk.'
    );
    img.position(0, -10);
  
    describe('A gray square with a magenta asterisk in its center.');
  }