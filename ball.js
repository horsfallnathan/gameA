class Ball {
    constructor(x, y, v) {
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;
    }
    setup() {
        this.ballSpr = createSprite(this.x, this.y);
        this.ballSpr.addImage(ballImage);
        this.ballSpr.mass = 1;

        this.ballSpr.friction = 0.02;
    }
    draw() {
        textSize(40);
        text(`${120 - Math.floor(frameCount / 60)}`, 100, 100);
        drawSprites();
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
