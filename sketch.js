const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

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
                                                                                            
  base1 = new Base(590,500,150,20);                                                                                                                                                                               
  base2 = new Base(490,300,140,20);                                                                                                                                                                               
                                                                                          
  box1 = new Box(440,270,25,40);                                                                                                                                                                               
  box2 = new Box(470,270,25,40);                                                                                                                                                                               
  box3 = new Box(500,270,25,40);                                                                                                                                                                               
  box4 = new Box(530,270,25,40);                                                                                                                                                                               
  box5 = new Box(517,229,25,40);                                                                                                                                                                               
  box6 = new Box(455,229,25,40);                                                                                                                                                                               
  box7 = new Box(486,229,25,40);                                                                                                                                                                               
  box8 = new Box(500,190,25,40);                                                                                                                                                                               
  box9 = new Box(470,190,25,40);                                                                                                                                                                               
  box10 = new Box(485,150,25,40);                                                                                                                                                                               
  box11 = new Box(600,470,25,40);                                                                                                                                                                               
  box12 = new Box(570,470,25,40);                                                                                                                                                                                
  box13 = new Box(540,470,25,40);                                                                                                                                                                                
  box14 = new Box(630,470,25,40);                                                                                                                                  
  box15 = new Box(555,430,25,40);                                                                                                                                                                               
  box16 = new Box(585,430,25,40);                                                                                                                                                                               
  box17 = new Box(615,430,25,40);                                                                                                                                                                               
  box18 = new Box(565,390,25,40);                                                                                                                                                                               
  box19 = new Box(595,390,25,40);                                                                                                                                                                               
  box20 = new Box(580,350,25,40);      
  
  slingshot = new SlingShot(polygon.body,{x:281,y:724});
                                                                                             
  polygon = new Polygon(100,200,50,50);                                                                                                                                                                               
                                                                                                                                          
}                                                                                                
                                                                                          
function draw() {                                                                                                                                                                               
  background("cyan");    
  
  detectcollision(polygon,box1);
  detectcollision(polygon,box2);
  detectcollision(polygon,box3);
  detectcollision(polygon,box4);
  detectcollision(polygon,box5);
  detectcollision(polygon,box6);
  detectcollision(polygon,box7);
  detectcollision(polygon,box8);
  detectcollision(polygon,box9);
  detectcollision(polygon,box10);
                                                                                          
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
  
  polygon.display();    

  slingshot.display();
  
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
                          
}                                                                                                
     
function detectcollision(lpolygon,lbox){
  boxBodyPosition = lbox.body.position;
  polygonBodyPosition = lpolygon.body.position;

 var distance=dist(polygonBodyPosition.x, polygonBodyPosition.y, boxBodyPosition.x, boxBodyPosition.y);
  if(distance<=lbox.diameter + lpolygon.diameter){
    Matter.Body.setStatic(lbox.body,false);
  }
 }


function mouseDragged(){                                                                                                 
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}