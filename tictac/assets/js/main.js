var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var rect;


function preload ()
    {
//         this.load.image('sky', 'assets/images/sky.png');
//         this.load.image('ground', 'assets/images/platform.png');
        this.load.image('star', 'assets/images/star.png');
//         this.load.image('bomb', 'assets/images/bomb.png');
       
        game.load.spritesheet('dude', 'assets/images/dude.png', 32, 48);
    }

function create() {
    rect = new Phaser.Rectangle(150, 150, 300, 300);

    rect1 = new Phaser.Rectangle(250, 150, 100, 300);

    rect2 = new Phaser.Rectangle(150, 250, 300, 100);

    button = game.add.button(game.world.centerX - 95, 460, 'dude', nukeButton, this, 2, 1, 0);

    // makeButton('squit', 600, 420);
    makeButton(150, 150,'b1')
    makeButton(250, 150,'b2')
    makeButton(350, 150,'b3')
     makeButton(150, 250,'b4')
     makeButton(250, 250,'b5')
    makeButton(350, 250,'b6')
     makeButton(150, 350,'b7')
     makeButton(250, 350,'b8')
     makeButton(350, 350,'b9')

//     // game.add.sprite(0, 0, 'star');

//     game.physics.startSystem(Phaser.Physics.ARCADE);

//     //  A simple background for our game
//     game.add.sprite(0, 0, 'sky');

//     //  The platforms group contains the ground and the 2 ledges we can jump on
//     platforms = game.add.group();

//     //  We will enable physics for any object that is created in this group
//     platforms.enableBody = true;

//     // Here we create the ground.
//     var ground = platforms.create(0, game.world.height - 64, 'ground');

//     //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
//     ground.scale.setTo(2, 2);

//     //  This stops it from falling away when you jump on it
//     ground.body.immovable = true;

//     //  Now let's create two ledges
//     var ledge = platforms.create(400, 400, 'ground');

//     ledge.body.immovable = true;

//     ledge = platforms.create(-150, 250, 'ground');

//     ledge.body.immovable = true;

//     player = game.add.sprite(32, game.world.height - 150, 'dude');

//     //  We need to enable physics on the player
//     game.physics.arcade.enable(player);

//     //  Player physics properties. Give the little guy a slight bounce.
//     player.body.bounce.y = 0.2;
//     player.body.gravity.y = 300;
//     player.body.collideWorldBounds = true;

//     //  Our two animations, walking left and right.
//     player.animations.add('left', [0, 1, 2, 3], 10, true);
//     player.animations.add('right', [5, 6, 7, 8], 10, true);

//     cursors = game.input.keyboard.createCursorKeys();
// 	stars = game.add.group();

//     stars.enableBody = true;

//     //  Here we'll create 12 of them evenly spaced apart
//     for (var i = 0; i < 12; i++)
//     {
//         //  Create a star inside of the 'stars' group
//         var star = stars.create(i * 70, 0, 'star');

//         //  Let gravity do its thing
//         star.body.gravity.y = 6;

//         //  This just gives each star a slightly random bounce value
//         star.body.bounce.y = 0.7 + Math.random() * 0.2;
//     }
}

function update() {
//     var hitPlatform = game.physics.arcade.collide(player, platforms);

//     player.body.velocity.x = 0;

//     if (cursors.left.isDown)
//     {
//         //  Move to the left
//         player.body.velocity.x = -150;

//         player.animations.play('left');
//     }
//     else if (cursors.right.isDown)
//     {
//         //  Move to the right
//         player.body.velocity.x = 150;

//         player.animations.play('right');
//     }
//     else
//     {
//         //  Stand still
//         player.animations.stop();

//         player.frame = 4;
//     }

//     //  Allow the player to jump if they are touching the ground.
//     if (cursors.up.isDown && player.body.touching.down && hitPlatform)
//     {
//         player.body.velocity.y = -350;
//     }
}


function nukeButton() {

    button.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, '- button nuked -', { font: '64px Arial', fill: '#ffffff' });

    text.anchor.set(0.5);

}


function makeButton(x, y, name) {

    var button = game.add.button(x, y, 'dude', click, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    // var text = game.add.bitmapText(x, y + 7, 'star', name, 16);
    // text = game.add.text(x, y, 'x press', { font: '16px Arial', fill: '#ffffff' });

    // text.x += (button.width / 2) - (text.textWidth / 2);

}

function click(button) {

    // fx.play(button.name);
    console.log(button);
    button.pendingDestroy = true;
    text = game.add.text(button.x + 25, button.y + 25, 'x press', { font: '16px Arial', fill: '#ffffff' });


}


function render () {

    game.debug.inputInfo(32, 32);
    game.debug.rectangle(rect, '#ffffff', false); 
    game.debug.rectangle(rect1, '#ffffff', false); 
    game.debug.rectangle(rect2, '#ffffff', false); 

}