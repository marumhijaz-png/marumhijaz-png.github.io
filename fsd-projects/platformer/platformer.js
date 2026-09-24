$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1300, 400, 50, 50);
createPlatform(130, 400, 50, 50, "gray");
createPlatform(100, 20, 10, 10, "lime");
createPlatform(100, 400, 50, 50);
createPlatform(150, 400, 10, 50);
createPlatform(10, 400, 50, 50);
createPlatform(50, 400, 50, 50);
createPlatform(130, 700, 50, 50);
createPlatform(300, 600, 50, 50);
createPlatform(200, 500, 50, 50);
// bright green for a finished platform



    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve", 650, 500);
createCollectable("diamond", 100, 150, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1000, 20, 10, 100, 1000, 6);
createCannon("right", 300, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
