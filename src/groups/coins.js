import "phaser";

export default class Coins extends Phaser.Physics.Arcade.StaticGroup {
    constructor(world, scene, children, config) {
        super(world, scene);

        children.forEach(coin => {
            coin.setScale(0.2);
            this.add(coin);
            coin.body.updateFromGameObject();
        });
    } 

    collectCoin(player, coin) {
        console.log("Collected coin!");
        this.remove(coin, true, true);
        
        // dispatch an event
        this.scene.events.emit("coinCollected");
    }
}