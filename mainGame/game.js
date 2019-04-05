class Game {
    constructor() {
        this.pitch = new Pitch();
        this.awayPlayer = new Player(800, 400, 65, 68, 87, 83, 32, 'away');
        this.homePlayer = new Player(400, 400, 37, 39, 38, 40, 76, 'home');
        this.homePost = new Posts(0, GAME_HEIGHT / 2, 40, 180);
        this.awayPost = new Posts(GAME_WIDTH, GAME_HEIGHT / 2, 40, 180);
        this.goalie = new Goalkeeper(GAME_WIDTH, GAME_HEIGHT / 2, 'away');
        this.homeGoalie = new Goalkeeper(0, GAME_HEIGHT / 2, 'home');
        this.ball = new Ball();
        this.post = new Posts();
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT);
        frameRate(60);
        this.ball.setup();
        this.pitch.setup();
        this.awayPlayer.setup();
        this.homePlayer.setup();
        this.homePost.setup();
        this.awayPost.setup();
        this.goalie.setup();
        this.homeGoalie.setup();
    }
    draw() {
        background(pitchbg);
        this.pitch.draw();
        this.goalie.draw();
        this.homeGoalie.draw();
        this.awayPlayer.draw();
        this.homePlayer.draw();
        this.ball.draw();
        this.homePost.draw();
        this.awayPost.draw();
    }
    over() {
        if (120 - Math.floor(frameCount / 60) == 0) {
            this.gameOver = true;
            gameOver();
            console.log('game over');
        }
    }
}
function gameOver() {
    console.log('hey');
    winner();
    let gameGet = document.getElementById('gameOver');
    gameGet.classList.toggle('dTrue', true);
    console.log(gameGet);
    // document.getElementById('newGame').addEventListener('click', function() {
    //     gameGet.classList.toggle('dTrue', false);
    // });

    document.getElementById('newGame').addEventListener('click', function() {
        document.location.reload();
        // document.getElementById('newGame').addEventListener('click', function() {
        //     console.log('got here');
        //     homeScores = 0;
        //     awayScores = 0;
        //     game.ball.ballSpr.position.x = GAME_WIDTH / 2;
        //     game.ball.ballSpr.position.y = GAME_HEIGHT / 2;
        //     game.ball.ballSpr.setSpeed(0);
        //     game.awayPlayer.aPlayer.position.x = 800;
        //     game.awayPlayer.aPlayer.position.y = 400;
        //     game.homePlayer.aPlayer.position.x = 400;
        //     game.homePlayer.aPlayer.position.y = 400;
    });
}
function winner() {
    if (homeScores > awayScores) {
        let winA = document.getElementById('winner');
        winA.innerHTML = 'Home Team Wins!';
    }
    if (homeScores < awayScores) {
        let winA = document.getElementById('winner');
        winA.innerHTML = 'Away Team Wins!!!';
    }
    if (homeScores == awayScores) {
        let winA = document.getElementById('winner');
        winA.innerHTML = 'Up for a rematch?';
    }
}
