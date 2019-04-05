const game = new Game();

// const post = new Posts();

function preload() {
    pitchbg = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/gameA/master/Assets/pitch.png'
    );
    ballImage = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/game-/master/game/Assets/SoccerBallsmall.png'
    );
    playerHome = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/gameA/master/Assets/playerHome.png'
    );
    playerAway = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/gameA/master/Assets/playerAway.png'
    );
    goalieBound = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/gameA/master/Assets/goalieBound.png'
    );
}
function setup() {
    game.setup();
}
function draw() {
    game.draw();
}
