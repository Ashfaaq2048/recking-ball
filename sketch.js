const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var groundobj;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ballobj;
var ropeobj;

var gameState = "onSling";



function setup() {
  var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

   

    ballobj = new Ball(200,200,80,80);

    ropeobj = new Rope(ballobj.body,{x:500,y:50});

    groundobj = new Ground(600,600,1200,20)

    box1 = new Box(1000,300,100,100);
    box2 = new Box(1000,280,100,100);
    box3 = new Box(1000,260,100,100);
    box4 = new Box(1000,240,100,100);
    box5 = new Box(1000,220,100,100);
    box6 = new Box(900,200,100,100);
    box7 = new Box(900,180,100,100);
    box8 = new Box(900,160,100,100);
    box9 = new Box(900,140,100,100);
    box10 = new Box(900,120,100,100);
}

function draw() {
  background('black');
  Engine.update(engine);
 
  groundobj.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  
  ballobj.display();

  ropeobj.display();



}
function mouseReleased(){
  ropeobj.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     ropeobj.attach(ballobj.body);
  }
}



