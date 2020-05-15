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
}