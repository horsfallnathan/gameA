// let homeScore = 0;
// let awayScore = 0;
class Posts {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.homeScore = 0;
        this.awayScore = 0;
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
                this.aGoal('away');
                game.ball.ballSpr.position.x = GAME_WIDTH / 2;
                game.ball.ballSpr.position.y = GAME_HEIGHT / 2;
                game.ball.ballSpr.setSpeed(0);
            }
            if (game.ball.ballSpr.position.x < 45) {
                textSize(50);
                this.aGoal('home');
                game.ball.ballSpr.position.x = GAME_WIDTH / 2;
                game.ball.ballSpr.position.y = GAME_HEIGHT / 2;
                game.ball.ballSpr.setSpeed(0);
            }
        }
    }
    aGoal(team) {
        if (team === 'home') {
            this.homeScore = this.homeScore++;
        }
        if (team === 'away') {
            this.awayScore = this.awayScore++;
        }
        this.showSplash();
        console.log(this.awayScore, this.homeScore);
    }
    showSplash() {
        let splash = document.getElementById('splash');

        splash.classList.toggle('dTrue', true);
        document.getElementById('resumeButton').addEventListener('click', function() {
            toggleSplash();
        });
    }
}
console.log(this.homeScore, this.awayScore);

function toggleSplash() {
    splash.classList.toggle('dTrue', false);
}
