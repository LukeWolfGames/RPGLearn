**DEVELOP A TOP-DOWN ACTION RPG**
**INSTRUCTOR: UNKNOWN**

# 1 - Introduction
We will be making a top-down Phaser 3 RPG game. We will focusing on:
1. How we can handle player inputs and move our player around the map.
2. Handling collision around the player and game objects around the game.
3. Picking up and collecting items
4. Shooting enemies.
5. Damage to the player on collision with enemies.
6. Transitioning between Phaser scenes with multiple levels and transitioning back.
7. Passing data between scenes so the player can keep the same state between levels.
8. How to create a map with the Tiled Map editor.
9. How to export tiled data out and load it within Phaser.
10. Using Babble so we can use newer javascript features.
11. Using Webpack so we can separate our code into multiple files and then have Webpack bundle all of our code into one built file.

# 2 - Creating a Level in Tiled - Part 1
1. Installing Tiled Map Editor.
2. App sprites to level.
3. Add objects to level.

Download tiled here: https://www.mapeditor.org/

You can edit your tilemaps and place images.
You can use it to import meta data to your levels.
You can export to JSON object where you can import into your Phaser game.

Take a look at the documentation that will show you how to get started with Tiled and all of the tools inside the application.

To start a new Tiled project for our lesson:
1. Click New Map
2. Select orientation "Orthogonal
3. Tile layer Format: CSV
4. Tile render order: Right down - so it's going to start in the right corner and then render it down.
5. Map size - Fixed: Width: 10 tiles, Height: 10 tiles - This will determine how many tiles appear in your map.
6. Tile size: Width: 64px, Height: 64px - Remember to consider this for your spritesheets.
7. Check to make sure that the total size is 640 x 640 pixels.
8. Click Save As
9. Name your level.
10. It will then take you into Tiled.

**Note:** Refer to video to learn about how all of the tools work.

Along the top is the toolbar for inserting tiles and objects.
The left side is your properties of the map and this will change depending on if you're looking at an individual object or if you're looking at individual layers.
On the right side, there are layers. Tiled supports multiple layers. 
For our project, we are going to have the following layers:
1. Background layer.
2. Blocked layer

The Blocked layer are going to be for sprites that are going to be a collidable object that will block the player asd they move around the level.

The reason why we use the layers, when we import them into Phaser, we can treat each layer as a different sprite group and that way we can easily add colliders between the player and the blocked objects.

In the bottom right corner are the new tilesets. To add one:
1. Download the RPGpack_sheet from the course content.
2. Click on New Tilset...
3. Open the RPGpack_sheet.png file.
4. Then specify the appropriate tile dimensions and the appropriate margin and spacing. For our tilsheet, it is 64x64 and there is margin or spacing.
5. Leave the name as RPGpack_sheet - the name is important because this is the key we need to specify in Phaser when we import our JSON object that has our tilemap data in it.
6. Lastly check the Embed in map option - this will embed the spritesheet inside our tilesmap and that way it will be part of the exports when we load the data into our game in Phaser.

Each tile will be created based on the properties that you gave it when importing it, so you should be able to cleanly see the individual tiles cut properly in the bottom right corner.

First we are going to add a new layer and call it "background".
then we are going to choose a grass tile and cover all tiles with it.
Then we are going to create another layer and call it "Blocked".
We are going to take some of these sprites and we are going to add them to the area. These are going to be obstacles for our player in our game.

**Note:** Use the lock to lock a layer just to make sure you don't accidentally edit the wrong layer.
You can also toggle the eye to change the visibility of all objects on that layer.
You can also hold CRTL and click on the tileset to select multiple tiles if a particular object is bigger than just one tile, and then you can just place that on the map as one object.

Next we are going to look at adding objects to the game.
Objects allow for us to specify positions of where we want to place objects in our game.
What we can do in Phaser is when we load in our object layer then we can associate a sprite with it and we can automatically use the position from the meta data that is pulled in to place that sprite where we want it in our game.

So to get started with layers, the first thing to do is click on the "New" button then "object layer".
The first thing we notice is that our object tool set has changed suitable for the object layer.
You can place objects in a few different ways. The first one is using the insert tile tool.
This allows you to use a sprite as a representation of your object.
The one thing to note with object is that they will actually appear when you click on your map.
So if you need to move your object around, you can use the "select object" tool and you can move it around.
The second option is you can specify the X and Y co-ordinates to position the object.
Some of the other tools are the rectangle, the point, the elipse or the polygon tools to represent the objects you want to place in your game.

So we are going to go ahead and delete the object layer and add a new object layer and call it "Player".
For this we are just going to use a point and place it down in the map.
We are then going to give it a name under properties.
The type will also be the same as name - you can use the type field to differeniate between objects.
Then when we can load that meta data into Phaser we can then get our objects based on that type.

You can also add custom properties to your objects. 
They can be exported as JSON objects to be imported into Phaser.
You can add a new property as a sprite such as a string called "enemy1" if you had multiple sprites for enemies.
That way you can use different sprites based on this property here.

Add few more object layers to your game:
1. Player (already made) 
2. Enemies
3. Coins
4. Portal

So you can easily put all of these objects into one layer and then use the "type" field to differentiate between them.
In Phaser 3 they have a nice import from layer functions, so we can use that to easily create our groups of objects based on these individual layers so we don't have to loop through our objects.

For the portal object layer, add a point object and call it "Portal" - same with the type..
Do the same with the other object layers and place them around the map.

**Note:** You can copy points with CRTL + C and CRTL + V to paste.

Save your level.
Finally, once you have finished go to File >> Export.
Make sure to save it as a JSON file type.

**Note:** If you are going to use the maps you create in your game, make sure you pay attention to what you have named your layers and your sprite sheets because you will need those keys to load them into Phaser.

# 3 - Creating a Level in Tiled - Part 2
Spend some time creating level 2 levels with the previous lesson's advice.


# 4 - Setting Up Our Game - Part 1
1. Using Webpack and Babel with your project
2. Using NOPM and NodeJS with your project.
3. Installing NodJS and required packages.

