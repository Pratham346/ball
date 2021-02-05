const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1,pig3;
var backgroundImg,platform;
//var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
var ball;
var chain;
//var boom1;
var boxes = [];

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(100,100, 200, 30);


   ball = new Ball(180,600,70);
 for (var i = 0;i<7;i++)   {
     var box=new Box(350, 100, 50, 50);
     boxes.push(box);
     box=new Box(450, 100, 50, 50);
     boxes.push(box);
     box=new Box(550, 100, 50, 50);
     boxes.push(box);
 }

    //log6 = new Log(230,180,80, PI/2);
    chain =new Chain(ball.body, platform.body, {x:80, y:0} );
}

function draw(){
    
    background(0);
               
    
       
    
    Engine.update(engine);
    //strokeWeight(4);
    platform.display();
    ball.display();
    ground.display();
    chain.display();

    for (var i=0;i<21; i++){
        boxes[i].display();
    }
   
}

function mouseDragged(){
         Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


// //function mouseReleased(){
//   //  slingshot.fly();
//     gameState = "launched";
// }

// function keyPressed(){
//     if(keyCode === 32){
//          slingshot.attach(bird.body);
//          bird.trajectory=[];
//          Matter.Body.setPosition(bird.body, {x:200, y:50});
//          gameState="onSling";
//     }
// }

// async function getBackgroundImg(){
//     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//     var responseJSON = await response.json();

//     var datetime = responseJSON.datetime;
//     var hour = datetime.slice(11,13);
    
//     if(hour>=06 && hour<=19){
//         bg = "sprites/bg1.png";
//     }
//     else{
//         bg = "sprites/bg2.jpg";
//     }

//     backgroundImg = loadImage(bg);
//     console.log(backgroundImg);
// }
