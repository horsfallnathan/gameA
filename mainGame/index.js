const game = new Game();

function preload() {
    ballKick = loadSound(
        'https://raw.githubusercontent.com/horsfallnathan/ironLeague19/master/mainGame/Assets/ballkick.mp3'
    );
    pitchbg = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/ironLeague19/master/mainGame/Assets/pitch.png'
    );
    ballImage = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/ironLeague19/master/mainGame/Assets/SoccerBallsmall.png'
    );
    playerHome = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/ironLeague19/master/mainGame/Assets/playerHome.png'
    );
    playerAway = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/ironLeague19/master/mainGame/Assets/playerAway.png'
    );
    goalieBound = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/ironLeague19/master/mainGame/Assets/goalieBound.png'
    );
}
function setup() {
    game.setup();
}
function draw() {
    game.draw();
    game.over();
}

function keyPressed() {
    if (keyCode === 76) {
        ballKick.play();
    } else if (keyCode === 32) {
        ballKick.play();
    }
}
