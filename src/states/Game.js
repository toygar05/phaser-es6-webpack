/* globals __DEV__ */
import Phaser from 'phaser';

// import Mushroom from '../sprites/Mushroom';
import Dude from '../sprites/Dude';

export default class extends Phaser.State {
    init() {}
    preload() {}

    create() {
        const bannerText = 'Phaser + ES6 + Webpack';
        let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText);
        let cursors = game.input.keyboard.createCursorKeys();

        banner.font = 'Bangers';
        banner.padding.set(10, 16);
        banner.fontSize = 40;
        banner.fill = '#77BFA3';
        banner.smoothed = false;
        banner.anchor.setTo(0.5);

        this.mushroom = new Dude({
            game: this,
            x: this.world.centerX,
            y: this.world.centerY,
            asset: 'dude',
            cursors: cursors,
        });

        this.game.add.existing(this.mushroom);
    }

    render() {
        if (__DEV__) {
            this.game.debug.spriteInfo(this.mushroom, 32, 32);
        }
    }
}
