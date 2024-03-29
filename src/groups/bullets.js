import "phaser";

export default class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(world, scene, children, config) {
        super(world, scene);

        this.createMultiple({
            frameQuantity: 5,
            key: "bullet",
            active: false,
            visible: false
        });
    } 

    enemyCollision(bullet, enemy) {
        bullet.active = false;
        bullet.visible = false;
        bullet.disableBody();
        enemy.loseHealth();
    }

    fireBullet(x, y, direction) {
        const bullet = this.getFirstDead(false);
        if(bullet) {
            bullet.enableBody(true);
            bullet.active = true;
            bullet.visible = true;
            bullet.setPosition(x, y);
            bullet.setScale(0.1);

            switch(direction) {
                case "up":
                    bullet.setVelocityY(-300);
                    break;
                case "down":
                    bullet.setVelocityY(300);
                    break;
                case "left":
                    bullet.setVelocityX(-300);
                    break;
                case "right":
                    bullet.setVelocityX(300);
                    break;
                default:
                    bullet.setVelocityY(300);
                
            }

            this.scene.time.addEvent({
                delay: 1500,
                callback: () => {
                    bullet.disableBody();
                    bullet.active = false;
                    bullet.visible = false;
                    bullet.setVelocity(0);
                },
            });
        }
    }
}