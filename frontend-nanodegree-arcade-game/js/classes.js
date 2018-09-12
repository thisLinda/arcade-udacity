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
        this.outOfBoundsY = this.y < 1; //|| //this.y > 5;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
    //https://medium.com/@assertchris/collision-detection-b8bf655cb672

    //TODO: need collision code
}


class Player extends Entity {
    constructor() {
        super();
        //this.horizontal = 101;
        //this.vertical = 83;
        //this.x = x;
        //this.y = y;
        this.sprite = 'images/char-cat-girl.png';
        this.isMoving = false;
        //this.win = false;
    }

    /*(render() {
        super.render();
        //this.move = false;
    }*/
    //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
    //https:/ / medium.com / @assertchris / player - input - 5 bc1b0d80f54 /

    //handle input method instructed by M.Cranford //https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/ 

    /*handleInput(input) {
        switch (input) {
            case 'left':
                this.x -= this.horizontal;
                break;
            case 'up':
                this.y -= this.vertical;
                break;
            case 'right':
                this.x += this.horizontal;
                break;
            case 'down':
                this.y += this.vertical;
                break;
        }
        this.isMoving = true;
    }*/

    //switch code instructed by R.Bloomfield
    handleInput(input) {
        switch (input) {
            case 'left':
                this.x = this.x > 0 ? this.x - 1 : this.x;
                break;
            case 'up':
                this.y = this.y > 0 ? this.y - 1 : this.y;
                break;
            case 'right':
                this.x = (this.x > -1 && this.x < 4) ? this.x + 1 : this.x;
                break;
            case 'down':
                this.y = (this.y > -1 && this.y < 5) ? this.y + 1 : this.y;
                break;
        }
        this.isMoving = true;
    }
}

/*handleInput code from Sandra Israel https://github.com/sandraisrael/fend-arcade-game/blob/master/js/app.js
handleInput(allowedKeys) {
    if (allowedKeys === 'left' && this.x > 33) {
        this.x -= 200;
    } else if (allowedKeys === 'up' && this.y > 18) {
        this.y -= 80;
    } else if (allowedKeys === 'right' && this.x < 200) {
        this.x += 100;
    } else if (allowedKeys === 'down' && this.y < 380) {
        this.y += 80;
    }
    // this.move = true;
}*/

//https://jlongster.com/Making-Sprite-based-Games-with-Canvas
//https://code.tutsplus.com/articles/html5-avoider-game-tutorial-multiple-moving-enemies--active-9956
class Enemy extends Entity {
    constructor(x, y, speed) {
        super();
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
        //this.rate = Math.floor((Math.random() * 300) + 75);
    }

    update(dt) {
        super.update();
        if (this.outOfBoundsX) {
            this.x = -1;
        } else {
            this.x += this.speed * dt;
        }
    }
}

//TODO: player needs to render
//TODO: bugs need to render
//TODO: player needs to move
//TODO: player needs to stay in window
//TODO: bugs need to move
//TODO: need a function to check collisions
//TODO: need a win function