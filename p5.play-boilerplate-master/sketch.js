function setup() { 
  createCanvas(800,400); 
  movingRect = createSprite(400, 200, 80, 30); 
  movingRect.shapeColor = "green"; 
  fixedRect = createSprite(200,200,50,80); 
  fixedRect.shapeColor = "green"; 
} 
  //movingRect.x-fixedRect.x = 
  function draw() { background("yellow"); 
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY; 
  // console.log(); 
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.width/2+fixedRect.width/2 && fixedRect.y - movingRect.y < movingRect.width/2+fixedRect.width/2  ){ 
    movingRect.shapeColor = "red"; 
    fixedRect.shapeColor = "red"; 
  }
    else{ 
      movingRect.shapeColor = "green"; 
      fixedRect.shapeColor = "green"; 
    } 
      drawSprites(); 
    }