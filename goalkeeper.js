class Goalkeeper {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setup() {
        this.goalie = createSprite(this.x, this.y);
        this.topedge = createSprite(GAME_WIDTH - 100, GAME_HEIGHT / 2 - 90, 185, 2);
        this.homeTopedge = createSprite(100, GAME_HEIGHT / 2 - 90, 185, 2);
        this.bottomedge = createSprite(GAME_WIDTH - 100, GAME_HEIGHT / 2 + 90, 185, 2);
        this.homeBottomedge = createSprite(100, GAME_HEIGHT / 2 + 90, 185, 2);
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

        if (this.goalie.position.x > GAME_WIDTH) {
            this.goalie.position.x = GAME_WIDTH;
        }
        // if (this.homeGoalie.position.x < 20) {
        //     this.homeGoalie.position.x = 20;
        // }
        // this.move(0, 0.4);
    }
    // move(x, y) {
    // this.goalie.position.x += x;
    // this.goalie.velocity.y = 1;

    // // this.goalie.position.y -= y;
    // if (
    //     // this.goalie.position.y < GAME_HEIGHT / 2 - 90 ||
    //     this.goalie.position.y >
    //     GAME_HEIGHT / 2 + 90
    // ) {
    //     console.log('see me!!');
    //     this.goalie.setSpeed(3, -90);
    // this.goalie.position.y *= -1.15;
    // }
    // this.xSpeed = 0;
    // this.ySpeed = 0;
    // if (this.goalie.position.y > GAME_HEIGHT / 2 - 90) {
    //     this.goalie.position.y -= y;
    // } else if (this.goalie.position.y < GAME_HEIGHT / 2 - 90) {
    //     this.goalie.position.y += y;
    //     this.ySpeed = 0;
    // } else if (this.goalie.position.y + 20 > GAME_HEIGHT / 2 + 90) {
    //     this.goalie.position.y -= y;
    //     this.ySpeed = 0;
    // }
    //     GAME_WIDTH, GAME_HEIGHT / 2, 40, 180;
    // }
}
// function trackBall() {
//     let diff = -(game.goalkeeper.position.x + 10 - game.ballSpr.position.x);
//     if (diff < 0 && diff < -4) {
//         diff = -5;
//     } else if (diff > 0 && diff > 4) {
//         diff = 5;
//     }
//     game.goalkeeper.move(0,diff * 0.5);
//     if (game.goalie.position.y < 0){
//         this.goalie.position.y =0
//     }
//     else if(this.goalie.position.y + this.goalie.height > GAME_HEIGHT){
//         this.goalie.position.y = GAME_HEIGHT - this.goalie.height
//     }
// }
