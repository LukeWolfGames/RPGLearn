import "phaser";

export default class Portal extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "portal");
        this.scene = scene;

        // enable physics
        this.scene.physics.world.enable(this);
        
        // add our portal to the scene
        this.scene.add.existing(this);
    }
}