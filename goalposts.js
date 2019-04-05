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
                recordScore('away');
                game.ball.ballSpr.position.x = GAME_WIDTH / 2;
                game.ball.ballSpr.position.y = GAME_HEIGHT / 2;
                game.ball.ballSpr.setSpeed(0);
                game.awayPlayer.aPlayer.position.x = 800;
                game.awayPlayer.aPlayer.position.y = 400;
                game.homePlayer.aPlayer.position.x = 400;
                game.homePlayer.aPlayer.position.y = 400;
            }
            if (game.ball.ballSpr.position.x < 45) {
                textSize(50);
                recordScore('home');
                game.ball.ballSpr.position.x = GAME_WIDTH / 2;
                game.ball.ballSpr.position.y = GAME_HEIGHT / 2;
                game.ball.ballSpr.setSpeed(0);
                game.awayPlayer.aPlayer.position.x = 800;
                game.awayPlayer.aPlayer.position.y = 400;
                game.homePlayer.aPlayer.position.x = 400;
                game.homePlayer.aPlayer.position.y = 400;
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
        /* let awayP = document.getElementById('awayScore');
        awayP.innerHTML = homeScores; */
    }
    showSplash();

    console.log(`Home Team\: ${homeScores} Away Team\: ${awayScores}`);
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

function showSplash() {
    let splash = document.getElementById('splash');

    splash.classList.toggle('dTrue', true);
    document.getElementById('resumeButton').addEventListener('click', function() {
        splash.classList.toggle('dTrue', false);
    });
}
function winner() {
    if (homeScores > awayScores) {
        console.log('Home Team Wins!!!');
    }
    if (homeScores < awayScores) {
        console.log('Away Team Wins!!!');
    }
    if (homeScores == awayScores) {
        console.log('Up for a rematch?');
    }
}
