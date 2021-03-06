// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 500);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
    this.x += (this.speed * dt);
    // loops the enemies
    if(this.x >= 808){
        this.x = -110;
    }
};

// Draw the enemy on the screen, required method for game
// attempt at randomized enemy generator
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemy1 = new Enemy(-150, 300);
var enemy2 = new Enemy(-110, 60);
var enemy3 = new Enemy(-200, 220);
var enemy4 = new Enemy(-300, 120);
// resets the enemy 
Enemy.prototype.reset = function(){
    
        allEnemies.forEach(function(enemy){
            this.x = -110;

        });
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, move) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.move = move;
    this.score = 0;
};

Player.prototype.update = function(dt){
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.startSpot = function(){
    this.x = 202;
    this.y = 505;
};
Player.prototype.reset = function(){
    this.x = 202;
    this.y = 505;
    this.score = 0;
    Enemy.prototype.reset();
};
// This is connected to the eventListener and allows the player
// to move with the keystrokes up, down, left, and right
Player.prototype.handleInput = function(keyCode){
    switch(keyCode){
    case 'left' : this.x = this.x - 101;
    break;  
    case 'right' : this.x = this.x + 101;
    break;
    case 'up' : this.y = this.y - 102;
    break;
    case 'down' : this.y = this.y + 102;
    break;
    }
    if(this.x <= 0) {
        this.x = 0;
    }
    if(this.x >= 808){
        this.x = 808;
    }
    if(this.y >= 606){
        this.y = 606;
    } 
    if(this.y <= -5){
        this.y = -5;
        console.log(this.x, this.y);
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

var player = new Player(202, 505);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