**TEMPLATE**
You can use the Phaser 3 template on github put together by Photon Storm:
https://github.com/photonstorm/phaser3-project-template

1. Click on Clone or Download and then copy the repository link.
2. Then inside VS code, open a terminal and enter:

        node -v

This will tell you the version of node.js installed. 

**Note:** If you do not have node.js installed, download it here:

    https://nodejs.org/en/

It is recommended that you get the LTS version.

3. Then inside the VS code terminal type the following:

        git clone https://github.com/photonstorm/phaser3-project-template.git

This will copy all of the files from the repository into your local directory for the project.


4. Change directory to the template folder:

        cd phaser3-project-template/

5. Then you need to run the NPM install command which will look for a package.json file located in your current directory, then in that file it will list all of the dependencies that are needed in the project in order to run properly.

        npm install

These packages are collected from other repositories and packages from other locations, you can check these in the package.json

6. Once it completes, you will see any packages that are running, run the auto fix if there are any volunerabilities.

7. Look in your directory using the following command:

        ls

8. To run the project:

        npm run start

This will start the server for you to run your game.

9. Check the console using F12 to check the version of Phaser that is running, you should see the Phaser logo bouncing up and down on the screen.

**SUMMARY:**
1. For our project, we are using NPM to install the required dependencies, and these are all listed in the package.json file
2. You can also use NPM to create your packages. For example, you could create your own Phaser Plugin, and then use NPM to distribute it.

# 5 - Setting Up Our Game - Part 2
1. Use webpack to split your code into multiple files.
2. Use Webpack to import code
3. Using ES6 Classes.

We are now going to restructure our project template.
We are going to break the config and scenes into their own files.
This is going to make it easier to manage everything as our game gets bigger.
We are also going to make use of the import and export functions that webpack offers.

Make a new file under assets for "config.js".
In that file the first thing you want to do is write:

<script>

import "phaser";

</script>

Import allows us to use JavacSript from another file without having to include it like we normally would in a regular HTML file.
By importing Phaser, we are telling the game to allow me to use the Phaser objects from the phaser.main.js file.
Now we are going to take our config variable out of our index.js and paste it in config.js file.
We are also going to modify it a little bit.

The first thing we are going to do is an empty export object:

<script>

export default {

}

</script>

This allows us to specify JavaScript in this file that allows us to export it to another file so by doing this in our config object, we are going to be able to come back to index.js and we will be able to import it there:

<script>

import config from "./config";

</script>

Copy most of the code we have in config and paste it inside export default {} and delete our config variable.

First, we are going to set up our config object inside the export.
We are going to add a couple of things:

        pixelArt: true

We are going to tel Phaser that we are going to use pixel art in our game, so when we scale up our game, it will look crisp instead of blury when rendering it.

        roundPixels: true

This means that during rendering, it will round it to an integar number instead of a float, and it will help with the pixel art looking crisp.

The last property we are going to add is:

<script>

physics: {
        default: "arcade",
        arcade: {
                gravity: { y: 0 }
        }
        debug: true
}

</script>

When the velocity is calculated with the physics, there is no gravity for the y coordinates.
The debug property is going to show the bounding boxes around the sprites.

config.js should look like this now:

<script>

import "phaser";

export default {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    }
  }
}

</script>

In index.js, we are going to move our scene logic to a different file:
Create another folder under src called "Scenes" and then add "game.js" to it.

inside game.js add the following code:

<script>

import "phaser";

export default class GameScene extends Phaser.Scene {

}

</script>

We are basically saying that GameScene is a child of Phaser.Scene so when we load it inside Phaser, it is going to recongise it as a Phaser scene and we can load it in our scene array.

Since we are extending the Phaser scene class, the first thing we are going to do is define a constructor:

<script>

import "phaser";

export default class GameScene extends Phaser.Scene {
        constructor (key) {
                super(key);
        }
}

</script>

Any time we extend a class, we have to call super so that way it passes on the arguments to the parent class first before it does anything else inside the child class, effectively, it goes and talks to the parent constructor and gets those values and adds them to the child class.

Then we are going to go ahead and define our preload() and create() methods:

<script>

import "phaser";

export default class GameScene extends Phaser.Scene {
        constructor (key) {
                super(key);
        }

        preload() {}

        create() {}  
}

</script>

Now go back to index.js and copy the code for our preload() and create() methods and paste them inside the curly braces {}.

<script>

import "phaser";

        export default class GameScene extends Phaser.Scene {
        constructor (key) {
                super(key);
        }

        preload () {
                this.load.image("logo", "src/assets/logo.png");
        }

        create () {
                this.logo  = this.add.image(400, 150, "logo");
        }
        }

</script>

Now remove the code you just pasted from index.js.
Now import the GameScene into index.js.
Define a new class called Game which will extend the Phaser.Game.
Make a Constructor and then in super() parse the config object and add the scenes of the game before starting the game.
Then create a game window.
It should look like this:

<script>

import Phaser from "phaser";
import config from "./config";
import GameScene from "./scenes/game";

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add("Game", GameScene);
    this.scene.start("Game");
  }
}

window.game = new Game();

</script>

Now, when you run the code, it should show the logo without it bouncing up and down but you can see that it is using the new customised template.

**SUMMARY:**
1. Not all browsers support the newest JavaScript features
2. If you plan to use these features, you can use Babel to compile your code into JavaScript code that is compatible with most browsers.

# 6 - Loading Our Level in Phaser
1. Loading a Tiled level in Phaser.
2. Creating the background and blocked layers in our game.

First, we are going to delete the code in our preload and create method inside our game.js.
Then we need to load in our data from our tilemap.
To do that, we need to first load in the tile map, then load in the sprite sheet.

<script>

    preload () {
        // load in the tileamp
        this.load.tilemapTiledJSON("level1", "src/assets/level1.json");
        // load in the spritesheet
        this.load.spritesheet("RPGpack_sheet", "src/assets/RPGpack_sheet.png", { frameWidth: 64, frameHeight: 64});
    }

