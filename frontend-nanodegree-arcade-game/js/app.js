//use ES6 classes rather than given code 
//9/3/18 code for Enemy moved into classes.js

/* The function to render the enemies is looping through the array allEnemies, so you have to push your enemy objects in there before they can be seen.
**code for variables/push from Slack conversation 9/4/18 with Amanda Hasenzahl
*/
//https://www.html5canvastutorials.com/advanced/html5-canvas-get-image-data-tutorial/
//https://docs.code.org/applab/drawImage/

const enemy1 = new Enemy(0, 1, 110 * (Math.random() * 0.04));
const enemy2 = new Enemy(1, 2, 110 * (Math.random() * 0.06));
const enemy3 = new Enemy(2, 3, 100 * (Math.random() * 0.08));
const player = new Player();
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});