class Posts {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setup() {
        this.post = createSprite(this.x, this.y, this.width, this.height);
        // this.awaygoal = createSprite(GAME_WIDTH, GAME_HEIGHT / 2, 40, 180);
    }
    draw() {
        drawSprites();
        this.score();
    }
    score() {
        if (this.post.overlap(game.ball.ballSpr)) {
            if (game.ball.ballSpr.position.x > GAME_WIDTH - 40) {
                textSize(50);
                text(`Away Team Scores!!`, GAME_WIDTH / 2 - 50, GAME_HEIGHT / 2);
            }
            if (game.ball.ballSpr.position.x < 45) {
                textSize(50);
                text(`Home Team Scores!!`, GAME_WIDTH / 2 - 50, GAME_HEIGHT / 2);
            }
        }
    }
}

// function score() {
//     if (this.homegoal.overlap(ball.spr)) {
//         awayScores();
//     }
//     if (this.awaygoal.overlap(ball.spr)) {
//         homeScores();
//     }
// }
// function awayScores() {
//     awayPoint++;
//     textSize(50);
//     text('Away Team Scores!!!', GAME_WIDTH / 2 - 50, GAME_HEIGHT / 2);
// }
// function homeScores() {
//     homePoint++;
//     textSize(50);
//     text('Home Team Scores!!!', GAME_WIDTH / 2 - 50, GAME_HEIGHT / 2);
// }
