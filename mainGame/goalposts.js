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
    }
    draw() {
        drawSprites();
        this.score();
    }
    score() {
        if (this.post.overlap(game.ball.ballSpr)) {
            if (game.ball.ballSpr.position.x > GAME_WIDTH - 40) {
                textSize(50);
                game.ball.ballSpr.position.x = GAME_WIDTH / 2;
                game.ball.ballSpr.position.y = GAME_HEIGHT / 2;
                game.ball.ballSpr.setSpeed(0);
                recordScore('away');
            }
            if (game.ball.ballSpr.position.x < 45) {
                textSize(50);
                game.ball.ballSpr.position.x = GAME_WIDTH / 2;
                game.ball.ballSpr.position.y = GAME_HEIGHT / 2;
                game.ball.ballSpr.setSpeed(0);
                recordScore('home');
            }
        }
    }
}
function recordScore(team) {
    if (team === 'home') {
        ++homeScores;
        updateAway();
    }
    if (team === 'away') {
        ++awayScores;
        updateHome();
    }
    showSplash(team);

    // console.log(`Home Team\: ${homeScores} Away Team\: ${awayScores}`);
}
updateHome();
updateAway();
function updateHome() {
    console.log('updating home');
    let homeP = document.getElementById('awayScore');
    console.log('homescores', homeScores);
    homeP.innerHTML = awayScores;
}

function updateAway() {
    console.log('updating away');
    let homeA = document.getElementById('homeScore');
    homeA.innerHTML = homeScores;
}

function showSplash(team) {
    let splash = document.getElementById('splash');
    let message = document.getElementById('who');
    message.innerHTML = `${team} Scores!!!`;

    splash.classList.toggle('dTrue', true);
    document.getElementById('resumeButton').addEventListener('click', function() {
        splash.classList.toggle('dTrue', false);

        game.awayPlayer.aPlayer.position.x = 800;
        game.awayPlayer.aPlayer.position.y = 400;
        game.homePlayer.aPlayer.position.x = 400;
        game.homePlayer.aPlayer.position.y = 400;
    });
}
