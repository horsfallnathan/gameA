class Pitch {
    constructor() {
        this.x1 = INIT;
        this.x2 = BOUNDARY_RIGHT;
        this.y1 = INIT;
        this.y2 = BOUNDARY_BOTTOM;
    }
    setup() {
        this.top = createSprite(40, this.y1, this.x2 * 2, 4);
        this.top.immovable = true;
    }
    draw() {
        drawSprites();
        this.top.bounce(game.ball.ballSpr);
        // console.log('bounce');
        fill(0, 0, 0, 0);
        strokeWeight(4);
        stroke(255);
        rect(this.x1, this.y1, this.x2, this.y2); // Touchlines
        line(620, 20, 620, 820); // Middle line
        rect(20, GAME_HEIGHT / 2 - 150, 185, 300); //Home Penalty Box
        rect(1035, GAME_HEIGHT / 2 - 150, 185, 300); //Away Penalty Box
        circle(GAME_WIDTH / 2, GAME_HEIGHT / 2, 136); // Center circle
        strokeWeight(6);
    }
}
