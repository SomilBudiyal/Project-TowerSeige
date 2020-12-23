const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var slingshot;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var base1,base2;

var ground
var polygon;

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,800,1000,25);
  
  base1 = new Base(600,500,150,20);
  base2 = new Base(500,300,150,20);

  polygon = new Polygon(100,200,50,50);
  
}

function draw() {
  background("brown");  

  ground.display();

  base1.display();
  base2.display();

  polygon.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}