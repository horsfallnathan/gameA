class Game {
    constructor() {
        this.pitch = new Pitch();
        this.player = new Player(400, 400);
        this.homePost = new Posts(0, GAME_HEIGHT / 2, 40, 180);
        this.awayPost = new Posts(GAME_WIDTH, GAME_HEIGHT / 2, 40, 180);

        // this.player2 = new Player(40, 400);
        this.ball = new Ball();
        // this.playerHome = playerHome;
        this.post = new Posts();
        // this.dx = 2;
        // this.dy = 2;
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT);
        frameRate(60);
        this.ball.setup();
        this.player.setup();
        // this.player2.setup();
        this.player.move();
        this.homePost.setup();
        this.awayPost.setup();
    }
    draw() {
        // console.log('hek');
        background(0, 180, 0);
        this.pitch.draw();
        this.player.draw();
        // this.player2.draw();
        this.ball.draw();
        this.homePost.draw();
        this.awayPost.draw();

        if (this.player.aPlayer.collide(this.ball.ballSpr)) {
            // this.ball.ballSpr.velocity.x += 0.03;
            // this.ball.ballSpr.velocity.y += 0.03;
            // this.ball.ballSpr.velocity.z += 180;
            if (keyWentDown('s')) {
                this.ball.ballSpr.setSpeed(
                    10 + this.player.aPlayer.getSpeed(),
                    this.player.aPlayer.rotation
                );
            }
        }
    }
}
