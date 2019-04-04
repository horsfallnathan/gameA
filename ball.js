class Ball {
    constructor(x, y, v) {
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;
        // this.dx = 2;
        this.dy = 3;
        this.ax = 0; //acceleration x
        this.ay = 0; // acceleration y
        this.radius = 10;
        this.vMultiplier = 0.007;
        this.bMultiplier = 0.6;
        // this.aPlayer = game.player.aPlayer;
    }
    setup() {
        this.ballSpr = createSprite(this.x, this.y);
        this.ballSpr.addImage(ballImage);
        this.ballSpr.mass = 1;
        // this.ballSpr.velocity = (0.001, 0.001);
        this.ballSpr.friction = 0.02;
        // console.log(this.ballSpr.velocity);
    }
    draw() {
        drawSprites();
        // this.ballSpr.position.x += this.dx;
        if (game.player.aPlayer.collide(this.ballSpr)) {
            afterCollision();
        }
        // if (game.player.awayPlayer.collide(this.ballSpr)) {
        //     afterCollision2();
        // }

        if (this.ballSpr.position.y > GAME_HEIGHT - 20) {
            this.ballSpr.velocity.y -= 3;
        }
        if (this.ballSpr.position.x > GAME_WIDTH - 20) {
            this.ballSpr.velocity.x -= 3;
        }
        if (this.ballSpr.position.y < 20) {
            this.ballSpr.velocity.y += 3;
        }
        if (this.ballSpr.position.x < 20) {
            this.ballSpr.velocity.x += 3;
        }
    }
}

function afterCollision() {
    if (keyWentDown('l')) {
        console.log(game.player.aPlayer.rotation);
        if (keyIsDown(LEFT_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -180);
        }
        if (keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 90);
        }
        if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -135);
        }
        if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 135);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 0);
        }
        if (keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -90);
        }
        if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -45);
        }
        if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 45);
        }
    }
}
function afterCollision2() {
    if (keyWentDown('SPACE')) {
        console.log(game.player.aPlayer.rotation);
        if (keyIsDown(LEFT_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -180);
        }
        if (keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 90);
        }
        if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -135);
        }
        if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 135);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 0);
        }
        if (keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -90);
        }
        if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), -45);
        }
        if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
            game.ball.ballSpr.setSpeed(10 + game.player.aPlayer.getSpeed(), 45);
        }
    }
}
