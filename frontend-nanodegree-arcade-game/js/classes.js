//using ES 6, rather than .prototype in app.js as provided
/* Rodrick Bloomfield code instruction from zoom meeting https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000*/

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    update(dt) {
        this.isOutOfBoundsX = this.x > 5;
        this.isOutOfBoundsY = this.y < 1 || this.y > 5;
    }

    /*TODO: fine tune x and y coordinates, currently testing offsets*/

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }
}

class Player extends Entity {
    constructor() {
        super();
        this.sprite = 'images/char-cat-girl.png';
        this.playerMove = false;
        this.win = false;
    }
}

class Enemy extends Entity {
    constructor() {
        super();
        this.sprite = 'images/enemy-bug.png';
        this.x = 4;
        this.y = 6;
    }
}
//TODO: player needs to render
//TODO: bugs need to render
//TODO: player needs to move
//TODO: player needs to stay in window
//TODO: bugs need to move
//TODO: need a function to check collisions
//TODO: need a win function