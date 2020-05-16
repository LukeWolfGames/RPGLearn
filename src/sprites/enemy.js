import "phaser";

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, "characters", frame);
        this.scene = scene;
        this.health = 3;

        // enable physics
        this.scene.physics.world.enable(this);
        
        // add our enemy to the scene
        this.scene.add.existing(this);

        // scale our enemy
        this.setScale(4);

        // move our enemy
        this.timeEvent = this.scene.time.addEvent({
            delay: 3000,
            callback: this.move,
            loop: true,
            callbackScope: this,
        });
    }

    loseHealth() {
        this.health--;
        this.tint = 0xff0000;
        if(this.health === 0) {
            this.timeEvent.reset();
            this.destroy();
        } else {
            this.scene.time.addEvent({
                delay: 3000,
                callback: () => {
                    this.tint = 0xffffff;
                },
            });
        }
    }

    move () {
        if(this.health > 0) {
            const randNumber = Math.floor(Math.random() * 4 + 1);
            switch (randNumber) {
                case 1:
                    this.setVelocityX(100);
                    break;
                case 2:
                    this.setVelocityX(-100);
                    break;
                case 3:
                    this.setVelocityY(100);
                    break;
                case 4:
                    this.setVelocityY(-100);
                    break;
                default:
                    this.setVelocityX(100);
                    break;
            }
    
            // move our enemy        
            this.scene.time.addEvent({
                    delay: 500,
                    callback: () => {
                        this.setVelocity(0);
                    },
                    callbackScope: this,
                });
        }
    }
}