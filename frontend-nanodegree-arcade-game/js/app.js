//use ES6 classes rather than this! 9/3/18 code for Enemy moved into classes.js, TODO: update render for enemy & player TODO: need to create for player

/* The function to render the enemies is looping through the array allEnemies, so you have to push your enemy objects in there before they can be seen.
code for variables/push from Slack conversation 9/4/18 with Amanda Hasenzahl
*/

const enemy1 = new Enemy(0, 0.8, 100 * (Math.random() * 0.04));
const enemy2 = new Enemy(1, 1.8, 100 * (Math.random() * 0.05));
const enemy3 = new Enemy(2, 2.8, 100 * (Math.random() * 0.06));
const player = new Player();
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);
console.log(allEnemies);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
//const player = new Player();

document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); //TODO: need to create handleInput on player, the method itself is complete
});