</script>

**Note:** The aboven needs to be in the assets folder provided by the phaser 3 project template under src.

Now that we have loaded the tilemap into our memory, we then need to create the tilemap itself, add the tilset that is going to use the spritesheet, then create each of our layers:

<script>

    createMap() {
        // create the tilemap
        this.map = this.make.tilemap({ key: "level1"});
        // add tileset image
        this.tiles = this.map.addTilesetImage("RPGpack_sheet");
        // create our layers
        this.backgroundLayer = this.map.createStaticLayer("Background", this.tiles, 0, 0);
        this.blockedLayer = this.map.createStaticLayer("Blocked", this.tiles); 
    }

</script>

You should be able to see the tilemap in our game after running the code.
Each of the layers become visible as you add them to the code.

**CLEAN UP CODE**
First we are going to create a method called createMap() and then call that function from our create() function. This makes the code more readable and easier to maintain as we add more and more logic to our game:

<script>
    create () {
        // create our tilemap
        this.createMap();

    }

    createMap() {
        // create the tilemap
        this.map = this.make.tilemap({ key: "level1"});
        // add tileset image
        this.tiles = this.map.addTilesetImage("RPGpack_sheet");
        // create our layers
        this.backgroundLayer = this.map.createStaticLayer("Background", this.tiles, 0, 0);
        this.blockedLayer = this.map.createStaticLayer("Blocked", this.tiles); 
    }

</script>

**BOOT SCENE**
We need to create a boot scene because as our game gets bigger, it will take longer to load and all the player will be seeing while the game is loading is a black screen. We need to replace that black screen with something that tells the player that the game is loading. To start doing this, we need to create a Boot scene then move to the game scene once the game has finished loading.

So create boot.js under the scenes folder.
Then copy all the code in our game scene and paste it into the boot.js file.
Change the class GameScene to BootScene.
Then delete the code in the create method inside the boot.js file.
Delete the preload() code in the game.js file
Call to start the Game scene in the create() method in the boot.js file.

So the boot.js file should look like this:

<script>

        import "phaser";

        export default class BootScene extends Phaser.Scene {
        constructor (key) {
                super(key);
        }

        preload () {
                // load in the tileamp
                this.load.tilemapTiledJSON("level1", "src/assets/level1.json");
                // load in the spritesheet
                this.load.spritesheet("RPGpack_sheet", "src/assets/RPGpack_sheet.png", { frameWidth: 64, frameHeight: 64});
        }

        create () {
                this.scene.start("Game");
        }
        }

</script>

And the game.js file should look like this:

<script>
        import "phaser";

export default class GameScene extends Phaser.Scene {
    constructor (key) {
        super(key);
    }

    preload () {

    }

    create () {
        // create our tilemap
        this.createMap();

    }

    createMap() {
        // create the tilemap
        this.map = this.make.tilemap({ key: "level1"});
        // add tileset image
        this.tiles = this.map.addTilesetImage("RPGpack_sheet");
        // create our layers
        this.backgroundLayer = this.map.createStaticLayer("Background", this.tiles, 0, 0);
        this.blockedLayer = this.map.createStaticLayer("Blocked", this.tiles); 
    }
}
</script>

Now to use our boot scene, we need to import it in our index.js file:

<script>

        import Phaser from "phaser";
        import config from "./config";
        import GameScene from "./scenes/game";
        import BootScene from "./scenes/boot";

        class Game extends Phaser.Game {
        constructor () {
        super(config);
        this.scene.add("Boot", BootScene);
        this.scene.add("Game", GameScene);
        this.scene.start("Boot");
        }
        }

        window.game = new Game();

</script>

**SUMMARY:**
1. To Load your exported file from Tiled you can use the "tilemapTiledJSON" method.
2. This method takes 2 arguments, the key that will be bound to the tilemap and the path to the JSON file.

# 7 - Scaling
1. Listening for window resize events.
2. Scaling your game in Phaser.

We are going to update our game so instead of using a fixed width and height, it's actually going to use the full window width and height of the browser to display the game.
Then we are going to add in logic to handle the game resizing so it can scale across all devices.

in the config file, change the width and height values:

<script>

import "phaser";

        export default {
        type: Phaser.AUTO,
        parent: "phaser-example",
        width: window.innerWidth,
        height: window.innerHeight,
        pixelArt: true,
        roundPixels: true,
        physics: {
        default: "arcade",
        arcade: {
        gravity: { y: 0 },
        debug: true,
        }
        }
        }

</script>

This now considers the browser's window and the inner width and height of the window that is displayed to the user.
This does not refresh automatically, though. We will get to that.

in the index.html file, add a margin:

<script>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
  </body>
</html>


</script>

Now, it will use the full width and height.
Now to handle the dynamic resizing, let's go into our index.js and add an event listener to the window code so it can parse in a new width and height when the browser window is resized:

<script>

import Phaser from "phaser";
import config from "./config";
import GameScene from "./scenes/game";
import BootScene from "./scenes/boot";

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.add("Game", GameScene);
    this.scene.start("Boot");
  }
}

window.game = new Game();
window.addEventListener("resize", (event) => {
  window.game.resize(window.innerWidth, window.innerHeight)
});

</script>

So now, as you resize it, it will now use the full width and height.
However, the part of the game that is displayed is not updating because the Phaser scene camera is set to only display a specific portion of the game and by default it is going to use the config that we parsed to it but because we updated it, the camera is not aware of these changes.
So back in our game scene, we are going to add some logic to listen to the resize event so the camera updates.

<script>\

    create () {
        // listen for the resize event
        this.events.on("resize", this.resize, this);
        // create our tilemap
        this.createMap();

    }

    resize (width, height) {
        if (width === undefined) {
            width = this.sys.game.config.width;
        }
        if (height === undefined) {
            height = this.sys.game.config.height;
        }
        this.cameras.resize(width, height);
    }


</script>

