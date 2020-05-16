import "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "characters", 325);

        // player properties
        this.scene = scene;
        this.health = 3;
        this.hitDelay = false;
        this.direction = "up";

        // enable physics
        this.scene.physics.world.enable(this);
        
        // add our player to the scene
        this.scene.add.existing(this);

        // scale our player
        this.setScale(4);
        
        this.scene.events.emit("playerCreat", this.health); //* to fix a bug on level 2 where the player's health is not updated. This is listened to in UI.js
    }

    update(cursors) {
        // resetting the velocity to 0 to stop the player from moving if there is no input from the player.
        this.setVelocity(0);
        // check if the up or down key is pressed
        if(cursors.up.isDown) {
            this.direction = "up";
            this.setVelocityY(-150);
        } else if(cursors.down.isDown) {
            this.setVelocityY(150);
            this.direction = "down";
        }

        // check if the left or right key is pressed
        if(cursors.left.isDown) {
            this.setVelocityX(-150);
            this.direction = "left";
        } else if(cursors.right.isDown) {
            this.direction = "right";
            this.setVelocityX(150);
        }
    }

    loseHealth() {
        this.health--;
        this.scene.events.emit("loseHealth", this.health);
        if(this.health === 0) {
            this.scene.loadNextLevel(true);
        }
    }

    enemyCollision(player, enemy) {
        if(!this.hitDelay) {
            this.loseHealth(); 
            this.hitDelay = true;
            this.tint = 0xff0000; 
            
            this.scene.time.addEvent({
                delay: 1200,
                callback: () => {
                    this.hitDelay = false;
                    this.tint = 0xffffff;
                },
                callbackScope: this,
            });
        }
    } 
}