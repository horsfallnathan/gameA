class Game {
    constructor() {
        this.pitch = new Pitch();
        this.awayPlayer = new Player(800, 400, 65, 68, 87, 83, 32, 'home');
        this.player = new Player(400, 400, 37, 39, 38, 40, 76, 'away');
        this.homePost = new Posts(0, GAME_HEIGHT / 2, 40, 180);
        this.awayPost = new Posts(GAME_WIDTH, GAME_HEIGHT / 2, 40, 180);
        this.goalie = new Goalkeeper(GAME_WIDTH, GAME_HEIGHT / 2, GAME_WIDTH, 'away');
        this.homeGoalie = new Goalkeeper(0, GAME_HEIGHT / 2, 'home');
        this.ball = new Ball();
        this.post = new Posts();
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT);
        frameRate(60);
        this.ball.setup();
        this.pitch.setup();
        this.player.setup();
        this.awayPlayer.setup();
        this.player.move();
        this.homePost.setup();
        this.awayPost.setup();
        this.goalie.setup();
        this.homeGoalie.setup();
    }
    draw() {
        background(0, 180, 0);
        this.pitch.draw();
        this.goalie.draw();
        this.homeGoalie.draw();
        this.player.draw();
        this.awayPlayer.draw();
        this.ball.draw();
        this.homePost.draw();
        this.awayPost.draw();
    }
}
