let ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Spaceship();
}

function draw() {
  background(0);

  // Update location
  ship.update();
  // Wrape edges
  ship.wrapEdges();
  // Draw ship
  ship.display();

  // text("left right arrows to turn, z to thrust", 10, height - 5);

  // Turn or thrust the ship depending on what key is pressed
  // 90 is the keyCode for 'z' or 'Z'

  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.03);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.03);
  } else if (keyIsDown(90)) {
    ship.thrust();
  }
}