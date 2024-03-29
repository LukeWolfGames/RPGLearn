import "phaser";

export default class BootScene extends Phaser.Scene {
    constructor (key) {
        super(key);
    }

    preload () {
        
        this.levels = {
            1: "level1",
            2: "level2"
        }

        // load in the tileamp
        this.load.tilemapTiledJSON("level1", "src/assets/level1.json");
        this.load.tilemapTiledJSON("level2", "src/assets/level2.json");
        
        // load in the spritesheet
        this.load.spritesheet("RPGpack_sheet", "src/assets/RPGpack_sheet.png", { frameWidth: 64, frameHeight: 64});

        // load in our character spritesheet
        this.load.spritesheet("characters", "src/assets/roguelikeChar_transparent.png", { frameWidth: 17, frameHeight: 17});

        // load our portal sprite
        this.load.image("portal", "src/assets/raft.png");

        // load in our coin sprite
        this.load.image("coin", "src/assets/coin_01.png");

        // load in our bullet sprite
        this.load.image("bullet", "src/assets/ballBlack_04.png");

    }

    create () {
        this.scene.start("Game", { level: 1, newGame: true, levels: this.levels });
    }
}