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
        // this.aPlayer = this.player.aPlayer;
    }
    setup() {
        this.ballSpr = createSprite(this.x, this.y);
        this.ballSpr.addImage(ballImage);
        this.ballSpr.mass = 1;
        this.ballSpr.friction = 0.02;
        console.log(this.ballSpr.velocity);
    }
    draw() {
        drawSprites();
        // this.ballSpr.position.x += this.dx;

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
            this.ballSpr.velocity.x += this.dx;
        }

        // this.ballSpr.velocity.y += 0.03;
    }
}
