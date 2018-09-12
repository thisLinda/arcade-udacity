//using ES 6, rather than .prototype in app.js as provided
/* Rodrick Bloomfield code instruction from zoom meeting https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000*/

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    update(dt) {
        this.outOfBoundsX = this.x > 5;
        this.outOfBoundsY = this.y < 1;

        /*for (let enemy of allEnemies) {
            let deltaX = this.x - enemy.x - 15;
            let deltaY = this.y - enemy.y - 20;
            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance < 56) {
                console.log('hit');
            }
        }
        if (this.y < 10) {
            console.log('yippee!');
            this.y = 410;
        }*/
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
    //https://medium.com/@assertchris/collision-detection-b8bf655cb672
    //collision code instructed by R.Bloomfield

    /*checkCollisions(playerEnemy) {
        if (this.y === playerEnemy.y) {
            if (this.x >= playerEnemy.x - 0.5 && this.x <= playerEnemy.x + 0.5) {
                return true;
            }
        } else {
            return false;
        }
    }*/
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

//TODO: need a function to check collisions
//TODO: need a win function