As a back up we also added if statements for the width and height if they do not get parsed to the method, we are just automatically going to pull it from the updated config object.

Now the game will dynamically scale depending on the browser size.

**SUMMARY:**
1. Phaser scenes can listen for a resize event.
2. Yoiu can use this event to resize your camera.
3. This allows your game to work on any screen.

# 8 - Adding the Player
1. Add the player to your game
2. Listen for player input and move the player
3. Update the camera to follow the player.
4. Add collisions between the player and the blocked layer.

Let's load our player into the game.
Observe the spritesheet "roguelikeChar_transparent.png".
Specify the frameWidth and frameheight of the character you want from the sprite sheet.
So now, add it to the preload():

<script>
    preload () {
        // load in the tileamp
        this.load.tilemapTiledJSON("level1", "src/assets/level1.json");
        // load in the spritesheet
        this.load.spritesheet("RPGpack_sheet", "src/assets/RPGpack_sheet.png", { frameWidth: 64, frameHeight: 64});
        // load in our character spritesheet
        this.load.spritesheet("characters", "src/assets/roguelikeChar_transparent.png", { frameWidth: 17, frameHeight: 17});
    }

</script>

Now before we start creating and adding the player's logic to the game, we are going to create a new file for our player only.
Add a folder for "sprites".
Then add a file called "player.js"

Remember, to add import "phaser"; at the top and define the class.
So since this is extending an existing class ,we need a constructor.
The first thing we need is super(), and inside the parametres for super(), then we need to pass the scene where our game object is being adde, the x and y co-ordinates that we are going to be using to create the player as well as the sprite sheet "characters" and frame number of the frame number that we want to load in. That is 325.
In our constructor we know that we are going to need to reference the current game scene, the x and y of the player.
We add this.scene to the scene variable so we can parse that in once instead for each individual method.
Next, we need to enable physics on our player and add our player to the scene.

<script>

import "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "characters", 325);
        this.scene = scene;

        // enable physics
        this.scene.physics.world.enable(this);
        
        // add our player to the scene
        this.scene.add.existing(this);

        // scale our player
        this.setScale(4);
    }

</script>

In game.js we need to import our player, so add it to the import list:

<script>

import "phaser";
import Player from "../sprites/player";

</script>

../ goes up a directory.
Now, add the player to the game scene.
We also need to sort out the camera to follow, the player movement and the collisions:

<script>

    create() {
        // listen for the resize event
        this.events.on("resize", this.resize, this);

        // listen for player input
        this.cursors = this.input.keyboard.createCursorKeys();

        // create our tilemap
        this.createMap();

        // create our player
        this.createPlayer();

        // add collisions
        this.addCollisions();

        // update our camera
        this.cameras.main.startFollow(this.player);

    }

    update() {
        this.player.update(this.cursors);
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.blockedLayer);
    }

    createPlayer() {
        this.map.findObject("Player", (obj) => {
            if(obj.type === "StartingPosition") {
                this.player = new Player(this, obj.x, obj.y);
            }
        });
    }
</script>

this.map.findObject will search for our tilemap meta data for the object point that was added back when we created the level in tiled. We then run an if() statement to check the type variable that was added back in tiled to see what that is, so we can pick the correct starting point correctly and place the player there as opposed to the portal where the bridge is.

The camera follow functions nees to be after we create the player so we can move the camera appropriately to the player's position as opposed to the top left corner of the map.

We need to add collisions after the player is created so we can define the objects that are needed for collision.

Further on collision; we needed to also specify what is determined as a collidable object when we create our layers further down:

<script>

    createMap() {
        // create the tilemap
        this.map = this.make.tilemap({ key: "level1"});

        // add tileset image
        this.tiles = this.map.addTilesetImage("RPGpack_sheet");

        // create our layers
        this.backgroundLayer = this.map.createStaticLayer("Background", this.tiles, 0, 0);
        this.blockedLayer = this.map.createStaticLayer("Blocked", this.tiles); 
        this.blockedLayer.setCollisionByExclusion([-1]);
    }
}

</script>

We also defined the cursor keys for the player before we added the player, but the functionality of this is constantly going to get checked by the update() function and the set up in player.js as per below.
Update(cursors) is part of the Player class.
We want cursors as a parameter so that we only need to write it once when called (see above for the call).

<script>

    update(cursors) {
        // resetting the velocity to 0 to stop the player from moving if there is no input from the player.
        this.setVelocity(0);
        // check if the up or down key is pressed
        if(cursors.up.isDown) {
            this.setVelocityY(-150);
        } else if(cursors.down.isDown) {
            this.setVelocityY(150);

        }

        // check if the left or right key is pressed
        if(cursors.left.isDown) {
            this.setVelocityX(-150);
        } else if(cursors.right.isDown) {
            this.setVelocityX(150);
        }
    }

</script>

Now, the game will listen out for player input and send the player in the appropriate direction, including moving diagonally when up and left are pressed, for example.
Remember to initially set the velocity to 0 to make sure the player stops moving when there is no input from the player otherwise it will just keep going.

**SUMMARY:**
1. You can use Phaser's "crateCursorKeys" method to create bindings to the arrow keys
2. When usng Phaser Arcade Physics you can move Arcade Sprites by setting the velocity
3. If you don't reset the velocity the Game Object will continue to move.

# 9 - Moving Between Maps
1. Loading multiple levels in Phaser.
2. Pass data between scenes.
3. Transition between scenes.

Create the portal by adding it first to the create() method inside game.js:

<script>

    create() {

        // listen for the resize event
        this.events.on("resize", this.resize, this);

        // listen for player input
        this.cursors = this.input.keyboard.createCursorKeys();

        // create our tilemap
        this.createMap();

        // create our player
        this.createPlayer();

        // creating the portal
        this.createPortal();

        // add collisions
        this.addCollisions();

        // update our camera
        this.cameras.main.startFollow(this.player);

    }

</script>

Then adding it's function. We basically copied and pasted and modified the createPlayer() method.
What you will see here is data that we will be using in our init() function that we will make later. 
We also need to make sure that the portal is going to be off the screen but still possible for the player to overlap.

