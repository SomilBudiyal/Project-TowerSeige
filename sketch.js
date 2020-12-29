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

  box1 = new Base(500,300,150,20);
  box2 = new Base(500,300,150,20);
  box3 = new Base(500,300,150,20);
  box4 = new Base(500,300,150,20);
  box5 = new Base(500,300,150,20);
  box6 = new Base(500,300,150,20);
  box7 = new Base(500,300,150,20);
  box8 = new Base(500,300,150,20);
  box9 = new Base(500,300,150,20);
  box10 = new Base(500,300,150,20);
  box11 = new Base(500,300,150,20);
  box12 = new Base(500,300,150,20);
  box13 = new Base(500,300,150,20); 
  box14 = new Base(500,300,150,20);
  box15 = new Base(500,300,150,20);
  box16 = new Base(500,300,150,20);
  box17 = new Base(500,300,150,20);
  box18 = new Base(500,300,150,20);
  box19 = new Base(500,300,150,20);
  box20 = new Base(500,300,150,20);
  
  polygon = new Polygon(100,200,50,50);
  
}

function draw() {
  background("brown");  

  ground.display();

  base1.display();
  base2.display();

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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  polygon.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}