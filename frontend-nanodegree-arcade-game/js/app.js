//use ES6 classes rather than this! 9/3/18 code for Enemy moved into classes.js, TODO: update render for enemy & player TODO: need to create for player

/* The function to render the enemies is looping through the array allEnemies, so you have to push your enemy objects in there before they can be seen.
code for variables/push from Slack conversation 9/4/18 with Amanda Hasenzahl
*/
/*Code instruction for spread operator in an arry from Rodrick Bloomfield https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000

/*const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();*/
const allEnemies = [...Array(3)].map((_, i) => new Enemy(0, i + 1));
const player = new Player();
//allEnemies.push(enemy1, enemy2, enemy3);

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

    player.handleInput(allowedKeys[e.keyCode]); //TODO: need to create handleInput on player, the method itself is complete
});