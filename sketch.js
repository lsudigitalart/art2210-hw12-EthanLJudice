//Author @Ethan Judice
//https://massmoca.org/event/walldrawing295/

function setup() {
  createCanvas(400,400);
  background('black');
  fill('black');

  //Top left gradient
  fillGradient('linear', {
    from : [50, 50],   // x, y : Coordinates
    to : [350, 350], // x, y : Coordinates
    steps : [
        color('red'),
        color('orange'),
        color('yellow'),
        color('green'),
        color('blue'),
        color('indigo'),
        color('violet')
    ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
  });
  
}

  
function draw() {
  //background('black');
  fill('black');
  stroke("white")
  strokeWeight(3);
  //inner circle
  circle(200, 200, 360);
  //outer square
  line(20, 20, 20, 380);
  line(20, 380, 380, 380);
  line(380, 380, 380, 20);
  line(380, 20, 20, 20);
  //inner lines
  line(380, 380, 290, 20);
  line(380, 380, 200, 20);
  line(380, 20, 290, 380);
  line(290, 20, 290, 380);
  line(20, 380, 110, 20);
  line(20, 380, 200, 20);
  line(20, 20, 110, 380);
  line(110, 20, 110, 380);

  


  
} 
