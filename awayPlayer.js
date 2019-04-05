class AwayPlayer {
    constructor(x, y, leftM, rightM, upM, downM, shoot, team) {
        this.x = x;
        this.y = y;
        this.rightM = rightM;
        this.leftM = leftM;
        this.upM = upM;
        this.downM = downM;
        this.shoot = shoot;
        this.team = team;
    }
    setup() {
        this.awayPlayer = createSprite(this.x, this.y);
        this.awayPlayer.addImage(playerAway);
        this.awayPlayer.rotation = 0;
        this.awayPlayer.friction = 0.02;
        this.awayPlayer.mass = 2;
        this.awayPlayer.setCollider('circle', 0, 0, 30);
    }
    draw() {
        drawSprites();
        this.move(this.leftM, this.rightM, this.upM, this.downM);
        this.awayPlayer.collide(this.awayPlayer);
        if (this.awayPlayer.collide(game.ball.ballSpr)) {
            afterCollision2();
        }
    }
    move(left, right, up, down) {
        if (left && keyIsDown(left)) {
            this.awayPlayer.position.x -= 4;
            this.awayPlayer.mirrorX = -1;
            if (this.awayPlayer.position.x < 40) {
                this.awayPlayer.position.x = 45;
            }
        }

        if (right && keyIsDown(right)) {
            this.awayPlayer.position.x += 4;
            this.awayPlayer.mirrorX = 1;
            if (this.awayPlayer.position.x > GAME_WIDTH - 40) {
                this.awayPlayer.position.x = GAME_WIDTH - 45;
            }
        }
        if (up && keyIsDown(up)) {
            this.awayPlayer.position.y -= 4;
            this.awayPlayer.rotation += 2;
            if (this.awayPlayer.position.y < 40) {
                this.awayPlayer.position.y = 45;
            }
        }
        if (down && keyIsDown(down)) {
            this.awayPlayer.position.y += 4;
            this.awayPlayer.rotation -= 2;
            if (this.awayPlayer.position.y > GAME_HEIGHT - 40) {
                this.awayPlayer.position.y = GAME_HEIGHT - 45;
            }
        }
    }
}

function afterCollision2() {
    if (keyWentDown('g')) {
        if (keyIsDown(LEFT_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), -180);
        }
        if (keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), 90);
        }
        if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), -135);
        }
        if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), 135);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), 0);
        }
        if (keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), -90);
        }
        if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), -45);
        }
        if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.awayPlayer.getSpeed(), 45);
        }
    }
}
