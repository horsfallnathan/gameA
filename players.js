class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.image = playerHome;
    }
    setup() {
        this.aPlayer = createSprite(this.x, this.y);
        this.aPlayer.addImage(playerHome);
    }
    draw() {
        drawSprites();
        this.move();
    }
    move() {


        //     if (keyIsDown(LEFT_ARROW)) {
    //         this.aPlayer.position.x -= 4;
    //         this.aPlayer.mirrorX(-1);
    //         if (this.aPlayer.position.x < 40) {
    //             this.aPlayer.position.x = 45;
    //         }
    //     }

    //     if (keyIsDown(RIGHT_ARROW)) {
    //         this.aPlayer.position.x += 4;
    //         this.aPlayer.mirrorX(1);
    //         if (this.aPlayer.position.x > GAME_WIDTH - 40) {
    //             this.aPlayer.position.x = GAME_WIDTH - 45;
    //         }
    //     }
    //     if (keyIsDown(UP_ARROW)) {
    //         this.aPlayer.position.y -= 4;
    //         this.aPlayer.mirrorY(-1);
    //         if (this.aPlayer.position.y < 40) {
    //             this.aPlayer.position.y = 45;
    //         }
    //     }
    //     if (keyIsDown(DOWN_ARROW)) {
    //         this.aPlayer.position.y += 4;
    //         this.aPlayer.mirrorY(1);
    //         if (this.aPlayer.position.y > GAME_HEIGHT - 40) {
    //             this.aPlayer.position.y = GAME_HEIGHT - 45;
    //         }
    //     }
    // }
}

// let homePlayer = new Player(200, 500);
