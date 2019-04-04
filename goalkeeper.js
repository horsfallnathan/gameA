class Goalkeeper {
    constructor(x, y, team) {
        this.x = x;
        this.y = y;
        this.team = team;
    }
    setup() {
        this.goalie = createSprite(this.x, this.y);
        this.topedge = createSprite(GAME_WIDTH - 100, GAME_HEIGHT / 2 - 90, 185, 2);
        this.topedge.addImage(goalieBound);
        this.homeTopedge = createSprite(100, GAME_HEIGHT / 2 - 90, 185, 2);
        this.homeTopedge.addImage(goalieBound);
        this.bottomedge = createSprite(GAME_WIDTH - 100, GAME_HEIGHT / 2 + 90, 185, 2);
        this.bottomedge.addImage(goalieBound);
        this.homeBottomedge = createSprite(100, GAME_HEIGHT / 2 + 90, 185, 2);
        this.homeBottomedge.addImage(goalieBound);
        this.goalie.addImage(playerHome);
        this.goalie.setSpeed(6, -90);
        this.goalie.maxSpeed = 7;

        this.goalie.mass = 2;
        this.topedge.immovable = true;
        this.bottomedge.immovable = true;
        this.homeTopedge.immovable = true;
        this.homeBottomedge.immovable = true;
    }
    draw() {
        // fill(255);
        drawSprites();
        this.goalie.bounce(this.topedge);
        this.goalie.bounce(this.bottomedge);
        this.goalie.bounce(this.homeTopedge);
        this.goalie.bounce(this.homeBottomedge);

        this.goalie.bounce(game.ball.ballSpr);
        if (this.team == 'home' && this.goalie.position.x < 5) this.goalie.position.x = 5;
        if (this.team == 'away' && this.goalie.position.x > GAME_WIDTH)
            this.goalie.position.x = GAME_WIDTH;
        // if (this.homeGoalie.position.x < 20) {
        //     this.homeGoalie.position.x = 20;
        // }
        // this.move(0, 0.4);
    }
}
