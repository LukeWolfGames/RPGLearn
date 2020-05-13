import "phaser";
import Enemy from "../sprites/enemy";

export default class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(world, scene, children, config) {
        super(world, scene);
        this.spriteFrames = [0, 1, 54, 55, 108, 109, 162, 163];

        // create our enemies
        this.createEnemies(scene, children);
    } 

    createEnemies(scene, children) {
        children.forEach(enemy => {
            const randNumber = Math.floor(Math.random() * this.spriteFrames.length - 1);
            enemy = new Enemy(scene, enemy.x, enemy.y, this.spriteFrames[randNumber]);
            this.add(enemy);
        });
    }
}