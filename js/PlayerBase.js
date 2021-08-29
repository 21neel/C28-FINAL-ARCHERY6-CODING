class PlayerBase {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base1.png");

    World.add(world, this.body);
  }

  reduceLife(){
    
      if(
        baseCollision.collided ||
        archerCollision.collided ||
        playerCollision.collided
      ){
        playerArcherLife -= 1;
        player.reduceLife(playerArcherLife);
        if (playerArcherLife <=0 ){
          playerArcher.collapse = true;
          Matter.Body.setStatic(playerArcher.body, false);
          Matter.Body.setStatic(player.body, false);
          Matter.Body.setPosition(player.body, {
            x: width - 100,
            y: player.body.position.y
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
