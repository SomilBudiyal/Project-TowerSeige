const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;                 

var engine,world;

var slingshot;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var base1,base2;

var polygon;

var ground;

var gameState = "onSling";

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
  
  polygon = new Polygon(150,400,10,10);                  

  slingshot = new SlingShot(polygon.body,{x:150,y:400});                                                                                                                                       
}                                                                                                
                                                                                          
function draw() {                                                                                                                                                                               
  background("cyan");    
  
  //detectcollision(box1,polygon);
 //detectcollision(box2,polygon);
  //detectcollision(box3,polygon);
 //detectcollision(box4,polygon);
  //detectcollision(box5,polygon);
  //detectcollision(box6,polygon);
  //detectcollision(box7,polygon);
  //detectcollision(box8,polygon);      
  //detectcollision(box9,polygon);
//detectcollision(box10,polygon);

  //detectcollision(box11,polygon);
 //detectcollision(box12,polygon);
 //detectcollision(box13,polygon);
 //detectcollision(box14,polygon);
 //detectcollision(box15,polygon);
 //detectcollision(box16,polygon);
 //detectcollision(box17,polygon);
//detectcollision(box18,polygon);
 //detectcollision(box19,polygon);
 //detectcollision(box20,polygon);  
                                     
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
                  
  slingshot.display()                    
} 

//function detectcollision(lpolygon,lbox){
  //boxBodyPosition = lbox.body.position;
  //polygonBodyPosition = lpolygon.body.position;

 //var distance=dist(polygonBodyPosition.x, polygonBodyPosition.y, boxBodyPosition.x, boxBodyPosition.y);
 // if(distance<=lbox.diameter + lpolygon.diameter){
 //Matter.Body.setStatic(lbox.body,false);
  //}
 //}

     
function mouseDragged(){    
  if(gameState!=="launch"){                                                                                          
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
 }      
}          

function mouseReleased(){
  slingshot.fly();
  gameState = "launch";
}