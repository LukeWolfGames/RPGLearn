import Phaser from "phaser";
import config from "./config";
import GameScene from "./scenes/game";
import BootScene from "./scenes/boot";
import UIScene from "./scenes/UI";

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.add("Game", GameScene);
    this.scene.add("UI", UIScene);
    this.scene.start("Boot");
  }
}

window.game = new Game();
window.addEventListener("resize", (event) => {
  window.game.resize(window.innerWidth, window.innerHeight);
});