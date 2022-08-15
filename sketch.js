
var car,car_working
var obstacle,obstacleImage,obsctacleG
var ground,groundImage
var obs,obsImage,obsG
var speed,speedImage
var score ;

function preload(){

car_working=loadImage("car11.png")
groundImage=loadImage("path.png")
obstacleImage=loadImage("obstacle11.png")
obsImage=loadImage("bot.png")
speedImage=loadImage("speed.png")
}

function setup() {
 createCanvas(600, 600)
 

    ground = createSprite(300,300)
    ground.addImage(groundImage);
    ground.velocityY=5
    //ground.debug=true
    ground.scale=1.8

    car=createSprite(305,350,25,100)
    car.addImage(car_working)
    car.scale=0.5
    //car.debug=true
    

    obsctacleG= new Group ()
    obsG= new Group()

   
}


function draw() {
    background("black")


    
    if(car.isTouching(obsctacleG) ) {

        background("green")
        stroke(255);
        fill(255);
        textSize(24);

       text("U are a bad driver", 120, 200);
      
        

        ground.velocityY=0
        ground.destroy()
        car.destroy()
        obs.destroy()
        speed.destroy()
        obstacle.destroy()

       
    }
    
 
    if (ground.y > 400){
        ground.y=1
       
      }

      car.x=mouseX

      var iop=Math.round(random(1,3));
  
      if (World.frameCount % 100 == 0) {

        if (iop == 1) {
      createObstacles()
        } else if (iop==2) {
        createobs()
        } else if (iop==3) {
            createSpeed()
        }

        
      
        ground.velocityY=ground.velocityY+0.25

      }
      
      


drawSprites()
}

function createObstacles () {

    //if (World.frameCount % 100 == 0) {

    
        var obstacle = createSprite(Math.round(random(75, 550),40, 10, 10));
        obstacle.addImage(obstacleImage);
        obstacle.scale=0.5;
        obstacle.velocityY = 3;
        obstacle.lifetime = 300;
        obsctacleG.add(obstacle);


       // }
    }

    function createobs () {

    
   // if (World.frameCount % 75 == 0) {

    var obs= createSprite(Math.round(random(75, 550),40, 10, 10));
    obs.addImage(obsImage);
    obs.scale=0.2;
    obs.velocityY = 3;
    obs.lifetime = 300;
    obsctacleG.add(obs)
   // }
}

function createSpeed() {

   //if (World.frameCount % 500 == 0) {

    
        var speed = createSprite(Math.round(random(250, 350),40, 10, 10));
        speed.addImage(speedImage);
        speed.scale=0.4;
        speed.velocityY = 2;
        speed.lifetime = 300;
        obsctacleG.add(speed)

       }
   //}
