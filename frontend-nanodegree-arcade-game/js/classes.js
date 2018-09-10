//using ES 6, rather than .prototype in app.js as provided
/* Rodrick Bloomfield code instruction from zoom meeting https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000*/

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    update(dt) { //bugs move and reset
        this.outOfBoundsX = this.x > 5;
        this.outOfBoundsY = this.y < 1 || this.y > 5;
    }

    /*TODO: fine tune x and y coordinates, currently testing offsets*/

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
    //https://medium.com/@assertchris/collision-detection-b8bf655cb672
}


class Player extends Entity {
    constructor() {
        super();
        this.sprite = 'images/char-cat-girl.png';
        this.moving = false;
        this.win = false;
    }

    render() {
        super.render();
        this.moving = false;
    }
    //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
    //https:/ / medium.com / @assertchris / player - input - 5 bc1b0d80f54 /

    //handleInput code from Sandra Israel https://github.com/sandraisrael/fend-arcade-game/blob/master/js/app.js
    handleInput(input) {
        if (allowedKeys === 'left' && this.x > 33) {
            this.x -= 100;
        } else if (allowedKeys === 'up' && this.y > 18) {
            this.y -= 80;
        } else if (allowedKeys === 'right' && this.x < 400) {
            this.x += 100;
        } else if (allowedKeys === 'down' && this.y < 380) {
            this.y += 80;
        }
        this.moving = true;
    }
}
//https://jlongster.com/Making-Sprite-based-Games-with-Canvas
//https://code.tutsplus.com/articles/html5-avoider-game-tutorial-multiple-moving-enemies--active-9956
class Enemy extends Entity {
    constructor(x, y) {
        super();
        this.sprite = 'images/enemy-bug.png';
        this.x = (1, 2, 3);
        this.y = (1, 2, 3);
    }

    update(dt) { //can update to make the bugs move at different rates(random method)/start at different places on x axis
        super.update();
        if (this.outOfBoundsX) {
            this.x = -1;
        } else
            this.x += dt;
    }
}

//TODO: player needs to render
//TODO: bugs need to render
//TODO: player needs to move
//TODO: player needs to stay in window
//TODO: bugs need to move
//TODO: need a function to check collisions
//TODO: need a win function