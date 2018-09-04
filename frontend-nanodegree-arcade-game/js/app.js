//use ES6 classes rather than this! 9/3/18 code for Enemy moved into classes.js, TODO: update render for enemy & player TODO: need to create for player, TODO: 
const enemyOne = new Enemy1();
const enemyTwo = new Enemy2();
const enemyThree = new Enemy3();
const allEnemies = [];
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
//const player = new Player();

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); //TODO: need to create handleInput on player
});