import Phaser from 'phaser';

export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset, cursors }) {
        super(game, x, y, asset);
        this.anchor.setTo(0.5);
        this.cursors = cursors;

        //  We need to enable physics on the player
        game.physics.arcade.enable(this);

        //  Player physics properties. Give the little guy a slight bounce.
        this.body.bounce.y = 0.2;
        this.body.gravity.y = 300;
        this.body.collideWorldBounds = true;

        this.animations.add('left', [0, 1, 2, 3], 10, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);
    }

    update() {
        this.body.velocity.x = 0;

        if (this.cursors.left.isDown) {
              //  Move to the left
            this.body.velocity.x = -150;

            this.animations.play('left');
        } else if (this.cursors.right.isDown) {
              //  Move to the right
            this.body.velocity.x = 150;

            this.animations.play('right');
        } else {
              //  Stand still
            this.animations.stop();

            this.frame = 4;
        }

          //  Allow the player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.body.touching.down) {
            this.body.velocity.y = -350;
        }
    }
}