<script>

    createPortal() {
        this.map.findObject("Portal", (obj) => {
            if(this._LEVEL === 1) {
                this.portal = new Portal(this, obj.x, obj.y - 68);
            } else if(this._LEVEL === 2) {
                this.portal = new Portal(this, obj.x, obj.y + 70);
            }
        });
    }

</script>

Also created a new class called Portal.
Created a new sprite file called portal.js
Copied the player class over and made modifications to that to suit.
The class looks like this:

<script>
        
        import "phaser";

        export default class Portal extends Phaser.Physics.Arcade.Sprite {
                constructor(scene, x, y) {
                        super(scene, x, y, "portal");
                        this.scene = scene;

                        // enable physics
                        this.scene.physics.world.enable(this);
                        
                        // add our player to the scene
                        this.scene.add.existing(this);
                }
        }

</script>

Remember to import the new portal class into game.js:

<script>

        import "phaser";
        import Player from "../sprites/player";
        import Portal from "../sprites/portal";

</script>

**Note:** For debuggin purposes, you can make the player spawn over near the StartingPositionPortal which is where the player would appear if he was to come back the other way.

Give the raft some distance away from the edge of the game area but still accessible by the player's bounding box.

You can remove the black space outside of the level area by adding this code to the top of createMap() method inside game.js:

<script>

        // add water background
        this.add.tileSprite(0, 0, 8000, 8000, "RPGpack_sheet", 31);

</script>

Now you will be abel to see that the water tile from the sprite sheet was selected and placed into a tiledSprite and covering the whole background of the visual area.
Note, that this code needs to be placed first before createMap() does anything else, so it is below all other objects.

Now to add collision between the player and the portal.
We are going to check for a physics overlap between the two objects.
This is going to check to see if the player's bounding box is going to overlap with the portal's bounding box, and if it does, we can call a function:

<script>

    addCollisions() {
        this.physics.add.collider(this.player, this.blockedLayer);
        this.physics.add.overlap(this.player, this.portal, this.loadNextLevel.bind(this));
    }

</script>

The first two parametres are for the two objects that need to be overlapping and the third is the function to be called.
We will bind the context to the scene for this function.
We need to be able to go to the next level from here.

But first we need to consider that instead of creating a game scene file for every single level, we need to create an object so we can use the existing code for our game scene on other levels.

Inside boot.js, add the following:

<script>

        create () {
                this.scene.start("Game", { level: 1, newGame: true, levels: this.levels });
    }

</script>

These are the properties that we are going to be needing to move onto the next level whilst still using the same game.js code.

We need to store this data inside init(data) {} in our game.js file.
Just replace the empty preload() at the top with this.
In this method we will receive that object that we parse to the scene called data.
If you run console.log(data) you will see the data that gets passed.
Remember, init() function must always be at the top as the first functin that Phaser runs. It stands for initialise after all.
We store the data into the following variables as well.
We add a switch for the camera transitioning effect that we plan to add later on anyway:

<script>
        init(data) {
                console.log(data);
                this._LEVEL = data.level;
                this._LEVELS = data.levels;
                this._NEWGAME = data.newGame;

                this.loadingLevel = false;
        }
</script>

Let's add the second level to our game.
First load the level2.json file to boot.js.
We also created this.levels {} object to store the level1 and level2 data inside. 
For each and every level that is loaded into memory from a .json object using TILED, we need to make sure that they are in this list and numbered accordingly so that we can use this later much easier when portaling the player between these levels.

<script>

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

    }

</script>

When the player starts, we also need to check the level:

<script>

    createPlayer() {
        this.map.findObject("Player", (obj) => {
            if(this._NEWGAME && this._LEVEL === 1) {
                if(obj.type === "StartingPosition") {
                    this.player = new Player(this, obj.x, obj.y);
                }
            } else {
                this.player = new Player(this, obj.x, obj.y);
            }
        });
    }

</script>

So we create the player again on the next level, so we need to check to see what level the player is on and select the correct starting position for that level.
We simply pick the object using the this.map.findObject("Name", (obj) =>) code to pick the player and check the level value and starting position.

Now, when we call loadNextLevel() method, we need to check what level we are on and what portal is being used to go to the right area.
Additionally, we also called this.scene.restart along with a number of parameters to make sure that the right area is loaded for the player.
The camera effect is just a transition. 

<script>

    loadNextLevel() {  
        if(!this.loadingLevel) {
            this.cameras.main.fade(500, 0, 0, 0);
            this.cameras.main.on("camerafadeoutcomplete", () => {
                if(this._LEVEL === 1) {
                    this.scene.restart({ level: 2, levels: this._LEVELS, newGame: false });
                } else if(this._LEVEL === 2) {
                    this.scene.restart({ level: 1, levels: this._LEVELS, newGame: false });
                }
            });
        }
        this.loadingLevel = true;
    }

</script>

So what this is doing is checking to see if this.loadingLevel is false, if it is, start a transition effect.
The transition effect fades to black.
At the end of the transition effect we then check what level we are currently on and then move to the appropriate level using the data that we stored in init().

The this.loadingLevel gets set to true when loadNextLevel() is called and is reset when init() runs again.

**Note:** Remember we can always pass data into the next level when using this.scene.restart({}) and use the object to carry those values over.

**SUMMARY:**

**PASSING DATA BETWEEN SCENES**
1. When you start or restart a scene you can pass data to that scene
2. This data is passed as an object and it allows for you to keep track of your game state between scenes.
3. Example: 

<script>
        this.scene.start("Game", { level: 1, newGame: true, levels: this.levels });
</script>

# 10 - Collecting Coins
1. Making sprites interactive
2. Listening to scene events
3. Running parallel scenes

Let's load in our coin sprite inside boot.js:

<script>
    this.load.image("coin", "src/assets/coin_01.png");
</script>

