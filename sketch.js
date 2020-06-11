var fixedpaddle,movingpaddle 
function setup() { 
  createCanvas(800,400); 
  movingpaddle=createSprite(400, 200, 50, 50);
movingpaddle.shapeColor="green"; 
fixedpaddle=createSprite(200,150,50,90);
fixedpaddle.shapeColor="green"; 
} 
    
    function draw() { background(255,255,255); 
      movingpaddle.y=World.mouseY;
      movingpaddle.x=World.mouseX; 
       if(movingpaddle.x-fixedpaddle.x< fixedpaddle.width/2+movingpaddle.width/2 && fixedpaddle.x-movingpaddle.x < fixedpaddle.width/2+movingpaddle.width/2
         && movingpaddle.y-fixedpaddle.y< fixedpaddle.height/2+movingpaddle.height/2 && fixedpaddle.y-movingpaddle.y < fixedpaddle.height/2+movingpaddle.height/2)
       { movingpaddle.shapeColor="red"; 
      fixedpaddle.shapeColor="red"; } 
       else{ movingpaddle.shapeColor="green";
     movingpaddle.shapeColor="green"; } 
        drawSprites(); 
      }
