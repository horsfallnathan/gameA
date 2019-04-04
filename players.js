class Player {
  constructor(x, y, leftM, rightM, upM, downM, shoot, team) {
    this.x = x;
    this.y = y;
    this.rightM = rightM;
    this.leftM = leftM;
    this.upM = upM;
    this.downM = downM;
    this.shoot = shoot;
    this.team = team;
    // this.image = playerAway;
  }
  setup() {
    this.aPlayer = createSprite(this.x, this.y);
    if (this.team == 'home') this.aPlayer.addImage(playerHome);
    else this.aPlayer.addImage(playerAway);
    this.aPlayer.rotation = 0;
    this.aPlayer.friction = 0.02;
    this.aPlayer.mass = 2;
    this.aPlayer.setCollider('circle', 0, 0, 30);
  }
  draw() {
    drawSprites();
    this.move(this.leftM, this.rightM, this.upM, this.downM);

    if (this.aPlayer.collide(game.ball.ballSpr)) {
      afterCollision();
    }
  }
  move(left, right, up, down) {
    if (left && keyIsDown(left)) {
      this.aPlayer.position.x -= 4;
      this.aPlayer.mirrorX = -1;
      if (this.aPlayer.position.x < 40) {
        this.aPlayer.position.x = 45;
      }
    }

    if (right && keyIsDown(right)) {
      this.aPlayer.position.x += 4;
      this.aPlayer.mirrorX = 1;
      if (this.aPlayer.position.x > GAME_WIDTH - 40) {
        this.aPlayer.position.x = GAME_WIDTH - 45;
      }
    }
    if (up && keyIsDown(up)) {
      this.aPlayer.position.y -= 4;
      this.aPlayer.rotation += 2;
      if (this.aPlayer.position.y < 40) {
        this.aPlayer.position.y = 45;
      }
    }
    if (down && keyIsDown(down)) {
      this.aPlayer.position.y += 4;
      this.aPlayer.rotation -= 2;
      if (this.aPlayer.position.y > GAME_HEIGHT - 40) {
        this.aPlayer.position.y = GAME_HEIGHT - 45;
      }
    }
  }
}

function afterCollision() {
  if (keyWentDown('l')) {
    if (keyIsDown(LEFT_ARROW)) {
      game.ball.ballSpr.setSpeed(10, -180);
    }
    if (keyIsDown(DOWN_ARROW)) {
      game.ball.ballSpr.setSpeed(10, 90);
    }
    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
      game.ball.ballSpr.setSpeed(10, -135);
    }
    if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
      game.ball.ballSpr.setSpeed(10, 135);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      game.ball.ballSpr.setSpeed(10, 0);
    }
    if (keyIsDown(UP_ARROW)) {
      game.ball.ballSpr.setSpeed(10, -90);
    }
    if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
      game.ball.ballSpr.setSpeed(10, -45);
    }
    if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
      game.ball.ballSpr.setSpeed(10, 45);
    }
  }
  if (keyWentDown(32)) {
    if (keyIsDown(65)) {
      game.ball.ballSpr.setSpeed(10, -180);
    }
    if (keyIsDown(83)) {
      game.ball.ballSpr.setSpeed(10, 90);
    }
    if (keyIsDown(65) && keyIsDown(87)) {
      game.ball.ballSpr.setSpeed(10, -135);
    }
    if (keyIsDown(65) && keyIsDown(83)) {
      game.ball.ballSpr.setSpeed(10, 135);
    }
    if (keyIsDown(68)) {
      game.ball.ballSpr.setSpeed(10, 0);
    }
    if (keyIsDown(87)) {
      game.ball.ballSpr.setSpeed(10, -90);
    }
    if (keyIsDown(68) && keyIsDown(87)) {
      game.ball.ballSpr.setSpeed(10, -45);
    }
    if (keyIsDown(68) && keyIsDown(83)) {
      game.ball.ballSpr.setSpeed(10, 45);
    }
  }
}