Now in the create() method under game.js, we are going to add our logic for creating the coins.
In our tilemap, all of our coin collectables are objects on a layer called coins.
Phaser has a built in method that allows us to specify a particular object layer and a particular object that we want to load and it will create a sprite object for each of these objects it finds.
To do that, we use this.map.createFromObjects:

<script>

    create() {

        // ...

        // creating the coins
        this.coins = this.map.createFromObjects("Coins", "Coin", { key: "coin" });
        this.coinsGroup = new Coins(this.physics.world, this, this.coins);

        //...

    }

</script>

this.map.createFromObjects("Pass the coins object layer we created in tiled", "We pass the object name that we are looking for, so Coin", "Then the last argument is the config of the sprite we are creating, it's going to have a property of "key" and then set it to the "coin" sprite.). And we store this in a property called coins:

<script>

    this.coins = this.map.createFromObjects("Coins", "Coin", { key: "coin" });
    
</script>

Now, we are going to create a coins group, and we are going to use that group and put all of these coin objects in to that group.
By using a group, we can check for collisions against the group instead of each object individually.

Make a new folder under "src" and call it "groups", then a file called "coins.js"
Copy the code from "portal.js" into the new coins.js file.
Then clean it up so that we can use it for coins.
First, change the name of class to Coins.
Then change the class it's extending to Phaser.Physics.Arcade.StaticGroup.
For the constructor, we need to pass the world, scene, children and config properties for this.
we need to use super to pass the world and scene properties from the constructor.

<script>
    import "phaser";

    export default class Coins extends Phaser.Physics.Arcade.StaticGroup {
        constructor(world, scene, children, config) {
            super(world, scene);
        }

</script>

Now, we are going togo back to our game scene and import our coins groups at the top of the game.js file where all the other imports are:

<script>

    import "phaser";
    import Player from "../sprites/player";
    import Portal from "../sprites/portal";
    import Coins from "../groups/coins";

</script>

Then under create() and below this.coins, we are going to do this:

<script>

    this.coinsGroup = new Coins(this.physics.world, this, this.coins);

</script>

So here: new Coins(the physics type thate it is, the scene that it is in, and what we are adding as the children for the group. In this case, it is the objects of this.coins we created before);

Now back in our Coins class, we are going to make room for the children of this group to be added:

<script>

        children.forEach(coin => {
            coin.setScale(0.2);
            this.add(coin);
            coin.body.updateFromGameObject();
        });

</script>

So for each child of this class, we are going to call it "coin", then for each coin we are going to set the scale to 0.2, for each coin; what we are adding to the children in the scene (this); and for each coin; we are updating the body from the game object, so that the bounding box is also at an appropriate scale, because this is a static group we need to update the bounding box after scaling it.

Now, we are going to allow the player to collect the coins:

First in game.js, we want to add a collision method.
The collision meethod is going to be between the player, the specific coin he is overlapping, and then we are going to use the ovelap method to call a function that we will make inside our coin class later:

<script>

    this.physics.add.overlap(this.player, this.coinsGroup, this.coinsGroup.collectCoin.bind(this.coinsGroup)); 

</script>


this.physics.add.overlap(Testing object1 to overlap with, object 2, the function (or callback) that we are calling when this overlap happens. In this case we are going to dig into the coinsGroup collectCoin function, and we bind it so that javaScript understands the context you are calling this function).

Then in coins.js, we are going to create that function:

<script>

    collectCoin(player, coin) {
            console.log("Collected coin!");
            this.remove(coin, true, true);
    }

</script>

Upon calling the functin we are passing two parametres of the objects that are overlapping and that is the player and the coin, then for this, we log a message to the console for debugging then we remove the coin from the game, remove it from the scene, and then destroy it

this.remove(the object we want to remov within context, remove the picked objectfrom the scene, destroy the object all together).

Now we want to add some text to the game, so the player can keep track of the score.
We could just add the some text object to the game scene and have it follow the screen around.
But Phaser allows you to run more than one scene at a time.
We can put all of our game logic into that scene and that scene will add like a HUD, so all of our logic is separated.

Create a UI.js file under scenes folder.
Copy code from boot.js to UI.js
Then remove the code that's within them and change preload() to init().
We are going to also remove the constructor and super paramtres.
To tell Phaser to run more than one scene at a time, then we are going to pass the propety in super and it's called "active", and that will allow our scene to run immediately:

<script>

    import "phaser";

export default class UIScene extends Phaser.Scene {
    constructor () {
        super({ key: "UI", active: true });
    }

    init() {
    }

    create() {
    }
}

</script>

Import our new UI scene in index.js.
Add the scene to the config. This needs to be after we add the game scene, otherwise we will only see the UI before the game scene loads and it will not run over the top of our game scene.


<script>

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


</script>

In our UI.js in our create() method, we are going to add some text to display to the player.
We also need variable to store the value that keeps track of the amount of coins the player has collected and then add that to the text field.
We are getting this ready to listen to an event.

<script>

    init() {
        this.coinsCollected = 0;
        
    }

    create() {
        // create score text
        this.scoreText = this.add.text(12, 12, `Score: ${this.coinsCollected}`, { fontSize: "32px", fill: "#fff" });
    }
}

</script>

When the coin is collected, we are going to dispatch an event.
Inside coin.js and in our collectCoin() function:

<script>

    collectCoin(player, coin) {
        console.log("Collected coin!");
        this.remove(coin, true, true);
        
        // dispatch an event
        this.scene.events.emit("coinCollected");
    }

</script>

Now, we are emiting to the game that the coinCollected function has been called, we are calling it "coinCollected".

In our UI.js, we are going to listen to the events from our game scene:

<script>

    create() {
        // create score text
        this.scoreText = this.add.text(12, 12, `Score: ${this.coinsCollected}`, { fontSize: "32px", fill: "#fff" });
    }
</script>

this.scene.get("Game"); references the game scene so we can start listening for events from that scene:

<script>

    create() {
        // create score text
        this.scoreText = this.add.text(12, 12, `Score: ${this.coinsCollected}`, { fontSize: "32px", fill: "#fff" });

        // get a reference from the game scene
        this.gameScene = this.scene.get("Game");

        // listen for events from that scene
        this.gameScene.events.on("coinCollected", () => {
            this.coinsCollected++;
            this.scoreText.setText(`Score: ${this.coinsCollected}`);
        });
    }
</script>

this.gameScene.events.on("coinCollected") picks up game scene emitting the "coinCollected" call, then upon that, it will increment the coinsCollected variable and then update the text to show this increment.

Now, the player can see the score when he moves around the level and it updates whenever he collects a coin.

Note that ${this.coinsCollected} is placed inside the backtick string so we can add the value of that variable inside the string. It is a temperate literal and allows us to pass in javascript values into the string. It will not work if the string is (') or ("). It will only work with back ticks (`).

**SUMMARY:**
1. Phaser allows you to run multiple scenes at one time.
2. This can be used to create aUI scene or HUD for your game.

# 11 - Adding Enemies
1. Create Enemy Game Objects from Enemies Object Layer in your Tiled level.
2. Add collisions between the enemies and the Blocked layer.
3. Use Phaser Scene Time events to move the enemies.

We are going to add in logic similar to coins.
First, in our game.js, we need to create the enemies.

<script>

    this.enemies = this.map.createFromObjects("Enemies", "Enemy", {});

</script>

this.map.createFromObjects("The name of the layer", "The name of the object", {This is an empty object method});
This is set to an empty object because it is going to return the children for each enemy in an enemy group, because we are going to create a new class called enemies which is going to be an arcade physics group and we are going to add each member of the class to our group.

<script>

    this.enemiesGroup = new Enemies(this.physics.world, this, this.enemies);

</script>

This creates an enemy inside the group from the class enemies.

Now it's time to add a new file called enemies.js inside the groups folder.
Copy the logic from our coin's class and add it to our enemies class, 
Instead of doing a static group, we are going to do a regular group.
Delete the coin methods.
Create a new method for our enemies:

<script>

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

</script>

We are importing Enemy from a separate enemy file. This file is our enemy class and it will have all of the properties for our enemy character movement functions and logic, similar to our player class, but for enemies all we are doing here is creating and adding each of the enemy characters to our enemies group using the enemy class. 

Also, we select between a range of sprite frames that are determined to be enemy frames inside the sprite sheet and randomly changing the appearance of each enemy upon creation. The spritFrames are defined as an array of values under our super(). This is the place where any variables we need to define will be added to our class so it's not unusual to see these defined here.

When we create Enemy from our Enemy class, we first need to pass it the scene context that's it will be in, then the position of where the enemy will spawn. For our example here, it will read off the tile map data to get this information as we determined in game.js using this.map.createFromObjects expression. After that, we then select a sprite frame that goes off whatever randNumber landed on from the previous line's calculation.

Now to talk about our enemy.js where we are creating each member from...
Create enemy.js inside the sprites folder.
Copy and paste the code from our player.js class. It will be similar.
Delete all of the methods in the class, leaving the constructor() and super() as they are, except change the frame number in super to the word 'frame' and also add this to the constructor parametres.
This is going to be where we can store the frame of the character becuase enemies have a range of different frames they can be.
So effectively, it shoud look like this at the moment:

<script>

    import "phaser";

    export default class Enemy extends Phaser.Physics.Arcade.Sprite {
        constructor(scene, x, y, frame) {
            super(scene, x, y, "characters", frame);
            this.scene = scene;

            // enable physics
            this.scene.physics.world.enable(this);
            
            // add our enemy to the scene
            this.scene.add.existing(this);

            // scale our enemy
            this.setScale(4);
        }

    }
</script>

As you can see not very different from player class at all, with just one thing changed.
Of, course we need to add some differences to this because for a start enemies have their own movement logic and will be moving automatically, so we are going to have to put in a timer that will call a movement function.
For this, we are going to use switch logic to help us do that.

First, let's add a time to our main enemy properties:

<script>

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, "characters", frame);
        this.scene = scene;

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

</script>

First, we are storing this entire timer in this.timeEvent if we need to refer to a property in this timer for some reason, we can do that easily.
So every 3000 miliseconds, we will call our move() function.
Set this to loop so it continuously keeps happening.
For this, we pass this as our scene context for the callbackScope. This is usually how it goes in most cases, and you will not see much change here across different projects.

Now for the move() function:

<script>

    move () {
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
        this.timeEvent = this.scene.time.addEvent({
            delay: 500,
            callback: () => {
                this.setVelocity(0);
            },
            callbackScope: this,
        });
    }

</script>

So, for this we store a Math.floor expression that will randomly select between 1 and 4 into randNumber.
That's what that's doing. You may have noticed that randNumber is also used when selecting a frame. This is not the same because they are in completely different scopes and are used for different things. If you wanted to call these variables different names, that would be OK to do. For this particular function, we are determining a whole number selected from a range of numbers.

That random number that gets determined is going to be used in our switch.
So switch (randNumber) and then a list of cases and a default it can refer to.
Basically, what we are saying here is that each case number is what randNumber could be and if that's the case run the code under the case.
In our situation, we are going to be setting the velocity of the enemy character to either go right, left, up or down.
We need to use the break keyword to tell the computer to not continue to leave this switch and not go any further when the switch runs.
We also have a default incase the above cases are not called, the enemy character will default to increase it's velocity by 100 on the X axis (move right), and then break out of the switch.

So really, it's quite simple, select a random whole number between a range and then once the possibilities of that range are determined, create a list of conditions that will initiate an action. In this case, a random direction for the enemy to move into.

**Bonus:** you can also create another switch that will trigger randomly to provide diagonal movement functions as well, but we are not doing this at the moment.

After the switch, inside move(), we are going to call a timer that will be a delay in time for the enemy to stop moving. Otherwise, our enemy character will continue to move until it is told to go into a different direction and in games enemies will usually move and then stop for a time before being told to move in another direction.

Now, don't forget to import enemies.js into our game.js file:

<script>

import "phaser";
import Player from "../sprites/player";
import Portal from "../sprites/portal";
import Coins from "../groups/coins";
import Enemies from "../groups/enemies";

</script>

Now that we have enemies moving around the level (feel free to test it), we are going to do collision between the player and the enemy and the surrounding consequences from that mechanic.

First, let's add an overlap detection in our addCollisions() logic inside game.js.
Make this the top of the overlap section of the method:

<script>

    addCollisions() {
        // collider functions...
        this.physics.add.overlap(this.player, this.enemiesGroup, this.player.enemyCollision.bind(this.player));
        // other overlap functions...
    }

</script>

This is similar to the other overlaps, we bind this.player with the function name so JS knows the context to call the function.

For our player function, we actually want to create this function because right now it doesn't exist:

inside player.js let's create it at the bottom of our class:

<script>

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

</script>

So with this method, we are doing a few things:
First, we are passing the player and enemy as parametres from the overlap call.
Then we are handling a collision delay.
When the player collides with the enemy we are checking to see if there is no collision delay.
The reason for this delay is important because we want to give the player some human possible reaction time for what just happened before suffering another consequence of collision with the enemy, so we need to check for this boolean to be false before proceeding.
Then we call a loseHealth(); function, that we will add the functioinality for later.
Then we set the hitDelay boolean to true. This will stop the player from being hit again in the same tick and only run the code (subtract health) once.
To give a visual representation to the player to communicate the collision and the effects of this collision, we change the player's tint to red.

After we do all of that we start a timer immediately for 1200 milliseconds.
This is the delay before allowing the player to be hit again and return to normal colour.
Again, callbackScope is always this to reference the context for this timer in JS.

So this entire function is called from the overlap detection in our game.js.

For the health system, we define a value called this.health = 3 in the player.js properties and create that hitDelay boolean:

<script>

    export default class Player extends Phaser.Physics.Arcade.Sprite {
        constructor(scene, x, y) {
            super(scene, x, y, "characters", 325);

            // player properties
            this.scene = scene;
            this.health = 3;
            this.hitDelay = false;

            //... the rest of the player properties...
        }

</script>

Now, we are ready to take health away!

Create another method for loseHealth():

<script>

    loseHealth() {
        this.health--;
        this.scene.events.emit("loseHealth", this.health);
        if(this.health === 0) {
            this.scene.loadNextLevel(true);
        }
    }

</script>

The first thing we do here of course is to subtract health from the player.
Then we are emitting "loseHealth" as a signal for our UI. This checks for a loseHealth event that will let our UI scene know that we are losing health and update the health displayed accordingly after we subtract the health.
The last thing we check is what the health is and what should happen when it reaches 0 and that is set to restart the level.

There are a couple of things we will cover here from this method, we will cover the emit that we are sending to the UI to update the health. This will be done in UI.js
The second thing is restructuring our loadNextLevel function to consider the player dying because right now, it's just going to load the next level without considering the health mechanic.

In UI.js we need to create a new text object for our health display inside the create() method:

<script>

    // create health text
    this.healthText = this.add.text(12, 50, `Health: 3`, { fontSize: "32px", fill: "#fff" });

</script>


Now we need to let know our UI scene know that the player has lost health:

<script>


    this.gameScene.events.on("loseHealth", (health) => {
        this.healthText.setText(`Health: ${health}`);
    });

</script>

This listens for player.js to emit "loseHealth" and the value of that is health which is from this.health in player.js upon emitting loseHealth.

then we call a function immediately on this event to update the healthText matching the value of the health variable.

For the level loading issue, we need to change our loadNextLevel().
We are currently only checking what level we are on and to move to the next or previous level.

So we need to add some more conditions to this. Behold:

<script>

    loadNextLevel(endGame) {
        
        if(!this.loadingLevel) {
            this.cameras.main.fade(500, 0, 0, 0);
            this.cameras.main.on("camerafadeoutcomplete", () => {
                if(endGame) {
                    this.scene.restart({ level: 1, levels: this._LEVELS, newGame: true });                    
                } else if(this._LEVEL === 1) {
                    this.scene.restart({ level: 2, levels: this._LEVELS, newGame: false });
                } else if(this._LEVEL === 2) {
                    this.scene.restart({ level: 1, levels: this._LEVELS, newGame: false });
                }
            });
        }
        this.loadingLevel = true;
    }

</script>

First, we want to pass in the endGame parameter. This is going to help us determine what we are going to do.
Before we fix loadNextLevel, we need to update our call for loadNextLevel because we need to pass in false so that the game knows that it is not ending the game when the player goes through a portal:

<script>

    this.physics.add.overlap(this.player, this.portal, this.loadNextLevel.bind(this, false));

</script>

Now we need to make an if else if else if statement.
If endGame is true, then restart the scene and go back to level 1 where the player started and make newGame true Otherwise the player would be moving between the two levels via the portal.

We also need to update the UI accordingly on endGame from our init() function in game.js.
During this we check to see if this._NEWGAME is called from data.newGame - the parameter we pass when restarting the scene.

<script>

    init(data) {
        console.log(data);
        this._LEVEL = data.level;
        this._LEVELS = data.levels;
        this._NEWGAME = data.newGame;

        this.loadingLevel = false;
        if(this._NEWGAME) {
            this.events.emit("newGame");
        } 

    }


</script>

We emit newGame for our UI and listen for that to update the coins collected text and health in UI.js create():

<script>
        this.gameScene.events.on("newGame", () => {
            this.coinsCollected = 0;
            this.scoreText.setText(`Score: ${this.coinsCollected}`);
            this.healthText.setText(`Health: 3`);
        });

</script>

Similar to losing health except, we are just listening for a single emit without worrying about parametres here because we are setting defaults with this function.
The score will be reset to 0 and the health will be reset to 3 along with the game starting all over again.

**SUMMARY:**
1. You can use Phaser Scene Time Events to schedule both repeatable and one time events
2. If you setup a repeatable time event you will need to make sure you destroy it when you no longer want it to run.
