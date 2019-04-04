class Player {
    constructor(x, y, leftM, rightM, upM, downM, shoot, team) {
        this.x = x;
        this.y = y;
        this.rightM = rightM;
        this.leftM = leftM;
        this.upM = upM;
        this.downM = downM;
        this.shoot = shoot;
        this.team = team;
        // this.image = playerAway;
    }
    setup() {
        this.aPlayer = createSprite(this.x, this.y);
        if (this.team == 'home') this.aPlayer.addImage(playerHome);
        else this.aPlayer.addImage(playerAway);
        this.aPlayer.rotation = 0;
        this.aPlayer.friction = 0.02;
        this.aPlayer.mass = 2;
        this.aPlayer.setCollider('circle', 0, 0, 30);
    }
    draw() {
        drawSprites();
        this.move(this.leftM, this.rightM, this.upM, this.downM);
    }
    move(left, right, up, down) {
        if (keyIsDown(left)) {
            this.aPlayer.position.x -= 4;
            this.aPlayer.mirrorX = -1;
            if (this.aPlayer.position.x < 40) {
                this.aPlayer.position.x = 45;
            }
        }

        if (keyIsDown(right)) {
            this.aPlayer.position.x += 4;
            sthis.aPlayer.mirrorX = 1;
            if (this.aPlayer.position.x > GAME_WIDTH - 40) {
                this.aPlayer.position.x = GAME_WIDTH - 45;
            }
        }
        if (keyIsDown(up)) {
            this.aPlayer.position.y -= 4;
            this.aPlayer.rotation += 2;
            if (this.aPlayer.position.y < 40) {
                this.aPlayer.position.y = 45;
            }
        }
        if (keyIsDown(down)) {
            this.aPlayer.position.y += 4;
            this.aPlayer.rotation -= 2;
            if (this.aPlayer.position.y > GAME_HEIGHT - 40) {
                this.aPlayer.position.y = GAME_HEIGHT - 45;
            }
        }
    }
}
