class ComputerBase {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base2.png");

    World.add(world, this.body);
  }
reduceLife(){
  if(
    baseCollision.collided ||
    archerCollision.collided ||
    playerCollision.collided
  ){
    computerArcherLife -= 1;
    computer.reduceLife(computerArcherLife);
    if (computerArcherLife <=0 ){
      computerArcher.collapse = true;
      Matter.Body.setStatic(computerArcher.body, false);
      Matter.Body.setStatic(computer.body, false);
      Matter.Body.setPosition(computer.body, {
        x: width - 100,
        y: computer.body.position.y
      });
    }
  }
}

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

    pop();
  }
}
